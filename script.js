
        // Constants & Data
        const MENU_DATA = [
            { id: 1, name: 'Aloo Tikki Burger', price: 65, category: 'Veg Burgers', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop' },
            { id: 2, name: 'Crispy Veggie Burger', price: 89, category: 'Veg Burgers', img: 'https://images.unsplash.com/photo-1525059696034-476775a89271?w=400&h=300&fit=crop' },
            { id: 3, name: 'Spicy Mexican Burger', price: 110, category: 'Veg Burgers', img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&h=300&fit=crop' },
            { id: 4, name: 'Veg Maharaja Mac', price: 199, category: 'Veg Burgers', img: 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?w=400&h=300&fit=crop' },
            { id: 5, name: 'Double Patty Veg', price: 145, category: 'Veg Burgers', img: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop' },
            { id: 6, name: 'Sweet Corn Burger', price: 95, category: 'Veg Burgers', img: 'https://images.unsplash.com/photo-1512152272829-e3139592d56f?w=400&h=300&fit=crop' },
            { id: 7, name: 'Classic Paneer Burger', price: 129, category: 'Paneer Burgers', img: 'https://images.unsplash.com/photo-1460306423018-0356b3cb49a5?w=400&h=300&fit=crop' },
            { id: 8, name: 'Paneer Tikka Burger', price: 155, category: 'Paneer Burgers', img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop' },
            { id: 9, name: 'Spicy Paneer Crunch', price: 165, category: 'Paneer Burgers', img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop' },
            { id: 10, name: 'Tandoori Paneer Bun', price: 149, category: 'Paneer Burgers', img: 'https://images.unsplash.com/photo-1534790563335-bca4aa866179?w=400&h=300&fit=crop' },
            { id: 11, name: 'Paneer Cheese Burst', price: 185, category: 'Paneer Burgers', img: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop' },
            { id: 12, name: 'Schezwan Paneer Burger', price: 139, category: 'Paneer Burgers', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop' },
            { id: 13, name: 'Margherita Pizza', price: 249, category: 'Veg Pizza', img: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?w=400&h=300&fit=crop' },
            { id: 14, name: 'Farmhouse Pizza', price: 399, category: 'Veg Pizza', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop' },
            { id: 15, name: 'Peppy Paneer Pizza', price: 449, category: 'Veg Pizza', img: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400&h=300&fit=crop' },
            { id: 16, name: 'Corn & Cheese Pizza', price: 299, category: 'Veg Pizza', img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=300&fit=crop' },
            { id: 17, name: 'Veggie Supreme', price: 499, category: 'Veg Pizza', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop' },
            { id: 18, name: 'Tandoori Paneer Pizza', price: 479, category: 'Veg Pizza', img: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&h=300&fit=crop' },
            { id: 19, name: 'Double Cheese Pizza', price: 349, category: 'Veg Pizza', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop' },
            { id: 20, name: 'Capsicum & Tomato Pizza', price: 269, category: 'Veg Pizza', img: 'https://images.unsplash.com/photo-1574129624513-35f9922e9e1c?w=400&h=300&fit=crop' },
            { id: 21, name: 'Paneer Tikka Roll', price: 120, category: 'Rolls', img: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop' },
            { id: 22, name: 'Veg Kathi Roll', price: 80, category: 'Rolls', img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop' },
            { id: 23, name: 'Mushroom Roll', price: 110, category: 'Rolls', img: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop' },
            { id: 24, name: 'Soya Chaap Roll', price: 130, category: 'Rolls', img: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop' },
            { id: 25, name: 'Cheese Corn Roll', price: 140, category: 'Rolls', img: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop' },
            { id: 26, name: 'Chilli Paneer Roll', price: 150, category: 'Rolls', img: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop' },
            { id: 27, name: 'Double Paneer Roll', price: 170, category: 'Rolls', img: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop' },
            { id: 28, name: 'Bombay Sandwich', price: 75, category: 'Sandwiches', img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop' },
            { id: 29, name: 'Cheese Chutney Sandwich', price: 60, category: 'Sandwiches', img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop' },
            { id: 30, name: 'Grilled Veg Sandwich', price: 95, category: 'Sandwiches', img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop' },
            { id: 31, name: 'Paneer Club Sandwich', price: 145, category: 'Sandwiches', img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop' },
            { id: 32, name: 'Corn & Mayo Sandwich', price: 85, category: 'Sandwiches', img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop' },
            { id: 33, name: 'Aloo Masala Toast', price: 55, category: 'Sandwiches', img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop' },
            { id: 34, name: 'Classic Salted Fries', price: 85, category: 'Fries & Sides', img: 'https://images.unsplash.com/photo-1630384066252-11e1edca55a4?w=400&h=300&fit=crop' },
            { id: 35, name: 'Peri Peri Fries', price: 110, category: 'Fries & Sides', img: 'https://images.unsplash.com/photo-1630384066252-11e1edca55a4?w=400&h=300&fit=crop' },
            { id: 36, name: 'Cheese Loaded Fries', price: 165, category: 'Fries & Sides', img: 'https://images.unsplash.com/photo-1630384066252-11e1edca55a4?w=400&h=300&fit=crop' },
            { id: 37, name: 'Veg Nuggets (8pc)', price: 120, category: 'Fries & Sides', img: 'https://images.unsplash.com/photo-1562967914-6cbb048ca391?w=400&h=300&fit=crop' },
            { id: 38, name: 'Onion Rings', price: 105, category: 'Fries & Sides', img: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&h=300&fit=crop' },
            { id: 39, name: 'Paneer Popcorn', price: 155, category: 'Fries & Sides', img: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&h=300&fit=crop' },
            { id: 40, name: 'Potato Wedges', price: 115, category: 'Fries & Sides', img: 'https://images.unsplash.com/photo-1630384066252-11e1edca55a4?w=400&h=300&fit=crop' },
            { id: 41, name: 'Coca Cola 250ml', price: 30, category: 'Cold Drinks', img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=300&fit=crop' },
            { id: 42, name: 'Sprite 250ml', price: 30, category: 'Cold Drinks', img: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=400&h=300&fit=crop' },
            { id: 43, name: 'Thums Up 250ml', price: 30, category: 'Cold Drinks', img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=300&fit=crop' },
            { id: 44, name: 'Fresh Lime Soda', price: 55, category: 'Cold Drinks', img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=300&fit=crop' },
            { id: 45, name: 'Classic Vanilla Shake', price: 110, category: 'Shakes', img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop' },
            { id: 46, name: 'Cold Coffee', price: 95, category: 'Shakes', img: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?w=400&h=300&fit=crop' },
            { id: 47, name: 'Chocolate Oreo Shake', price: 145, category: 'Shakes', img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop' },
            { id: 48, name: 'Strawberry Shake', price: 130, category: 'Shakes', img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop' },
            { id: 49, name: 'Choco Lava Cake', price: 99, category: 'Desserts', img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop' },
            { id: 50, name: 'Vanilla Ice Cream', price: 45, category: 'Desserts', img: 'https://images.unsplash.com/photo-1501443762994-82bd5dabb892?w=400&h=300&fit=crop' },
        ];

        const CATEGORIES = ['All', 'Veg Burgers', 'Paneer Burgers', 'Veg Pizza', 'Rolls', 'Sandwiches', 'Fries & Sides', 'Cold Drinks', 'Shakes', 'Desserts'];

        // App State
        let cart = [];
        let activeCategory = 'All';
        let searchQuery = '';
        let paymentMethod = 'Cash';
        let upiPaymentConfirmed = false;
        let orderHistory = [];
        let currentCompletedOrder = null;
        try {
            orderHistory = JSON.parse(localStorage.getItem('fastbite_pos_order_history') || '[]');
        } catch(e) { orderHistory = []; }
        
        let isAdmin = false;
        let currentBillNo = '';
        let showHistory = false;

        // Image Fallback Constant
        const IMG_FALLBACK = 'https://images.unsplash.com/photo-1493770348161-369560ae357d?w=400&h=300&fit=crop&q=60';

        // Initialize UI
        function init() {
            currentBillNo = generateBillNo();
            renderCategories();
            renderMenu();
            updateClock();
            setInterval(updateClock, 1000);
            updateCartUI();
            checkAdminStatus();
        }

        // Logic Functions
        function generateBillNo() {
            let seq = 1;
            try {
                seq = parseInt(localStorage.getItem('fastbite_pos_bill_sequence') || '1');
            } catch(e) { seq = 1; }
            
            const date = new Date();
            const dateStr = `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`;
            return `ORD-${dateStr}-${seq.toString().padStart(4, '0')}`;
        }

        function incrementBillSeq() {
            try {
                const seq = parseInt(localStorage.getItem('fastbite_pos_bill_sequence') || '1');
                localStorage.setItem('fastbite_pos_bill_sequence', (seq + 1).toString());
            } catch(e) {}
        }

        function updateClock() {
            const now = new Date();
            const timeEl = document.getElementById('clock-time');
            const dateEl = document.getElementById('clock-date');
            if(timeEl) timeEl.innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            if(dateEl) dateEl.innerText = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        }

        function renderCategories() {
            const container = document.getElementById('category-sidebar');
            if(!container) return;
            const iconMap = { 'All': 'fa-th-large', 'Veg Burgers': 'fa-burger', 'Paneer Burgers': 'fa-cheese', 'Veg Pizza': 'fa-pizza-slice', 'Rolls': 'fa-scroll', 'Sandwiches': 'fa-bread-slice', 'Fries & Sides': 'fa-hotdog', 'Cold Drinks': 'fa-glass-whiskey', 'Shakes': 'fa-ice-cream', 'Desserts': 'fa-cookie' };
            
            container.innerHTML = CATEGORIES.map(cat => `
                <button onclick="setCategory('${cat}')" class="flex flex-col items-center gap-1 transition-colors group ${activeCategory === cat ? 'text-orange-600' : 'text-gray-400 hover:text-orange-600'}">
                    <div class="p-3 rounded-xl transition-colors ${activeCategory === cat ? 'bg-orange-50' : 'bg-transparent group-hover:bg-orange-50'}">
                        <i class="fas ${iconMap[cat] || 'fa-utensils'} text-xl"></i>
                    </div>
                    <span class="text-[10px] font-bold uppercase text-center px-1 leading-tight">${cat === 'All' ? 'All' : cat.split(' ').join('\n')}</span>
                </button>
            `).join('');
        }

        function renderMenu() {
            const container = document.getElementById('menu-grid');
            if(!container) return;
            
            const filtered = MENU_DATA.filter(item => {
                // Category Filter
                const matchesCat = activeCategory === 'All' || item.category === activeCategory;
                
                // Enhanced Search Logic: search in product name and category name
                const query = searchQuery.toLowerCase();
                const matchesSearch = item.name.toLowerCase().includes(query) || 
                                     item.category.toLowerCase().includes(query);
                
                return matchesCat && matchesSearch;
            });

            container.innerHTML = filtered.map(item => `
                <div class="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 menu-card cursor-pointer group" onclick="addToCart(${item.id})">
                    <div class="overflow-hidden h-40 relative">
                        <img src="${item.img}" 
                             onerror="this.onerror=null;this.src='${IMG_FALLBACK}'" 
                             alt="${item.name}" 
                             class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    </div>
                    <div class="p-4">
                        <h3 class="font-bold text-gray-800 leading-tight mb-1 group-hover:text-orange-600 transition-colors">${item.name}</h3>
                        <p class="text-[10px] font-bold text-gray-400 mb-3 uppercase tracking-wider">${item.category}</p>
                        <div class="flex justify-between items-center">
                            <span class="text-lg font-bold text-gray-800">₹${item.price.toFixed(2)}</span>
                            <div class="bg-orange-50 text-orange-600 p-2 rounded-lg group-hover:bg-orange-600 group-hover:text-white transition-all transform group-active:scale-90">
                                <i class="fas fa-plus"></i>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
            
            const titleEl = document.getElementById('active-category-title');
            if(titleEl) titleEl.innerText = searchQuery ? `Search: "${searchQuery}"` : activeCategory;
        }

        function setCategory(cat) {
            activeCategory = cat;
            showHistory = false;
            toggleView('pos');
            renderCategories();
            renderMenu();
        }

        function handleSearch() {
            searchQuery = document.getElementById('menu-search').value;
            // If user is searching, we don't necessarily want to force "All", 
            // but many users expect search to be global. For now, we search within category.
            renderMenu();
        }

        function addToCart(id) {
            const item = MENU_DATA.find(i => i.id === id);
            if (!item) return;
            const existing = cart.find(i => i.id === id);
            if (existing) {
                existing.qty++;
            } else {
                cart.push({ ...item, qty: 1 });
            }
            updateCartUI();
        }

        function updateQty(id, delta) {
            const item = cart.find(i => i.id === id);
            if (item) {
                item.qty += delta;
                if (item.qty <= 0) {
                    cart = cart.filter(i => i.id !== id);
                }
            }
            updateCartUI();
        }

        function updateCartUI() {
            const list = document.getElementById('cart-list');
            const empty = document.getElementById('cart-empty');
            if(!list || !empty) return;
            
            if (cart.length === 0) {
                list.classList.add('hidden');
                empty.classList.remove('hidden');
            } else {
                list.classList.remove('hidden');
                empty.classList.add('hidden');
                list.innerHTML = cart.map(item => `
                    <div class="flex items-center gap-4 animate-fadeIn">
                        <img src="${item.img}" 
                             onerror="this.onerror=null;this.src='${IMG_FALLBACK}'"
                             class="w-14 h-14 rounded-xl object-cover shrink-0 shadow-sm">
                        <div class="flex-1 min-w-0">
                            <h4 class="text-xs font-bold text-gray-800 truncate">${item.name}</h4>
                            <p class="text-[10px] text-orange-600 font-bold uppercase mt-0.5">₹${item.price.toFixed(2)}</p>
                            <div class="flex items-center gap-3 mt-2">
                                <button onclick="updateQty(${item.id}, -1)" class="w-6 h-6 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-orange-50 hover:text-orange-600 transition-all">
                                    <i class="fas fa-minus text-[8px]"></i>
                                </button>
                                <span class="text-xs font-bold w-4 text-center">${item.qty}</span>
                                <button onclick="updateQty(${item.id}, 1)" class="w-6 h-6 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-orange-50 hover:text-orange-600 transition-all">
                                    <i class="fas fa-plus text-[8px]"></i>
                                </button>
                            </div>
                        </div>
                        <div class="text-right shrink-0">
                            <p class="text-sm font-bold text-gray-800">₹${(item.price * item.qty).toFixed(2)}</p>
                        </div>
                    </div>
                `).join('');
            }

            const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
            const tax = subtotal * 0.1;
            const total = subtotal + tax;

            const subEl = document.getElementById('summary-subtotal');
            const taxEl = document.getElementById('summary-tax');
            const totalEl = document.getElementById('summary-total');
            const billEl = document.getElementById('bill-no-display');
            
            if(subEl) subEl.innerText = `₹${subtotal.toFixed(2)}`;
            if(taxEl) taxEl.innerText = `₹${tax.toFixed(2)}`;
            if(totalEl) totalEl.innerText = `₹${total.toFixed(2)}`;
            if(billEl) billEl.innerText = `#${currentBillNo}`;

            const checkoutBtn = document.getElementById('checkout-btn');
            if (checkoutBtn) {
                if (cart.length > 0) {
                    checkoutBtn.classList.remove('bg-gray-300', 'cursor-not-allowed');
                    checkoutBtn.classList.add('bg-orange-600', 'hover:bg-orange-700');
                } else {
                    checkoutBtn.classList.add('bg-gray-300', 'cursor-not-allowed');
                    checkoutBtn.classList.remove('bg-orange-600', 'hover:bg-orange-700');
                }
            }
        }

        function setPayment(method) {
            paymentMethod = method;
            const cashBtn = document.getElementById('pay-cash');
            const upiBtn = document.getElementById('pay-upi');
            const qrBox = document.getElementById('upi-qr-box');
            if(cashBtn) cashBtn.className = method === 'Cash' ? 'py-2 text-xs font-bold rounded-lg transition-all bg-white text-orange-600 shadow-sm' : 'py-2 text-xs font-bold rounded-lg transition-all text-gray-500 hover:text-gray-700';
            if(upiBtn) upiBtn.className = method === 'UPI' ? 'py-2 text-xs font-bold rounded-lg transition-all bg-white text-orange-600 shadow-sm' : 'py-2 text-xs font-bold rounded-lg transition-all text-gray-500 hover:text-gray-700';
            if(qrBox) qrBox.classList.toggle('hidden', method !== 'UPI');
            const checkoutActions = document.getElementById('checkout-actions');
            if (checkoutActions) checkoutActions.classList.toggle('upi-sticky-actions', method === 'UPI');
        }

        function validateInput(type) {
            const nameEl = document.getElementById('cust-name');
            const mobileEl = document.getElementById('cust-mobile');
            if(!nameEl || !mobileEl) return;
            
            const name = nameEl.value;
            const mobile = mobileEl.value;
            
            if (type === 'name') {
                const isValid = name.trim().length > 0 && /^[a-zA-Z\s]+$/.test(name);
                const errName = document.getElementById('error-name');
                if(errName) errName.classList.toggle('hidden', isValid);
            }
            if (type === 'mobile') {
                const isValid = /^\d{10}$/.test(mobile);
                const errMob = document.getElementById('error-mobile');
                if(errMob) errMob.classList.toggle('hidden', isValid);
            }
        }

        function clearCart(confirm) {
            if (confirm && cart.length > 0) {
                if (!window.confirm('Clear current order?')) return;
            }
            cart = [];
            const nameEl = document.getElementById('cust-name');
            const mobEl = document.getElementById('cust-mobile');
            const errName = document.getElementById('error-name');
            const errMob = document.getElementById('error-mobile');
            
            if(nameEl) nameEl.value = '';
            if(mobEl) mobEl.value = '';
            if(errName) errName.classList.add('hidden');
            if(errMob) errMob.classList.add('hidden');
            updateCartUI();
        }

        async function processPayment() {
            if (cart.length === 0) return;
            const nameEl = document.getElementById('cust-name');
            const mobileEl = document.getElementById('cust-mobile');
            if(!nameEl || !mobileEl) return;

            const name = nameEl.value.trim();
            const mobile = mobileEl.value.trim();
            const isNameValid = name.length > 0 && /^[a-zA-Z\s]+$/.test(name);
            const isMobileValid = /^\d{10}$/.test(mobile);

            const errName = document.getElementById('error-name');
            const errMob = document.getElementById('error-mobile');
            if(errName) errName.classList.toggle('hidden', isNameValid);
            if(errMob) errMob.classList.toggle('hidden', isMobileValid);
            if (!isNameValid || !isMobileValid) return;

            const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
            const tax = subtotal * 0.1;
            const total = subtotal + tax;
            const inlineAmountEl = document.getElementById('upi-inline-amount');
            if (inlineAmountEl) inlineAmountEl.textContent = `₹${total.toFixed(2)}`;

            // UPI uses an explicit confirmation step. The demo QR cannot verify
            // a real bank transaction, so the cashier confirms it manually.
            if (paymentMethod === 'UPI' && !upiPaymentConfirmed) {
                const amountEl = document.getElementById('upi-payment-amount');
                const modal = document.getElementById('upi-payment-modal');
                if (amountEl) amountEl.textContent = `₹${total.toFixed(2)}`;
                if (modal) modal.classList.remove('hidden');
                return;
            }

            const timestamp = new Date().toLocaleString();

            const order = {
                billNo: currentBillNo,
                customerName: name,
                mobile: mobile,
                items: JSON.parse(JSON.stringify(cart)),
                subtotal, tax, total,
                paymentMethod,
                timestamp
            };

            // Save to the backend database. Keep local history too for the existing UI.
            try {
                const response = await fetch('/api/orders', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                    body: JSON.stringify(order)
                });
                const data = await response.json().catch(() => ({}));
                if (!response.ok) throw new Error(data.message || 'Could not save the bill.');
            } catch (error) {
                alert(error.message || 'Could not save the bill. Please check the backend.');
                return;
            }

            orderHistory.unshift(order);
            try {
                localStorage.setItem('fastbite_pos_order_history', JSON.stringify(orderHistory));
            } catch(e) {}

            currentCompletedOrder = order;

            const mBill = document.getElementById('modal-bill-no');
            const mTotal = document.getElementById('modal-total');
            const mMethod = document.getElementById('modal-method');
            const mModal = document.getElementById('success-modal');

            if(mBill) mBill.innerText = `#${currentBillNo}`;
            if(mTotal) mTotal.innerText = `Total: ₹${total.toFixed(2)}`;
            if(mMethod) mMethod.innerText = `${paymentMethod} Payment`;
            if(mModal) mModal.classList.remove('hidden');
        }

        function cancelUpiPayment() {
            upiPaymentConfirmed = false;
            const modal = document.getElementById('upi-payment-modal');
            const qrBox = document.getElementById('upi-qr-box');
            if (modal) modal.classList.add('hidden');
            if (qrBox) qrBox.classList.add('hidden');
            setPayment('Cash');
        }

        async function completeUpiPayment() {
            upiPaymentConfirmed = true;
            const modal = document.getElementById('upi-payment-modal');
            if (modal) modal.classList.add('hidden');
            await processPayment();
            upiPaymentConfirmed = false;
        }

        function sendBillToCustomer() {
            const order = currentCompletedOrder;
            if (!order) return;

            // WhatsApp is used here because a normal website cannot silently send an SMS.
            // The customer must have WhatsApp on this number; WhatsApp will open with the bill ready to send.
            const itemsText = order.items.map(item =>
                `• ${item.name} x${item.qty} = ₹${(item.price * item.qty).toFixed(2)}`
            ).join('\n');

            const message = [
                '🍔 *FastBite POS - Bill*',
                `Bill No: #${order.billNo}`,
                `Customer: ${order.customerName}`,
                `Date: ${order.timestamp}`,
                '',
                '*Items:*',
                itemsText,
                '',
                `Subtotal: ₹${order.subtotal.toFixed(2)}`,
                `GST (10%): ₹${order.tax.toFixed(2)}`,
                `*Total: ₹${order.total.toFixed(2)}*`,
                `Payment: ${order.paymentMethod}`,
                '',
                'Thank you for visiting FastBite! 🍔'
            ].join('\n');

            const cleanMobile = order.mobile.replace(/\D/g, '');
            const whatsappUrl = `https://wa.me/91${cleanMobile}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        }

        function handlePrintReceipt() {
            const nameEl = document.getElementById('cust-name');
            const mobileEl = document.getElementById('cust-mobile');
            if(!nameEl || !mobileEl) return;

            const name = nameEl.value;
            const mobile = mobileEl.value;
            const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
            const tax = subtotal * 0.1;
            const total = subtotal + tax;

            const prHeader = document.getElementById('print-header');
            const prItems = document.getElementById('print-items');
            const prTotals = document.getElementById('print-totals');

            if(prHeader) prHeader.innerHTML = `
                <p><strong>Bill No:</strong> ${currentBillNo}</p>
                <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
                <p><strong>Customer:</strong> ${name}</p>
                <p><strong>Mobile:</strong> ${mobile}</p>
            `;
            if(prItems) prItems.innerHTML = cart.map(i => `
                <tr><td class="py-1">${i.name}</td><td class="py-1 text-center">${i.qty}</td><td class="py-1 text-right">₹${(i.price * i.qty).toFixed(2)}</td></tr>
            `).join('');
            if(prTotals) prTotals.innerHTML = `
                <div class="flex justify-between"><span>Subtotal:</span><span>₹${subtotal.toFixed(2)}</span></div>
                <div class="flex justify-between"><span>Tax (10%):</span><span>₹${tax.toFixed(2)}</span></div>
                <div class="flex justify-between font-bold text-lg"><span>Total:</span><span>₹${total.toFixed(2)}</span></div>
                <div class="flex justify-between mt-2 border-t pt-2 italic"><span>Payment:</span><span>${paymentMethod}</span></div>
            `;
            window.print();
            closeSuccessModal();
        }

        function closeSuccessModal() {
            const modal = document.getElementById('success-modal');
            if(modal) modal.classList.add('hidden');
            incrementBillSeq();
            currentBillNo = generateBillNo();
            clearCart(false);
        }

        // Admin Auth
        function toggleView(view) {
            const posV = document.getElementById('pos-view');
            const histV = document.getElementById('history-view');
            if(!posV || !histV) return;

            if (view === 'history') {
                posV.classList.add('hidden');
                histV.classList.remove('hidden');
                showHistory = true;
                checkAdminStatus();
            } else {
                posV.classList.remove('hidden');
                histV.classList.add('hidden');
                showHistory = false;
            }
        }

        async function loginAdmin(e) {
            e.preventDefault();
            if (currentUser && currentUser.role === 'admin') {
                isAdmin = true;
                checkAdminStatus();
                return;
            }
            const err = document.getElementById('admin-error');
            if (err) {
                err.innerText = 'Admin access requires an Administrator account.';
                err.classList.remove('hidden');
                setTimeout(() => err.classList.add('hidden'), 2500);
            }
        }

        function logoutAdmin() {
            logoutFromBackend();
        }

        function checkAdminStatus() {
            const loginCard = document.getElementById('admin-login-card');
            const historyContent = document.getElementById('history-content');
            const logoutBtn = document.getElementById('logout-btn');
            const adminBtn = document.getElementById('admin-btn');
            if(!loginCard || !historyContent || !logoutBtn || !adminBtn) return;

            if (isAdmin) {
                loginCard.classList.add('hidden');
                historyContent.classList.remove('hidden');
                logoutBtn.classList.remove('hidden');
                adminBtn.innerHTML = '<i class="fas fa-history mr-2"></i>Order History';
                renderHistory();
            } else {
                loginCard.classList.remove('hidden');
                historyContent.classList.add('hidden');
                logoutBtn.classList.add('hidden');
                adminBtn.innerHTML = '<i class="fas fa-lock mr-2"></i>Order History';
            }
        }

        function renderHistory() {
            const list = document.getElementById('history-list');
            const searchEl = document.getElementById('history-search');
            if(!list || !searchEl) return;
            
            const query = searchEl.value.toLowerCase();
            const filtered = orderHistory.filter(o => 
                o.billNo.toLowerCase().includes(query) ||
                o.customerName.toLowerCase().includes(query) ||
                o.mobile.includes(query)
            );

            if (filtered.length === 0) {
                list.innerHTML = `<div class="bg-white rounded-2xl p-12 text-center text-gray-400 border border-dashed border-gray-300"><i class="fas fa-folder-open text-5xl mb-4"></i><p>No transactions found.</p></div>`;
            } else {
                list.innerHTML = filtered.map(order => `
                    <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div class="flex-1">
                            <div class="flex items-center gap-2 mb-1">
                                <span class="font-bold text-gray-800 text-lg">#${order.billNo}</span>
                                <span class="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded font-bold uppercase">${order.paymentMethod}</span>
                            </div>
                            <div class="flex flex-wrap gap-4 mt-2">
                                <span class="text-sm text-gray-600"><i class="fas fa-user mr-2 text-gray-400"></i>${order.customerName}</span>
                                <span class="text-sm text-gray-600"><i class="fas fa-phone mr-2 text-gray-400"></i>${order.mobile}</span>
                            </div>
                        </div>
                        <div class="text-left md:text-center shrink-0">
                            <p class="text-[10px] text-gray-400 uppercase font-bold mb-1">Date & Time</p>
                            <p class="text-sm font-medium text-gray-800">${order.timestamp}</p>
                        </div>
                        <div class="text-left md:text-right shrink-0">
                            <p class="text-[10px] text-gray-400 uppercase font-bold mb-1">Total</p>
                            <p class="text-xl font-bold text-orange-600">₹${order.total.toFixed(2)}</p>
                        </div>
                    </div>
                `).join('');
            }
        }

        // Run Init
        window.addEventListener('DOMContentLoaded', init);


        // ============================================================
        // BACKEND LOGIN / ROLE INTEGRATION
        // The original POS/menu/cart/printing/history code remains intact.
        // ============================================================
        let currentUser = null;

        async function backendLogin(event) {
            event.preventDefault();

            const login = document.getElementById('app-login');
            if (login) login.classList.add('fb3d-auth');

            const username = document.getElementById('app-login-username').value.trim();
            const password = document.getElementById('app-login-password').value;
            const errorEl = document.getElementById('app-login-error');

            try {
                const response = await fetch('/api/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                    body: JSON.stringify({ username, password })
                });

                const data = await response.json();

                if (!response.ok) throw new Error(data.message || 'Invalid username or password');

                currentUser = data.user;
                isAdmin = currentUser.role === 'admin';

                if (login) login.classList.add('fb3d-success');
                setTimeout(enterAppAfterLogin, 650);
            } catch (error) {
                errorEl.innerText = error.message;
                errorEl.classList.remove('hidden');
                const btn = document.getElementById('fb-login-submit');
                if (btn) {
                    btn.disabled = false;
                    const normal = btn.querySelector('.fb3d-submit-text');
                    const loading = btn.querySelector('.fb3d-loading');
                    if (normal) normal.classList.remove('hidden');
                    if (loading) loading.classList.add('hidden');
                }
                if (login) login.classList.remove('fb3d-auth');
            }
        }

        async function restoreBackendSession() {
            try {
                const response = await fetch('/api/me', { credentials: 'include' });
                if (!response.ok) {
                    showAppLogin();
                    return;
                }

                const data = await response.json();
                currentUser = data.user;
                isAdmin = currentUser.role === 'admin';
                enterAppAfterLogin();
            } catch (error) {
                showAppLogin();
            }
        }

        function showAppLogin() {
            const login = document.getElementById('app-login');
            if (login) login.classList.remove('hidden', 'fb3d-auth', 'fb3d-success');
            const btn = document.getElementById('fb-login-submit');
            if (btn) {
                btn.disabled = false;
                const normal = btn.querySelector('.fb3d-submit-text');
                const loading = btn.querySelector('.fb3d-loading');
                if (normal) normal.classList.remove('hidden');
                if (loading) loading.classList.add('hidden');
            }

            // Lock only the original application shell; nothing inside it is changed.
            document.querySelectorAll('body > nav, body > .flex.flex-1').forEach(el => {
                el.classList.add('hidden');
            });
        }

        function enterAppAfterLogin() {
            const login = document.getElementById('app-login');
            if (login) login.classList.add('hidden');

            document.querySelectorAll('body > nav, body > .flex.flex-1').forEach(el => {
                el.classList.remove('hidden');
            });

            // Role-based UI: the existing Order History button is available only to Admin.
            const adminBtn = document.getElementById('admin-btn');
            if (adminBtn) {
                adminBtn.classList.toggle('hidden', currentUser.role !== 'admin');
            }

            // Use the existing user area.
            const nameEl = document.querySelector('nav .text-right p.text-sm.font-bold');
            const roleEl = document.querySelector('nav .text-right p.text-xs.text-gray-500');
            if (nameEl) nameEl.innerText = (currentUser.name || currentUser.username).toUpperCase();
            if (roleEl) roleEl.innerText = currentUser.role === 'admin' ? 'Administrator' : 'Cashier';

            const logoutBtn = document.getElementById('logout-btn');
            if (logoutBtn) logoutBtn.classList.remove('hidden');

            checkAdminStatus();
        }

        async function logoutFromBackend() {
            try {
                await fetch('/api/logout', {
                    method: 'POST',
                    credentials: 'include'
                });
            } catch(e) {}

            currentUser = null;
            isAdmin = false;

            showAppLogin();
        }

        // Make the existing history button role-aware.
        const originalToggleView = toggleView;
        toggleView = function(view) {
            if (view === 'history' && (!currentUser || currentUser.role !== 'admin')) return;
            return originalToggleView(view);
        };

        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('app-login-form');
            if (form) form.addEventListener('submit', backendLogin);

            const world = document.getElementById('fb3d-world');
            const terminal = document.getElementById('fb3d-terminal');
            const login = document.getElementById('app-login');
            if (world && terminal && login) {
                const move = (x, y) => {
                    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
                    const rx = (0.5 - y) * 7;
                    const ry = (x - 0.5) * 9;
                    world.style.transform = `rotateX(${rx * .35}deg) rotateY(${ry * .35}deg)`;
                    if (!login.classList.contains('fb3d-auth')) {
                        terminal.style.transform = `translate(-50%,-48%) rotateX(${7 + rx * .28}deg) rotateY(${-7 + ry * .32}deg) translateZ(70px)`;
                    }
                };
                window.addEventListener('mousemove', e => move(e.clientX / window.innerWidth, e.clientY / window.innerHeight), {passive:true});
                window.addEventListener('mouseleave', () => { world.style.transform=''; if(!login.classList.contains('fb3d-auth')) terminal.style.transform=''; });
            }

            const passwordToggle = document.getElementById('fb-password-toggle');
            if (passwordToggle) {
                passwordToggle.addEventListener('click', function() {
                    const input = document.getElementById('app-login-password');
                    if (!input) return;
                    const show = input.type === 'password';
                    input.type = show ? 'text' : 'password';
                    passwordToggle.innerHTML = '<i class="fas ' + (show ? 'fa-eye-slash' : 'fa-eye') + '"></i>';
                    passwordToggle.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
                });
            }

            if (form) {
                form.addEventListener('submit', function() {
                    const btn = document.getElementById('fb-login-submit');
                    if (!btn) return;
                    btn.disabled = true;
                    const normal = btn.querySelector('.fb3d-submit-text');
                    const loading = btn.querySelector('.fb3d-loading');
                    if (normal) normal.classList.add('hidden');
                    if (loading) loading.classList.remove('hidden');
                });
            }

            // Let the original init() finish normally first, then restore backend session.
            setTimeout(restoreBackendSession, 0);
        });

