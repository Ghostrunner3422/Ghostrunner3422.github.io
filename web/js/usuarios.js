var text = '{"usuarios" : [ ' +
           '{"foto" : "", "nombre" : "admin", "contrasena":"1234", "cargo" : "Administrador", "estatus" : "Activo"} ' +
           ']}';

let users = JSON.parse(text).usuarios.map((user, index) => ({
    id: String(index + 1).padStart(4, '0'),
    foto: user.foto,
    nombre: user.nombre,
    contraseña: user.contrasena,
    cargo: user.cargo,
    estatus: user.estatus
}));

const colors = ['#FAAF08', '#FA812F', '#FA4032'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
document.body.style.backgroundColor = randomColor;
const thElements = document.querySelectorAll('th');
thElements.forEach(th => th.style.backgroundColor = randomColor);

function renderTable() {
    const tableBody = document.querySelector('#userTable tbody');
    tableBody.innerHTML = '';

    users.forEach(user => {
        if (user.estatus === 'Activo') {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id}</td>
                <td><img src="${user.foto}" alt="Foto de ${user.nombre}" width="50"></td>
                <td>${user.nombre}</td>
                <td>${user.contraseña}</td>
                <td>${user.cargo}</td>
                <td>${user.estatus}</td>
                <td>
                    <button class="icon-button" onclick="editUser('${user.id}')"><img src="https://img.icons8.com/ios-filled/50/000000/edit.png" alt="Editar"></button>
                    <button class="icon-button" onclick="confirmDeleteUser('${user.id}')"><img src="https://img.icons8.com/ios-filled/50/000000/trash.png" alt="Eliminar"></button>
                </td>
            `;
            tableBody.appendChild(row);
        }
    });

    // Llamar a la función para mostrar los objetos en la consola
    logUsersToConsole();
}

function openUserForm(user = {}) {
    Swal.fire({
        title: user.id ? 'Editar Usuario' : 'Agregar Usuario',
        html: `
            <input type="hidden" id="userId" value="${user.id || ''}">
            <label for="foto">Foto:</label>
            <input type="file" id="foto" class="swal2-file" accept="image/*">
            ${user.foto ? `<img src="${user.foto}" id="previewFoto" alt="Foto de ${user.nombre}" width="50"><br>` : ''}
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" class="swal2-input" value="${user.nombre || ''}">
            <label for="contraseña">Contraseña:</label>
            <input type="password" id="contraseña" class="swal2-input" value="${user.contraseña || ''}">
            <label for="cargo">Cargo:</label>
            <input type="text" id="cargo" class="swal2-input" value="${user.cargo || ''}">
        `,
        focusConfirm: false,
        confirmButtonText: 'Guardar',
        preConfirm: () => {
            return new Promise((resolve) => {
                const fotoInput = document.getElementById('foto');
                if (fotoInput.files[0]) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        resolve({
                            id: document.getElementById('userId').value,
                            foto: e.target.result,
                            nombre: document.getElementById('nombre').value,
                            contraseña: document.getElementById('contraseña').value,
                            cargo: document.getElementById('cargo').value,
                        });
                    };
                    reader.readAsDataURL(fotoInput.files[0]);
                } else {
                    resolve({
                        id: document.getElementById('userId').value,
                        foto: user.foto,
                        nombre: document.getElementById('nombre').value,
                        contraseña: document.getElementById('contraseña').value,
                        cargo: document.getElementById('cargo').value,
                    });
                }
            });
        }
    }).then(result => {
        if (result.isConfirmed) {
            const { id, foto, nombre, contraseña, cargo } = result.value;
            if (id) {
                const userIndex = users.findIndex(user => user.id === id);
                users[userIndex] = { id, foto, nombre, contraseña, cargo, estatus: 'Activo' };
            } else {
                const newId = String(users.length ? Math.max(...users.map(user => parseInt(user.id))) + 1 : 1).padStart(4, '0');
                users.push({ id: newId, foto, nombre, contraseña, cargo, estatus: 'Activo' });
            }
            renderTable();
        }
    });

    const fotoInput = document.getElementById('foto');
    fotoInput.addEventListener('change', () => {
        const previewFoto = document.getElementById('previewFoto');
        if (fotoInput.files && fotoInput.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (previewFoto) {
                    previewFoto.src = e.target.result;
                } else {
                    const img = document.createElement('img');
                    img.id = 'previewFoto';
                    img.src = e.target.result;
                    img.width = 50;
                    fotoInput.insertAdjacentElement('afterend', img);
                }
            };
            reader.readAsDataURL(fotoInput.files[0]);
        }
    });
}

function editUser(id) {
    const user = users.find(user => user.id === id);
    openUserForm(user);
}

function confirmDeleteUser(id) {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "No podrás revertir esto",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            deleteUser(id);
            Swal.fire(
                'Eliminado!',
                'El usuario ha sido eliminado.',
                'success'
            );
        }
    });
}

function deleteUser(id) {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
        users[userIndex].estatus = 'Inactivo';
        renderTable();
    }
}

function searchTable() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const table = document.getElementById('userTable');
    const tr = table.getElementsByTagName('tr');

    for (let i = 1; i < tr.length; i++) {
        tr[i].style.display = 'none';
        const td = tr[i].getElementsByTagName('td');
        for (let j = 1; j < td.length; j++) { // Empezamos en 1 para excluir la columna de foto
            if (td[j]) {
                if (td[j].innerHTML.toLowerCase().indexOf(filter) > -1) {
                    tr[i].style.display = '';
                    break;
                }
            }
        }
    }
}

function logUsersToConsole() {
    console.log("Usuarios:", users);
}

// Llamar a la función para mostrar los objetos en la consola cuando se cargue la página
renderTable();