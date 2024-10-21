let user = '';

localStorage.setItem('isAuthenticated', 'false');


function mostrarFormulario(formulario) {
    document.getElementById('formLogin').style.display = 'none';
    document.getElementById('formRegistro').style.display = 'none';
    document.getElementById('formEmpleado').style.display = 'none';
    document.getElementById(formulario).style.display = 'block';
}

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
        password: password
    };

    if (clientData.password !== confirmPasword) {
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

document.getElementById('formLogin').addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    try {
        const result = await login(email, password);
        if (result.ok) {
            localStorage.setItem('isAuthenticated', 'true');
            alert("Login exitoso");
            window.location.href = 'Index.html';


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


