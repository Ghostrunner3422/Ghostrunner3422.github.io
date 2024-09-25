/**********************************************************/
/* Axolotl Technologies */
/* 11/08/2024 */
/* Rey Adonaí Floreano Parra */
/* Gestión de Combos y Menús de Alimentos y Bebidas */
/**********************************************************/

/**********************************************************/
/* Constantes de Alimentos y Bebidas */
/**********************************************************/
const listaBebidas = [
    { nombre: "Agua de horchata", precio: 30 },
    { nombre: "Jugo de naranja", precio: 25 },
    { nombre: "Té helado", precio: 35 },
    { nombre: "Limonada", precio: 28 },
    { nombre: "Aguas", precio: 32 },
    { nombre: "Smoothie de fresa", precio: 40 },
    { nombre: "Café frío", precio: 45 },
    { nombre: "Batido de plátano", precio: 38 }
    ];
        
const listAlimentos = [
    { nombre: "Tostada de Aguacate", precio: 5.99 },
    { nombre: "Omelette de champiñones", precio: 7.50 },
    { nombre: "Ensalada de frutas", precio: 4.99 },
    { nombre: "Pancakes", precio: 6.50 },
    { nombre: "Croissant de chocolate", precio: 3.99 },
    { nombre: "Churros", precio: 2.50 },
    { nombre: "Tacos de canasta", precio: 3.00 },
    { nombre: "Ensalada César", precio: 5.75 },
    { nombre: "Torta de milanesa", precio: 6.99 }
    ];

const alimentos = [
    { nombre: "Tostada de Aguacate", precio: 5.99 },
    { nombre: "Omelette de champiñones", precio: 7.50 },
    { nombre: "Ensalada de frutas", precio: 4.99 },
    { nombre: "Pancakes", precio: 6.50 },
    { nombre: "Croissant de chocolate", precio: 3.99 },
    { nombre: "Churros", precio: 2.50 },
    { nombre: "Tacos de canasta", precio: 3.00 },
    { nombre: "Ensalada César", precio: 5.75 },
    { nombre: "Torta de milanesa", precio: 6.99 }
    ];
        
const bebidas = [
    { nombre: "Agua de horchata", precio: 30 },
    { nombre: "Jugo de naranja", precio: 25 },
    { nombre: "Té helado", precio: 35 },
    { nombre: "Limonada", precio: 28 },
    { nombre: "Aguas", precio: 32 },
    { nombre: "Smoothie de fresa", precio: 40 },
    { nombre: "Café frío", precio: 45 },
    { nombre: "Batido de plátano", precio: 38 }
    ];

/**********************************************************/
/* Configuración de Combos a partir de una Cadena JSON */
/**********************************************************/
var text = '{"combos" : [ ' +
    '{"nombre" : "Combo Pancakes", "descripcion" : "Pancakes con Smoothie de Fresa", "alimentos" : ["Pancakes"], "cantA" : ["2"], "bebidas" : ["Smoothie de fresa"], "cantB" : ["1"], "precio" : "53.55", "estatus" : "Activo"}, ' +
    '{"nombre" : "Combo Churros", "descripcion" : "Churros con Café Frío", "alimentos" : ["Churros"], "cantA" : ["3"], "bebidas" : ["Café frío"], "cantB" : ["1"], "precio" : "41.85", "estatus" : "Activo"}, ' +
    '{"nombre" : "Combo Tacos de Canasta", "descripcion" : "Tres tacos de canasta con Batido de Plátano", "alimentos" : ["Tacos de canasta"], "cantA" : ["3"], "bebidas" : ["Batido de plátano"], "cantB" : ["1"], "precio" : "48.60", "estatus" : "Activo"}, ' +
    '{"nombre" : "Combo Ensalada César", "descripcion" : "Ensalada César con Agua fresca", "alimentos" : ["Ensalada César"], "cantA" : ["1"], "bebidas" : ["Aguas"], "cantB" : ["1"], "precio" : "34.43", "estatus" : "Activo"}, ' +
    '{"nombre" : "Combo Torta de Milanesa", "descripcion" : "Torta de Milanesa con Agua de Horchata", "alimentos" : ["Torta de milanesa"], "cantA" : ["1"], "bebidas" : ["Agua de horchata"], "cantB" : ["1"], "precio" : "67.41", "estatus" : "Activo"}, ' +
    '{"nombre" : "Combo Tostadas Tradición", "descripcion" : "Tostada de Aguacate con Jugo de Naranja", "alimentos" : ["Tostada de Aguacate"], "cantA" : ["1"], "bebidas" : ["Jugo de naranja"], "cantB" : ["1"], "precio" : "28.79", "estatus" : "Activo"}, ' +
    '{"nombre" : "Combo Omelet de Champiñones", "descripcion" : "Omelette de Champiñones con Té Helado", "alimentos" : ["Omelette de champiñones"], "cantA" : ["1"], "bebidas" : ["Té helado"], "cantB" : ["1"], "precio" : "37.35", "estatus" : "Activo"}, ' +
    '{"nombre" : "Combo Ensalada de Frutas", "descripcion" : "Ensalada de Frutas con Limonada", "alimentos" : ["Ensalada de frutas"], "cantA" : ["1"], "bebidas" : ["Limonada"], "cantB" : ["1"], "precio" : "30.87", "estatus" : "Activo"} ' +
    ']}';

/**********************************************************/
/* Inicialización de Combos con IDs Únicos */
/**********************************************************/
let combos = JSON.parse(text).combos.map((combo, index) => ({
    id: String(index + 1).padStart(4, '0'),
    nombre: combo.nombre,
    descripcion: combo.descripcion,
    alimentos: combo.alimentos,
    cantA: combo.cantA,
    bebidas: combo.bebidas,
    cantB: combo.cantB,
    precio: combo.precio,
    estatus: combo.estatus
    }));
       
/**********************************************************/
/* Configuración de Colores para la Interfaz de Usuario */
/**********************************************************/
const colors = ['#FA812F'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
document.body.style.backgroundColor = randomColor;
const thElements = document.querySelectorAll('th');
thElements.forEach(th => th.style.backgroundColor = randomColor);
        

/**********************************************************/
/* Función para Renderizar la Tabla de Combos */
/**********************************************************/        
function renderTable() {
const tableBody = document.querySelector('#comboTable tbody');
        tableBody.innerHTML = '';
        combos.forEach(combo => {
        const row = document.createElement('tr');
                row.innerHTML = `
                <td>${combo.id}</td>
                <td>${combo.nombre}</td>
                <td>${combo.descripcion}</td>
                <td>${combo.alimentos.map((alimento, index) => `${alimento} (${combo.cantA[index]})`).join('<br>')}</td>
                <td>${combo.bebidas.map((bebida, index) => `${bebida} (${combo.cantB[index]})`).join('<br>')}</td>
                <td>$${combo.precio}</td>
                <td>${combo.estatus}</td>
                <td>
                    <button class="icon-button" onclick="editCombo('${combo.id}')"><img src="https://img.icons8.com/ios-filled/50/000000/edit.png" alt="Editar"></button>
                    <button class="icon-button" onclick="confirmDeleteCombo('${combo.id}')"><img src="https://img.icons8.com/ios-filled/50/000000/trash.png" alt="Eliminar"></button>
                </td>
            `;
            tableBody.appendChild(row);
        }
    );
}

/**********************************************************/
/* Función para buscar un Combo en la tabla por todos sus campos */
/**********************************************************/
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
if (td[j].innerHTML.toLowerCase().indexOf(filter) > - 1) {
tr[i].style.display = '';
        break;
        }
}
}
}
}
function generarOpciones(selectId, items, selectedItem) {
let options = '<option value="selecciona" data-precio="0">Selecciona</option>';
        items.forEach(item => {
        const selected = item.nombre === selectedItem ? 'selected' : '';
                options += `<option value="${item.nombre}" data-precio="${item.precio}" ${selected}>${item.nombre}</option>`;
        });
        document.getElementById(selectId).innerHTML = options;
        }

/**********************************************************/
/* Función para Calcular el Precio Total del Combo */
/**********************************************************/
function calcularPrecio() {
    // Obtén todos los elementos de alimentos y bebidas
    const alimentos = Array.from(document.querySelectorAll('#alimentosContainer .alimento'));
    const cantA = Array.from(document.querySelectorAll('#alimentosContainer .cantA'));
    const bebidas = Array.from(document.querySelectorAll('#bebidasContainer .bebida'));
    const cantB = Array.from(document.querySelectorAll('#bebidasContainer .cantB'));

    let precioTotal = 0;

    // Calcula el precio total de los alimentos
    alimentos.forEach((alimentoSelect, index) => {
        const alimentoSeleccionado = listAlimentos.find(item => item.nombre === alimentoSelect.value);
        const cantidadA = parseInt(cantA[index].value) || 0;
        if (alimentoSeleccionado && cantidadA > 0) {
            precioTotal += alimentoSeleccionado.precio * cantidadA;
        }
    });

    // Calcula el precio total de las bebidas
    bebidas.forEach((bebidaSelect, index) => {
        const bebidaSeleccionada = listaBebidas.find(item => item.nombre === bebidaSelect.value);
        const chucho = bebidaSelect;
        const cantidadB = parseInt(cantB[index].value) || 0;
        if (bebidaSeleccionada && cantidadB > 0) {
            precioTotal += bebidaSeleccionada.precio * cantidadB;
        }
    });

    // Aplicar un descuento del 10% si se desea
    const precioConDescuento = precioTotal * 0.9;
    
        console.log(`Precio total con descuento: ${precioConDescuento.toFixed(2)}`);
    document.getElementById('comboPrice').value = `${precioConDescuento.toFixed(2)}`;
}

document.addEventListener('input', function(event) {
    if (event.target.classList.contains('alimento') || event.target.classList.contains('cantA') ||
        event.target.classList.contains('bebida') || event.target.classList.contains('cantB')) {
        calcularPrecio();
    }
});

function openComboForm(combo = {}) {
Swal.fire({
title: combo.id ? 'Editar Combo' : 'Agregar Combo',
        html: `
                    <input type="hidden" id="comboId" value="${combo.id || ''}">
                    <input type="text" id="comboName" class="swal2-input" placeholder="Nombre" value="${combo.nombre || ''}">
                    <input type="text" id="comboDesc" class="swal2-input" placeholder="Descripción" value="${combo.descripcion || ''}">
                    <div id="alimentosContainer">
                        ${generateAlimentosFields(combo.alimentos, combo.cantA)}
                    </div>
                    <button onclick="agregarAlimentos()">Añadir Alimento</button><br>
                    <div id="bebidasContainer">
                        ${generateBebidasFields(combo.bebidas, combo.cantB)}
                    </div>
                    <button onclick="agregarBebidas()">Añadir Bebida</button><br>
                    <input type="text" id="comboPrice" class="swal2-input" readonly value="${combo.precio || ''}">
                    <select id="comboStatus" class="swal2-select">
                        <option value="Activo" ${combo.estatus === 'Activo' ? 'selected' : ''}>Activo</option>
                        <option value="Inactivo" ${combo.estatus === 'Inactivo' ? 'selected' : ''}>Inactivo</option>
                    </select>
                `,
        focusConfirm: false,
        preConfirm: () => {
const id = document.getElementById('comboId').value;
        const nombre = document.getElementById('comboName').value;
        const descripcion = document.getElementById('comboDesc').value;
        const alimentos = Array.from(document.querySelectorAll('#alimentosContainer .alimento')).map(el => el.value);
        const cantA = Array.from(document.querySelectorAll('#alimentosContainer .cantA')).map(el => el.value);
        const bebidas = Array.from(document.querySelectorAll('#bebidasContainer .bebida')).map(el => el.value);
        const cantB = Array.from(document.querySelectorAll('#bebidasContainer .cantB')).map(el => el.value);
        const precio = document.getElementById('comboPrice').value;
        const estatus = document.getElementById('comboStatus').value;
        if (!nombre || !descripcion || !alimentos.length || !bebidas.length || !precio) {
Swal.showValidationMessage('Todos los campos son obligatorios');
        return false;
        }
if (id) {
const comboIndex = combos.findIndex(c => c.id === id);
        combos[comboIndex] = { id, nombre, descripcion, alimentos, cantA, bebidas, cantB, precio, estatus };
        } else {
combos.push({ id: String(combos.length + 1).padStart(4, '0'), nombre, descripcion, alimentos, cantA, bebidas, cantB, precio, estatus });
        }
}
}).then((result) => {
if (result.isConfirmed) {
renderTable();
        }
});
        // Generar opciones para los selects iniciales
        generarOpciones('alimento0', alimentos, combo.alimentos ? combo.alimentos[0] : '');
        generarOpciones('bebida0', bebidas, combo.bebidas ? combo.bebidas[0] : '');
        }

function generateAlimentosFields(alimentos = [], cantA = []) {
    return alimentos.map((alimento, index) => `
        <label for="alimento${index}">Alimento:</label>
        <select id="alimento${index}" class="swal2-input alimento">
            ${generarOpcionesHTML(alimento, 'alimento')}
        </select>
        <label for="cantA${index}">#:</label>
        <input type="number" min="1" id="cantA${index}" class="swal2-input cantA" value="${cantA[index] || ''}" oninput="calcularPrecio()">
        <br>
    `).join('');
}

function generateBebidasFields(bebidas = [], cantB = []) {
    return bebidas.map((bebida, index) => `
        <label for="bebida${index}">Bebida:</label>
        <select id="bebida${index}" class="swal2-input bebida">
            ${generarOpcionesHTML(bebida, 'bebida')}
        </select>
        <label for="cantB${index}">#:</label>
        <input type="number" min="1" id="cantB${index}" class="swal2-input cantB" value="${cantB[index] || ''}" oninput="calcularPrecio()">
        <br>
    `).join('');
}

function generarOpcionesHTML(selectedItem, selectType) {
    const items = selectType === 'alimento' ? alimentos : bebidas;
    let options = '<option value="selecciona" data-precio="0">Selecciona</option>';
    
    items.forEach(item => {
        const selected = item.nombre === selectedItem ? 'selected' : '';
        options += `<option value="${item.nombre}" data-precio="${item.precio}" ${selected}>${item.nombre}</option>`;
    });
    
    return options;
}

function agregarAlimentos() {
    const container = document.getElementById('alimentosContainer');
    const index = container.children.length / 3; // Calcula el índice basado en la cantidad de campos existentes

    const alimentoSelect = document.createElement('select');
    alimentoSelect.id = `alimento${index}`;
    alimentoSelect.className = 'swal2-input alimento';
    alimentoSelect.innerHTML = generarOpcionesHTML('', 'alimento'); // Genera opciones solo para alimentos
    alimentoSelect.onchange = calcularPrecio; // Asegúrate de llamar calcularPrecio al cambiar el select

    const cantidadInput = document.createElement('input');
    cantidadInput.type = 'number';
    cantidadInput.min = '1';
    cantidadInput.id = `cantA${index}`;
    cantidadInput.className = 'swal2-input cantA';
    cantidadInput.oninput = calcularPrecio; // Asegúrate de llamar calcularPrecio al cambiar la cantidad

    container.appendChild(alimentoSelect);
    container.appendChild(cantidadInput);
    container.appendChild(document.createElement('br'));
}

function agregarBebidas() {
    const container = document.getElementById('bebidasContainer');
    const index = container.children.length / 3; // Calcula el índice basado en la cantidad de campos existentes

    const bebidaSelect = document.createElement('select');
    bebidaSelect.id = `bebida${index}`;
    bebidaSelect.className = 'swal2-input bebida';
    bebidaSelect.innerHTML = generarOpcionesHTML('', 'bebida'); // Genera opciones solo para bebidas
    bebidaSelect.onchange = calcularPrecio; // Asegúrate de llamar calcularPrecio al cambiar el select

    const cantidadInput = document.createElement('input');
    cantidadInput.type = 'number';
    cantidadInput.min = '1';
    cantidadInput.id = `cantB${index}`;
    cantidadInput.className = 'swal2-input cantB';
    cantidadInput.oninput = calcularPrecio; // Asegúrate de llamar calcularPrecio al cambiar la cantidad

    container.appendChild(bebidaSelect);
    container.appendChild(cantidadInput);
    container.appendChild(document.createElement('br'));
}

  /**********************************************************/
  /* Función para Editar un Combo */
  /**********************************************************/
function editCombo(id) {
const combo = combos.find(combo => combo.id === id);
        openComboForm(combo);
        }


  /**********************************************************/
  /* Función para confirmar la eliminación de un Combo */
  /**********************************************************/
function confirmDeleteCombo(id) {
Swal.fire({
title: '¿Estás seguro?',
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


  /**********************************************************/
  /* Función para eliminar un Combo */
  /**********************************************************/
        function deleteCombo(id) {
        const comboIndex = combos.findIndex(combo => combo.id === id);
                if (comboIndex !== - 1) {
        combos[comboIndex].estatus = 'Inactivo';
                renderTable();
        }
        }
;

  /**********************************************************/
  /* Inicialización de la tabla al cargar la página */
  /**********************************************************/
        renderTable(); // Renderizar la tabla al cargar
