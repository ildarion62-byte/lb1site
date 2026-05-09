const { createApp } = Vue;

createApp({
    data() {
        return {
            products: [], 
            cart: {},
            selectedImage: null
        }
    },
    computed: {
      
        cartItems() {
            let items = [];
            for (const id in this.cart) {
                if (this.cart[id] > 0) {
                    
                    const product = this.products.find(p => String(p.id) === String(id));
                    if (product) {
                        items.push({
                            ...product,
                            quantity: this.cart[id],
                            itemTotal: product.price * this.cart[id]
                        });
                    }
                }
            }
            return items;
        },
        cartTotal() {
            return this.cartItems.reduce((sum, item) => sum + item.itemTotal, 0);
        }
    },
    methods: {
        updateQuantity(id, delta) {
            if (!this.cart[id]) this.cart[id] = 0;
            this.cart[id] += delta;
            
            if (this.cart[id] <= 0) {
                delete this.cart[id];
            }
            this.saveCartToStorage();
        },
        async fetchProducts() {
            try {
                const response = await fetch('api.php'); 
                const data = await response.json();
                if (data.status === 'success') {
                    this.products = data.products; 
                }
            } catch (error) {
                console.error("Помилка зв'язку з секретним сервером:", error);
            }
        },
        saveCartToStorage() {
            localStorage.setItem("resistance_cart", JSON.stringify(this.cart));
        },
        loadCartFromStorage() {
            const storedCart = localStorage.getItem("resistance_cart");
            if (storedCart) {
                try {
                    this.cart = JSON.parse(storedCart);
                } catch(e) {
                    this.cart = {};
                }
            }
        },
        checkout() {
            if (this.cartItems.length === 0) {
                alert("Кошик порожній! Замовлення скасовано.");
                return;
            }
            alert("Дані відправлено голубиною поштою!");
            this.cart = {};
            this.saveCartToStorage();
        }
    },
    mounted() {
        this.fetchProducts(); 
        this.loadCartFromStorage();
    }
}).mount('#app');