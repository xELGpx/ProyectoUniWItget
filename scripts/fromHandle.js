
document.getElementById('fillDataButton').addEventListener('click', function () {
    document.getElementById('name').value = 'John Doe';
    document.getElementById('email').value = 'john@example.com';
    document.getElementById('phone').value = '1234567890';
    document.getElementById('address').value = '123 Main St';
    document.getElementById('password').value = '123'
});
document.getElementById('formRegistro').addEventListener('submit', async (event) => {
    event.preventDefault();


    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const password = document.getElementById('password').value;
    const confirmPasword = document.getElementById('confirmPasword').value;

    const clientData = {
        name: name,
        email: email,
        phone: phone,
        address: address,
        password: password,
        confirmPasword: confirmPasword
    };

    if (clientData.password !== clientData.confirmPasword) {
        alert('Las contraseñas no coinciden');
        return;
    }
    console.log(clientData);
    await fetch('http://localhost:8080/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(clientData),
    })
        .then(response => {
            if (response.ok) {
                alert('Registro exitoso');
                window.location.href = 'Login.html';
            } else {
                alert('Error al registrar, inténtalo de nuevo');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error ');
        });
});

//
let user = '';
let isAuthenticated = false;
document.getElementById('formLogin').addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const result = await login(email, password);
        if (result.ok) {
            console.log("Login successful", result.data);
            alert("Login exitoso");
        } else {
            alert(result.message || 'Error en la autenticación');
        }
    } catch (e) {
        alert("Error en la conexión o autenticación");
        console.error(e);
    }
});

const login = async (email, password) => {
    const response = await fetch(`http://localhost:8080/user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {

        const errorData = await response.json();
        return { ok: false, message: errorData.message || 'Error en la autenticación' };
    }

    const data = await response.json();
    return { ok: true, data };
};

