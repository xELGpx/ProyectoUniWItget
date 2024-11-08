document.addEventListener("DOMContentLoaded", () => {

    const loginNavBar = document.getElementById('login');
    const profileNavBar = document.getElementById('profile');
    const userName = document.getElementById('userName');
    const correo = document.getElementById('correo');
    const contrasena = document.getElementById('contrasena');
    const userNumber = document.getElementById('userNumber');
    const usuariopro = document.getElementById('usuariopro');
    function updateNavBar() {
        const token = localStorage.getItem('token');
        loginNavBar.style.display = token ? 'none' : 'block';
        profileNavBar.style.display = token ? 'block' : 'none';
        console.log(token);
    }


    const getUserProfile = async () => {
        try {
            const response = await fetch('http://localhost:5500/user/auth/profile', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Error al obtener el perfil');
            }

            const data = await response.json();
            console.log(data)

            correo.value = data.Email || '';
            userNumber.value = data.Phone;    // Asume que el perfil tiene un campo 'correo'
            contrasena.value = data.Password || '';
            usuariopro.value = data.Name;


            ;
        } catch (error) {
            console.error('Hubo un problema con la solicitud fetch:', error);
        }
    };
    document.getElementById('logoutButton').addEventListener('click', () => {

        localStorage.removeItem('token');


        window.location.href = '/login.html';
    });
    getUserProfile();
    updateNavBar();
});
