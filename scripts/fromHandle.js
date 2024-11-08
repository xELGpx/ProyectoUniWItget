let user = '';


document.getElementById('formEmpleado').addEventListener('submit', async (event) => {
    event.preventDefault();
    const nombreCompleto = document.getElementById('empleadoNombreCompleto').value;
    const correoElectronico = document.getElementById('empleadoCorreoElectronico').value;
    const puestoTrabajo = document.getElementById('empleadoPuestoTrabajo').value;
    const contrasena = document.getElementById('empleadoContrasena').value;
    const confirmarContrasena = document.getElementById('empleadoConfirmarContrasena').value;
    
    const empleadoData = {
        name: nombreCompleto,
        email: correoElectronico,
        posicion: puestoTrabajo,
        password: contrasena,
    };
    console.log(empleadoData)
    if (empleadoData.password !== confirmarContrasena) {
        alert('Las contraseñas no coinciden');
        return;
    }
    await fetch('http://localhost:5500/user/createEmploye', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(empleadoData),
    }).then(response => {
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

})
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
    await fetch('http://localhost:5500/user/createClient', {
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

document.getElementById('formLogin').addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    try {
        const result = await login(email, password);
        if (result.ok) {
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
    const response = await fetch(`http://localhost:5500/user/auth`, {
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
    localStorage.setItem('token', data.token);
    console.log(localStorage.getItem('token'))
    return { ok: true, data };
};
