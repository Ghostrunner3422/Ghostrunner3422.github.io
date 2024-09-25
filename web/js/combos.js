const alimentos = [
    {id: '1', nombre: 'Tacos de carne asada', precio: 3.99},
    {id: '2', nombre: 'Burrito de pollo', precio: 5.49},
    {id: '3', nombre: 'Enchiladas de queso', precio: 4.25},
    {id: '4', nombre: 'Quesadilla de carne al pastor', precio: 3.75},
    {id: '5', nombre: 'Fajitas mixtas (pollo y res)', precio: 6.99},
    {id: '6', nombre: 'Tostadas de tinga de pollo', precio: 2.99},
    {id: '7', nombre: 'Tamal de rajas con queso', precio: 1.99},
    {id: '8', nombre: 'Sopes de chorizo', precio: 3.49},
    {id: '9', nombre: 'Pozole rojo', precio: 7.25},
    {id: '10', nombre: 'Flautas de pollo', precio: 4.99}
];

const bebidas = [
    {id: '1', nombre: 'Agua de horchata', precio: 1.99},
    {id: '2', nombre: 'Agua de jamaica', precio: 1.75},
    {id: '3', nombre: 'Agua de tamarindo', precio: 1.85},
    {id: '4', nombre: 'Refresco de cola', precio: 2.25},
    {id: '5', nombre: 'Agua de limón con chía', precio: 2.15},
    {id: '6', nombre: 'Refresco de manzana', precio: 2.49},
    {id: '7', nombre: 'Champurrado', precio: 2.99},
    {id: '8', nombre: 'Agua de sandía', precio: 1.95},
    {id: '9', nombre: 'Agua de piña', precio: 2.05},
    {id: '10', nombre: 'Agua de melón', precio: 2.10}
];

var text = '{"combos" : [ ' +
        '{"nombre" : "Combo Tacos Clásicos", "descripcion" : "Tres tacos clásicos con una refrescante bebida.", "alimento" : "Tacos de carne asada", "cantA" : "3", "bebida" : "Agua de horchata", "cantB" : "1", "precio" : "12.56", "estatus" : "Activo"}, ' +
        '{"nombre" : "Combo Burrito Fiesta", "descripcion" : "Un delicioso burrito grande acompañado de una bebida refrescante.", "alimento" : "Burrito de pollo", "cantA" : "1", "bebida" : "Agua de jamaica", "cantB" : "1", "precio" : "6.52", "estatus" : "Activo"}, ' +
        '{"nombre" : "Combo Enchiladas Delicias", "descripcion" : "Dos enchiladas con una bebida típica mexicana.", "alimento" : "Enchiladas de queso", "cantA" : "2", "bebida" : "Agua de tamarindo", "cantB" : "1", "precio" : "9.31", "estatus" : "Activo"}, ' +
        '{"nombre" : "Combo Quesadilla Suprema", "descripcion" : "Una quesadilla grande con una bebida tradicional.", "alimento" : "Quesadilla de carne al pastor", "cantA" : "1", "bebida" : "Refresco de cola", "cantB" : "1", "precio" : "5.40", "estatus" : "Activo"}, ' +
        '{"nombre" : "Combo Fajitas Festivas", "descripcion" : "Un plato de fajitas acompañado de una bebida refrescante.", "alimento" : "Fajitas mixtas (pollo y res)", "cantA" : "1", "bebida" : "Agua de limón con chía", "cantB" : "1", "precio" : "8.23", "estatus" : "Activo"}, ' +
        '{"nombre" : "Combo Tostadas Tradición", "descripcion" : "Dos tostadas con una bebida fresca.", "alimento" : "Tostadas de tinga de pollo", "cantA" : "2", "bebida" : "Refresco de manzana", "cantB" : "1", "precio" : "7.62", "estatus" : "Activo"}, ' +
        '{"nombre" : "Combo Tamalito Mexicano", "descripcion" : "Un tamal tradicional con una bebida mexicana.", "alimento" : "Tamal de rajas con queso", "cantA" : "1", "bebida" : "Champurrado", "cantB" : "1", "precio" : "4.48", "estatus" : "Activo"}, ' +
        '{"nombre" : "Combo Sopes Especiales", "descripcion" : "Dos sopes con una bebida refrescante.", "alimento" : "Sopes de chorizo", "cantA" : "2", "bebida" : "Agua de sandía", "cantB" : "1", "precio" : "8.04", "estatus" : "Activo"}, ' +
        '{"nombre" : "Combo Pozole Festín", "descripcion" : "Un tazón de pozole con una bebida tradicional.", "alimento" : "Pozole rojo", "cantA" : "1", "bebida" : "Agua de piña", "cantB" : "1", "precio" : "8.37", "estatus" : "Activo"}, ' +
        '{"nombre" : "Combo Flautas Fiesta", "descripcion" : "Tres flautas con una bebida refrescante.", "alimento" : "Flautas de pollo", "cantA" : "3", "bebida" : "Agua de melón", "cantB" : "1", "precio" : "15.36", "estatus" : "Activo"} ' +
        ']}';
let combos = JSON.parse(text).combos.map((combo, index) => ({
        id: String(index + 1).padStart(4, '0'),
        nombre: combo.nombre,
        descripcion: combo.descripcion,
        alimento: combo.alimento,
        cantA: combo.cantA,
        bebida: combo.bebida,
        cantB: combo.cantB,
        precio: combo.precio,
        estatus: combo.estatus
    }));

const colors = ['#FAAF08', '#FA812F', '#FA4032'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
document.body.style.backgroundColor = randomColor;
const thElements = document.querySelectorAll('th');
thElements.forEach(th => th.style.backgroundColor = randomColor);

function renderTable() {
    const tableBody = document.querySelector('#comboTable tbody');
    tableBody.innerHTML = '';
    combos.forEach(combo => {
        if (combo.estatus === 'Activo') {
            const row = document.createElement('tr');
            row.innerHTML = `
                        <td>${combo.id}</td>
                        <td>${combo.nombre}</td>
                        <td>${combo.descripcion}</td>
                        <td>${combo.alimento} (${combo.cantA})</td>
                        <td>${combo.bebida} (${combo.cantB})</td>
                        <td>$${combo.precio}</td>
                        <td>${combo.estatus}</td>
                        <td>
                            <button class="icon-button" onclick="editCombo('${combo.id}')"><img src="https://img.icons8.com/ios-filled/50/000000/edit.png" alt="Editar"></button>
                            <button class="icon-button" onclick="confirmDeleteCombo('${combo.id}')"><img src="https://img.icons8.com/ios-filled/50/000000/trash.png" alt="Eliminar"></button>
                        </td>
                    `;
            tableBody.appendChild(row);
        }
    });
    // Llamar a la función para mostrar los objetos en la consola
    logCombosToConsole();
}
;

function calcularPrecio() {
    const alimentoSeleccionado = alimentos.find(item => item.nombre === document.getElementById('alimento').value);
    const bebidaSeleccionada = bebidas.find(item => item.nombre === document.getElementById('bebida').value);
    const cantidadA = parseInt(document.getElementById('cantA').value);
    const cantidadB = parseInt(document.getElementById('cantB').value);

    if (alimentoSeleccionado && bebidaSeleccionada && !isNaN(cantidadA) && !isNaN(cantidadB)) {
        const precioAlimento = alimentoSeleccionado.precio;
        const precioBebida = bebidaSeleccionada.precio;
        const precioTotal = ((precioAlimento * cantidadA) + (precioBebida * cantidadB)) * 0.9;
        document.getElementById('precio').value = `${precioTotal.toFixed(2)}`;
    } else {
        document.getElementById('precio').value = '';
    }
}
;

function openComboForm(combo = {}) {

    Swal.fire({
        title: combo.id ? 'Editar Combo' : 'Agregar Combo',
        html: `
            <input type="hidden" id="comboId" value="${combo.id || ''}">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" class="swal2-input" value="${combo.nombre || ''}">
            <label for="descripcion">Descripción:</label>
            <input type="text" id="descripcion" class="swal2-input" value="${combo.descripcion || ''}">
            <label for="alimento">Alimento:</label>
            <select id="alimento" class="swal2-input"></select>
            <label for="cantA">#:</label>
            <input type="number" min="1" id="cantA" class="swal2-input" value="${combo.cantA || ''}" oninput="calcularPrecio()"><br>
            <label for="bebida">Bebida:</label>
            <select id="bebida" class="swal2-input"></select>
            <label for="cantB">#:</label>
            <input type="number" min="1" id="cantB" class="swal2-input" value="${combo.cantB || ''}" oninput="calcularPrecio()"><br>
            <label for="precio">Precio:</label>
            <input type="text" id="precio" class="swal2-input" readonly>
        `,
        focusConfirm: false,
        confirmButtonText: 'Guardar',
        preConfirm: () => {
            return {
                id: document.getElementById('comboId').value,
                nombre: document.getElementById('nombre').value,
                descripcion: document.getElementById('descripcion').value,
                alimento: document.getElementById('alimento').value,
                cantA: document.getElementById('cantA').value,
                bebida: document.getElementById('bebida').value,
                cantB: document.getElementById('cantB').value,
                precio: document.getElementById('precio').value
            };
        }
    }).then(result => {
        if (result.isConfirmed) {
            const {id, nombre, descripcion, alimento, cantA, bebida, cantB, precio} = result.value;
            if (id) {
                const comboIndex = combos.findIndex(combo => combo.id === id);
                combos[comboIndex] = {id, nombre, descripcion, alimento, cantA, bebida, cantB, precio, estatus: 'Activo'};
            } else {
                const newId = String(combos.length ? Math.max(...combos.map(combo => parseInt(combo.id))) + 1 : 1).padStart(4, '0');
                combos.push({id: newId, nombre, descripcion, alimento, cantA, bebida, cantB, precio, estatus: 'Activo'});
            }
            renderTable();
        }
    });

    // Función para generar las opciones de los selects
    function generarOpciones(selectId, items, selectedItem) {
        let options = '';
        options = `<option value="selecciona" data-precio="0">Selecciona</option>`;
        items.forEach(item => {
            const selected = item.nombre === selectedItem ? 'selected' : '';
            options += `<option value="${item.nombre}" data-precio="${item.precio}" ${selected}>${item.nombre}</option>`;
        });
        document.getElementById(selectId).innerHTML = options;
    }

    generarOpciones('alimento', alimentos, combo.alimento);
    generarOpciones('bebida', bebidas, combo.bebida);

    // Calcular el precio al inicio si hay datos preexistentes
    calcularPrecio();
}
;

function editCombo(id) {
    const combo = combos.find(combo => combo.id === id);
    openComboForm(combo);
}
;

function confirmDeleteCombo(id) {
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
            deleteCombo(id);
            Swal.fire(
                    'Eliminado!',
                    'El combo ha sido eliminado.',
                    'success'
                    );
        }
    });
}
;

function deleteCombo(id) {
    const comboIndex = combos.findIndex(combo => combo.id === id);
    if (comboIndex !== -1) {
        combos[comboIndex].estatus = 'Inactivo';
        renderTable();
    }
}
;

function searchTable() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const table = document.getElementById('comboTable');
    const tr = table.getElementsByTagName('tr');
    for (let i = 1; i < tr.length; i++) {
        tr[i].style.display = 'none';
        const td = tr[i].getElementsByTagName('td');
        for (let j = 1; j < td.length; j++) {
            if (td[j]) {
                if (td[j].innerHTML.toLowerCase().indexOf(filter) > -1) {
                    tr[i].style.display = '';
                    break;
                }
            }
        }
    }
}
;

function logCombosToConsole() {
    console.log("Combos:", combos);
};

// Llamar a la función para mostrar los objetos en la consola cuando se cargue la página
renderTable();