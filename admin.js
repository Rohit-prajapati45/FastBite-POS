let menuItems = [];
let orders = [];

const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const money = value => `₹${Number(value || 0).toFixed(2)}`;

async function request(url, options = {}) {
    const response = await fetch(url, { credentials: 'include', ...options });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.message || 'Request failed.');
    return data;
}

function showLogin(message = '') {
    document.getElementById('admin-app').classList.add('hidden');
    document.getElementById('admin-login').classList.remove('hidden');
    const error = document.getElementById('admin-login-error');
    error.textContent = message;
    error.classList.toggle('hidden', !message);
}

function showApp() {
    document.getElementById('admin-login').classList.add('hidden');
    document.getElementById('admin-app').classList.remove('hidden');
    loadMenu();
    loadOrders();
}

async function restoreSession() {
    try {
        const { user } = await request('/api/me');
        if (user.role !== 'admin') return showLogin('Administrator access is required.');
        showApp();
    } catch (_) { showLogin(); }
}

async function loadMenu() {
    try {
        menuItems = (await request('/api/menu')).items || [];
        document.getElementById('admin-menu-list').innerHTML = menuItems.map(item => `
            <article class="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm flex">
                <img src="${escapeHtml(item.img)}" alt="" class="w-24 object-cover" onerror="this.style.display='none'">
                <div class="p-4 min-w-0 flex-1"><p class="font-bold text-gray-800 truncate">${escapeHtml(item.name)}</p><p class="text-xs text-gray-500 mt-1">${escapeHtml(item.category)}</p><div class="mt-3 flex justify-between items-center gap-3"><span class="font-bold text-orange-600">${money(item.price)}</span><span class="flex gap-3"><button class="edit-item text-xs font-bold text-orange-600" data-id="${item.id}">Edit</button><button class="remove-item text-xs font-bold text-red-500" data-id="${item.id}">Remove</button></span></div></div>
            </article>`).join('');
    } catch (error) { setMenuStatus(error.message, true); }
}

async function loadOrders() {
    try {
        orders = (await request('/api/orders')).orders || [];
        renderOrders();
    } catch (error) {
        document.getElementById('admin-orders-list').innerHTML = `<p class="bg-white rounded-2xl p-6 text-red-500">${escapeHtml(error.message)}</p>`;
    }
}

function renderOrders() {
    const query = document.getElementById('order-search').value.trim().toLowerCase();
    const matches = orders.filter(order => [order.billNo, order.customerName, order.mobile].some(value => String(value || '').toLowerCase().includes(query)));
    document.getElementById('admin-orders-list').innerHTML = matches.length ? matches.map(order => {
        const items = (order.items || []).map(item => `<li class="flex justify-between gap-4 py-2 border-b border-gray-100 last:border-0"><span>${escapeHtml(item.name)} <span class="text-gray-400">× ${Number(item.qty || 0)}</span></span><strong>${money(Number(item.price || 0) * Number(item.qty || 0))}</strong></li>`).join('');
        return `<details class="order-details bg-white rounded-2xl border border-gray-100 shadow-sm"><summary class="cursor-pointer list-none p-5 flex justify-between items-center gap-4"><div><p class="font-bold text-gray-800">#${escapeHtml(order.billNo)}</p><p class="text-sm text-gray-500 mt-1">${escapeHtml(order.customerName)} · ${escapeHtml(order.mobile)}</p></div><div class="text-right"><p class="font-bold text-orange-600">${money(order.total)}</p><p class="text-xs text-gray-400 mt-1">${escapeHtml(order.timestamp)}</p></div><i class="fas fa-chevron-down text-gray-400 transition-transform"></i></summary><div class="border-t border-gray-100 px-5 pb-5"><p class="text-xs font-bold uppercase tracking-wider text-gray-400 mt-4 mb-2">Items</p><ul>${items || '<li class="text-sm text-gray-400">No item details available.</li>'}</ul><div class="mt-4 text-sm text-gray-500 flex justify-between"><span>${escapeHtml(order.paymentMethod || '—')}</span><span>Subtotal ${money(order.subtotal)} · GST ${money(order.tax)}</span></div></div></details>`;
    }).join('') : '<p class="bg-white rounded-2xl p-10 text-center text-gray-400">No orders found.</p>';
}

function setMenuStatus(message, isError = false) {
    const status = document.getElementById('menu-status');
    status.textContent = message;
    status.className = `rounded-xl p-3 text-sm ${isError ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-700'}`;
}

function openItemModal(item) {
    document.getElementById('item-form').reset();
    document.getElementById('item-form-error').classList.add('hidden');
    document.getElementById('item-modal-title').textContent = item ? 'Edit Menu Item' : 'Add Menu Item';
    document.getElementById('item-id').value = item?.id || '';
    document.getElementById('item-name').value = item?.name || '';
    document.getElementById('item-price').value = item?.price ?? '';
    document.getElementById('item-category').value = item?.category || '';
    document.getElementById('item-image').value = item?.img || '';
    document.getElementById('item-modal').classList.remove('hidden');
    document.getElementById('item-modal').classList.add('flex');
}

function closeItemModal() { document.getElementById('item-modal').classList.add('hidden'); document.getElementById('item-modal').classList.remove('flex'); }

document.getElementById('admin-login-form').addEventListener('submit', async event => {
    event.preventDefault();
    try {
        await request('/api/admin/login', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({username:document.getElementById('admin-username').value.trim(), password:document.getElementById('admin-password').value}) });
        showApp();
    } catch (error) { showLogin(error.message); }
});
document.getElementById('admin-logout').addEventListener('click', async () => { try { await request('/api/logout', {method:'POST'}); } finally { showLogin(); } });
document.getElementById('new-item').addEventListener('click', () => openItemModal());
document.getElementById('close-item-modal').addEventListener('click', closeItemModal);
document.getElementById('admin-menu-list').addEventListener('click', async event => {
    const editButton = event.target.closest('.edit-item');
    if (editButton) return openItemModal(menuItems.find(item => item.id === Number(editButton.dataset.id)));
    const removeButton = event.target.closest('.remove-item');
    if (!removeButton || !window.confirm('Remove this menu item?')) return;
    try {
        await request(`/api/menu/${removeButton.dataset.id}`, { method:'DELETE' });
        setMenuStatus('Menu item removed. The POS will refresh it automatically.');
        loadMenu();
    } catch (error) { setMenuStatus(error.message, true); }
});
document.getElementById('order-search').addEventListener('input', renderOrders);
document.querySelectorAll('.admin-tab').forEach(tab => tab.addEventListener('click', () => { document.querySelectorAll('.admin-tab').forEach(button => button.classList.toggle('active', button === tab)); document.querySelectorAll('.admin-panel').forEach(panel => panel.classList.toggle('hidden', panel.id !== tab.dataset.panel)); }));
document.getElementById('item-form').addEventListener('submit', async event => {
    event.preventDefault();
    const id = document.getElementById('item-id').value;
    const item = { name:document.getElementById('item-name').value.trim(), price:Number(document.getElementById('item-price').value), category:document.getElementById('item-category').value.trim(), img:document.getElementById('item-image').value.trim() };
    try {
        await request(id ? `/api/menu/${id}` : '/api/menu', { method:id ? 'PUT' : 'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(item) });
        closeItemModal(); setMenuStatus('Menu saved. The POS will refresh it automatically.'); loadMenu();
    } catch (error) { const target = document.getElementById('item-form-error'); target.textContent = error.message; target.classList.remove('hidden'); }
});

restoreSession();
