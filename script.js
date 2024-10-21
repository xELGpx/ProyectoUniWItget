document.addEventListener("DOMContentLoaded", () => {
    const loginNavBar = document.getElementById('login');
    const profileNavBar = document.getElementById('profile');

    function updateNavBar() {
        const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
        loginNavBar.style.display = isAuthenticated ? 'none' : 'block';
        profileNavBar.style.display = isAuthenticated ? 'block' : 'none';
        console.log(isAuthenticated)
    }

    window.onload = updateNavBar();

});
document.addEventListener("DOMContentLoaded", function () {
    // Este código se ejecutará una vez que el HTML haya sido completamente cargado.
    console.log('El DOM ha sido cargado completamente.');
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
//tucan abajo es el boton :)                   joto

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

document.querySelectorAll('.buy').forEach(item => {
    item.addEventListener('click', (event) => {
        // Muestra el menú de compra
        document.getElementById('purchaseMenu').style.display = 'block';
        
        // Obtiene la información del producto (puedes personalizar esto según tu estructura)
        const productCard = item.closest('.box-1');
        const productName = productCard.querySelector('h3').innerText;
        const productPrice = productCard.querySelector('.price').innerText;
        
        // Muestra información del producto en el menú de compra (opcional)
        alert(`Has seleccionado: ${productName}\nPrecio: ${productPrice}`);
    });
});

// Lógica para confirmar la compra (opcional)
document.getElementById('confirmPurchase').addEventListener('click', () => {
    const paymentMethod = document.getElementById('paymentMethod').value;
    const quantity = document.getElementById('quantity').value;
    
    alert(`Compra confirmada!\nMétodo de Pago: ${paymentMethod}\nCantidad: ${quantity}`);
    
    // Aquí puedes añadir lógica para procesar el pago o guardar la compra
});
