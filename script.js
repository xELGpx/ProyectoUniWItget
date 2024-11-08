document.addEventListener("DOMContentLoaded", () => {
    // Cargar el contenido de navbar.html dentro del div con id "navbar"
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        });

    const loginNavBar = document.getElementById('login');
    const profileNavBar = document.getElementById('profile');
    const buyButtons = document.querySelectorAll('.box-1 .buy, .box-2 .buy, .box-3 .buy');
    const productList = document.getElementById('productList');
    const totalPriceElement = document.getElementById('totalPrice');
    const clearCartButton = document.getElementById('clearCartButton');
    let totalPrice = 0;

    // Función para actualizar localStorage
    function saveCartToLocalStorage() {
        const products = Array.from(productList.children).map(item => ({
            name: item.dataset.productName,
            quantity: parseInt(item.dataset.quantity)
        }));
        localStorage.setItem('cartProducts', JSON.stringify(products));
        localStorage.setItem('totalPrice', totalPrice.toFixed(2));
    }

    // Función para cargar productos desde localStorage
    function loadCartFromLocalStorage() {
        const savedProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
        totalPrice = parseFloat(localStorage.getItem('totalPrice')) || 0;
        totalPriceElement.textContent = totalPrice.toFixed(2);

        savedProducts.forEach(product => {
            const listItem = document.createElement('li');
            listItem.dataset.productName = product.name;
            listItem.dataset.quantity = product.quantity;
            listItem.textContent = `${product.name} x${product.quantity}`;
            productList.appendChild(listItem);
        });
    }

    // Cargar el carrito al iniciar la página
    loadCartFromLocalStorage();

    // Configurar los botones de compra
    buyButtons.forEach(button => {
        button.addEventListener('click', function () {
            const box = this.closest('.box-1, .box-2, .box-3');
            const productName = box.querySelector('h3').textContent;
            const productPrice = parseFloat(box.querySelector('.price').textContent.replace('$', ''));
            const existingProduct = Array.from(productList.children).find(
                item => item.dataset.productName === productName
            );

            if (existingProduct) {
                // Si el producto ya está en la lista, incrementa la cantidad
                let quantity = parseInt(existingProduct.dataset.quantity) + 1;
                existingProduct.dataset.quantity = quantity;
                existingProduct.textContent = `${productName} x${quantity}`;
            } else {
                // Si el producto no está en la lista, crea un nuevo elemento de lista
                const listItem = document.createElement('li');
                listItem.dataset.productName = productName;
                listItem.dataset.quantity = 1;
                listItem.textContent = `${productName} x1`;
                productList.appendChild(listItem);
            }

            // Sumar precio y actualizar el total
            totalPrice += productPrice;
            totalPriceElement.textContent = totalPrice.toFixed(2);

            // Guardar el estado del carrito en localStorage
            saveCartToLocalStorage();
        });
    });

    // Botón para limpiar el carrito
    clearCartButton.addEventListener('click', function () {
        // Limpia el contenido de la lista de productos y el total
        productList.innerHTML = '';
        totalPrice = 0;
        totalPriceElement.textContent = '0.00';

        // Elimina los datos de localStorage
        localStorage.removeItem('cartProducts');
        localStorage.removeItem('totalPrice');
    });

    // Configuración de la barra de navegación según el estado de autenticación


    // Actualizar la barra de navegación al cargar la página

});


function E(selector, parent) {
    if (selector instanceof HTMLElement)
        return selector;

    return (parent || document).querySelectorAll(selector);
}

function hasClass(element, className) {
    return element.classList.contains(className);
}

function radioClass(element, className) {
    E("." + className).forEach((elem) =>
        elem.classList.remove(className));
    element.classList.toggle(className);
}

function tabs(nav) {
    let navElem = E(nav)[0];

    navElem.addEventListener("click", (e) => {
        let target = e.target;

        if (hasClass(target, "tab"))
            radioClass(target, "active");

        let linkedTab = E("." + target.id)[0];

        radioClass(linkedTab, "visible");


    });

    let active = E(".tab.active")[0];
    if (active) {
        radioClass(E("." + active.id)[0], "visible")
    }

}

tabs(".menu-nav")

let loadMoreBtn1 = document.querySelector('#Load-more-1');
let currentItem1 = 4;
loadMoreBtn1.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container-1 .box-1')];
    for (var i = currentItem1; i < currentItem1 + 4; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currentItem1 += 4;
    if (currentItem1 >= boxes.length) {
        loadMoreBtn1.style.display = 'none'
    }
}
let loadMoreBtn2 = document.querySelector('#Load-more-2');
let currentItem2 = 4;
loadMoreBtn2.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container-2 .box-2')];
    for (var i = currentItem2; i < currentItem1 + 4; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currentItem2 += 4;
    if (currentItem2 >= boxes.length) {
        loadMoreBtn2.style.display = 'none'
    }
}
let loadMoreBtn3 = document.querySelector('#Load-more-3');
let currentItem3 = 4;
loadMoreBtn3.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container-3 .box-3')];
    for (var i = currentItem3; i < currentItem3 + 4; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currentItem3 += 4;
    if (currentItem3 >= boxes.length) {
        loadMoreBtn3.style.display = 'none'
    }
}

document.getElementById('mostrarPerfil').onclick = function () {
    var perfil = document.getElementById('perfilUsuario');
    if (perfil.style.display === 'none' || perfil.style.display === '') {
        perfil.style.display = 'block';
        this.textContent = 'Ocultar Perfil';
    } else {
        perfil.style.display = 'none';
        this.textContent = 'Mostrar Perfil';
    }
}

