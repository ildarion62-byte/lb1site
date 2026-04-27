const { createApp } = Vue;

createApp({
    data() {
        return {
            products: [
                { id: 'p1', name: 'Шапочка з фольги (Класична)', price: 15.00, desc: 'Захист від читання думок супутниками та вишками.', image: 'img/foil.jpg' },
                { id: 'p2', name: 'Пташки "Анті-гравіті"', price: 42.50, desc: 'Чому пташки не падають на землю?', image: 'img/BIRD.jpg' },
                { id: 'p3', name: 'Детектор 5G випромінювання', price: 99.99, desc: 'Перевірте свою вакцину вже сьогодні! Звукове сповіщення.', image: 'img/detector.jpg' },
                { id: 'p4', name: 'Намет-клітка Фарадея', price: 250.00, desc: 'Захистить ваш сон від радіохвиль уряду.', image: 'img/tent.jpg' },
                { id: 'p5', name: 'Піраміда "йо-шин-се"', price: 250.00, desc: 'Піраміда лисого гуру.', image: 'img/GORDON.PNG' }
            ],
            cart: {},
            selectedImage: null
        }
    },
    computed: {
      
        cartItems() {
            let items = [];
            for (const id in this.cart) {
                if (this.cart[id] > 0) {
                    const product = this.products.find(p => p.id === id);
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
        this.loadCartFromStorage();
    }
}).mount('#app');