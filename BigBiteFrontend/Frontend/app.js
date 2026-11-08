// Esperamos a que todo el HTML cargue antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {
    
// --- 1. Lógica del Carrito de Compras ---
    let cantidadCarrito = 0;
    let totalPrecio = 0;
    
    const indicadorCarrito = document.querySelector('.cart-count');
    const botonesAgregar = document.querySelectorAll('.btn-add-cart');
    
    // Selectores del Panel Lateral
    const cartIcon = document.querySelector('.cart-icon');
    const cartPanel = document.getElementById('cartPanel');
    const cartOverlay = document.getElementById('cartOverlay');
    const closeCartBtn = document.querySelector('.close-cart');
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const cartTotalValue = document.getElementById('cartTotalValue');
    const emptyMsg = document.getElementById('emptyMsg');

    // Abrir y cerrar el panel lateral
    const toggleCart = () => {
        cartPanel.classList.toggle('active');
        cartOverlay.classList.toggle('active');
    };
    cartIcon.addEventListener('click', toggleCart);
    closeCartBtn.addEventListener('click', toggleCart);
    cartOverlay.addEventListener('click', toggleCart);

    // Agregar productos al pedido
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', (e) => {
            // Aumentamos el contador arriba
            cantidadCarrito++;
            indicadorCarrito.textContent = cantidadCarrito;
            
            // Obtenemos los datos de la hamburguesa seleccionada
            const tarjeta = e.target.closest('.product-card');
            const nombre = tarjeta.querySelector('h4').textContent;
            const precioTexto = tarjeta.querySelector('.price').textContent; 
            
            // Convertimos "$6.500" a número 6500 para poder sumar
            const precioNumero = parseInt(precioTexto.replace('$', '').replace('.', ''));
            totalPrecio += precioNumero;

            // Ocultamos el mensaje de "carrito vacío"
            if (emptyMsg) emptyMsg.style.display = 'none';

            // Creamos visualmente el producto dentro del carrito
            const itemHTML = document.createElement('div');
            itemHTML.classList.add('cart-item');
            itemHTML.innerHTML = `
                <div>
                    <div class="cart-item-title">${nombre}</div>
                    <div class="cart-item-price">${precioTexto}</div>
                </div>
            `;
            cartItemsContainer.appendChild(itemHTML);

            // Actualizamos el total (agregando punto de miles)
            cartTotalValue.textContent = '$' + totalPrecio.toLocaleString('es-CL');
            
            // Efecto visual en el botón
            const textoOriginal = boton.textContent;
            boton.textContent = "¡Agregado! ✔";
            boton.style.backgroundColor = "#4CAF50"; 
            setTimeout(() => {
                boton.textContent = textoOriginal;
                boton.style.backgroundColor = ""; 
            }, 1000);
        });
    });
    
    // --- 2. Lógica del Menú Móvil (Responsive) ---
    const botonHamburguesa = document.querySelector('.mobile-menu-btn');
    const menuLinks = document.querySelector('.nav-links');

    botonHamburguesa.addEventListener('click', () => {
        // Agrega o quita la clase 'active' para mostrar/ocultar el menú
        menuLinks.classList.toggle('active');
    });

// --- 3. Ventana Flotante (Modal) de Inicio de Sesión ---
    const btnLogin = document.getElementById('btnLogin');
    const modal = document.getElementById('loginModal');
    const btnClose = document.querySelector('.close-btn');

    // Abrir modal
    btnLogin.addEventListener('click', (e) => {
        e.preventDefault(); // Evita que la página recargue
        modal.classList.add('active');
    });

    // Cerrar modal con la X
    btnClose.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Cerrar modal haciendo clic afuera de la caja
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});