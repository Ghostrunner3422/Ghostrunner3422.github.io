/**********************************************************/
/* Axolotl Technologies */
/* 11/08/2024 */
/* Rey Adonaí Floreano Parra */
/* Gestión de Combos y Menús de Alimentos y Bebidas */
/**********************************************************/

/**********************************************************/
/* Constantes de Alimentos y Bebidas */
/**********************************************************/
const ALIMENTOS = [
    { id: '1', nombre: 'Tacos de carne asada', precio: 3.99 },
    { id: '2', nombre: 'Burrito de pollo', precio: 5.49 },
    { id: '3', nombre: 'Enchiladas de queso', precio: 4.25 },
    { id: '4', nombre: 'Quesadilla de carne al pastor', precio: 3.75 },
    { id: '5', nombre: 'Fajitas mixtas (pollo y res)', precio: 6.99 },
    { id: '6', nombre: 'Tostadas de tinga de pollo', precio: 2.99 },
    { id: '7', nombre: 'Tamal de rajas con queso', precio: 1.99 },
    { id: '8', nombre: 'Sopes de chorizo', precio: 3.49 },
    { id: '9', nombre: 'Pozole rojo', precio: 7.25 },
    { id: '10', nombre: 'Flautas de pollo', precio: 4.99 }
  ];
  
  const BEBIDAS = [
    { id: '1', nombre: 'Agua de horchata', precio: 1.99 },
    { id: '2', nombre: 'Agua de jamaica', precio: 1.75 },
    { id: '3', nombre: 'Agua de tamarindo', precio: 1.85 },
    { id: '4', nombre: 'Refresco de cola', precio: 2.25 },
    { id: '5', nombre: 'Agua de limón con chía', precio: 2.15 },
    { id: '6', nombre: 'Refresco de manzana', precio: 2.49 },
    { id: '7', nombre: 'Champurrado', precio: 2.99 },
    { id: '8', nombre: 'Agua de sandía', precio: 1.95 },
    { id: '9', nombre: 'Agua de piña', precio: 2.05 },
    { id: '10', nombre: 'Agua de melón', precio: 2.10 }
  ];
  
  /**********************************************************/
  /* Configuración de Combos a partir de una Cadena JSON */
  /**********************************************************/
  const TEXT_COMBOS = '{"combos" : [ ' +
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
  
  /**********************************************************/
  /* Inicialización de Combos con IDs Únicos */
  /**********************************************************/
  let combos = JSON.parse(TEXT_COMBOS).combos.map((combo, index) => ({
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
  
  /**********************************************************/
  /* Configuración de Colores para la Interfaz de Usuario */
  /**********************************************************/
  const COLORS = ['#FA812F'];
  const RANDOM_COLOR = COLORS[Math.floor(Math.random() * COLORS.length)];
  document.body.style.backgroundColor = RANDOM_COLOR;
  const thElements = document.querySelectorAll('th');
  thElements.forEach(th => th.style.backgroundColor = RANDOM_COLOR);
  
  /**********************************************************/
  /* Función para Renderizar la Tabla de Combos Activos */
  /**********************************************************/
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
            <button class="icon-button" onclick="editCombo('${combo.id}')">
              <img src="https://img.icons8.com/ios-filled/50/000000/edit.png" alt="Editar">
            </button>
            <button class="icon-button" onclick="confirmDeleteCombo('${combo.id}')">
              <img src="https://img.icons8.com/ios-filled/50/000000/trash.png" alt="Eliminar">
            </button>
          </td>
        `;
        tableBody.appendChild(row);
      }
    });
    // Llamar a la función para mostrar los objetos en la consola
    logCombosToConsole();
  }
  
  /**********************************************************/
  /* Función para Calcular el Precio Total del Combo */
  /**********************************************************/
  function calcularPrecio() {
    const alimentoSeleccionado = ALIMENTOS.find(item => item.nombre === document.getElementById('alimento').value);
    const bebidaSeleccionada = BEBIDAS.find(item => item.nombre === document.getElementById('bebida').value);
    const cantidadA = parseInt(document.getElementById('cantidadA').value, 10);
    const cantidadB = parseInt(document.getElementById('cantidadB').value, 10);
    if (alimentoSeleccionado && bebidaSeleccionada && !isNaN(cantidadA) && !isNaN(cantidadB)) {
      const precioTotal = (alimentoSeleccionado.precio * cantidadA) + (bebidaSeleccionada.precio * cantidadB);
      document.getElementById('precio').value = precioTotal.toFixed(2);
    } else {
      document.getElementById('precio').value = '0.00';
    }
  }
  
  /**********************************************************/
  /* Función para Agregar un Nuevo Combo */
  /**********************************************************/
  function addCombo() {
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const alimento = document.getElementById('alimento').value;
    const cantA = document.getElementById('cantidadA').value;
    const bebida = document.getElementById('bebida').value;
    const cantB = document.getElementById('cantidadB').value;
    const precio = document.getElementById('precio').value;
    const estatus = document.getElementById('estatus').value;
  
    if (nombre && descripcion && alimento && cantA && bebida && cantB && precio && estatus) {
      const newId = String(combos.length + 1).padStart(4, '0');
      const newCombo = { id: newId, nombre, descripcion, alimento, cantA, bebida, cantB, precio, estatus };
      combos.push(newCombo);
      renderTable();
      $('#addComboModal').modal('hide');
      // Limpiar el formulario después de agregar
      document.getElementById('addComboForm').reset();
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }
  
  /**********************************************************/
  /* Función para Confirmar la Eliminación de un Combo */
  /**********************************************************/
  function confirmDeleteCombo(comboId) {
    const confirmed = confirm('¿Está seguro de que desea eliminar este combo?');
    if (confirmed) {
      deleteCombo(comboId);
    }
  }
  
  /**********************************************************/
  /* Función para Eliminar un Combo */
  /**********************************************************/
  function deleteCombo(comboId) {
    combos = combos.map(combo => combo.id === comboId ? { ...combo, estatus: 'Inactivo' } : combo);
    renderTable();
  }
  
  /**********************************************************/
  /* Función para Editar un Combo Existente */
  /**********************************************************/
  function editCombo(comboId) {
    const combo = combos.find(combo => combo.id === comboId);
    if (combo) {
      document.getElementById('editId').value = combo.id;
      document.getElementById('editNombre').value = combo.nombre;
      document.getElementById('editDescripcion').value = combo.descripcion;
      document.getElementById('editAlimento').value = combo.alimento;
      document.getElementById('editCantidadA').value = combo.cantA;
      document.getElementById('editBebida').value = combo.bebida;
      document.getElementById('editCantidadB').value = combo.cantB;
      document.getElementById('editPrecio').value = combo.precio;
      document.getElementById('editEstatus').value = combo.estatus;
      $('#editComboModal').modal('show');
    }
  }
  
  /**********************************************************/
  /* Función para Guardar Cambios en un Combo Editado */
  /**********************************************************/
  function saveChanges() {
    const id = document.getElementById('editId').value;
    const nombre = document.getElementById('editNombre').value;
    const descripcion = document.getElementById('editDescripcion').value;
    const alimento = document.getElementById('editAlimento').value;
    const cantA = document.getElementById('editCantidadA').value;
    const bebida = document.getElementById('editBebida').value;
    const cantB = document.getElementById('editCantidadB').value;
    const precio = document.getElementById('editPrecio').value;
    const estatus = document.getElementById('editEstatus').value;
  
    if (nombre && descripcion && alimento && cantA && bebida && cantB && precio && estatus) {
      combos = combos.map(combo => combo.id === id ? { id, nombre, descripcion, alimento, cantA, bebida, cantB, precio, estatus } : combo);
      renderTable();
      $('#editComboModal').modal('hide');
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }
  
  /**********************************************************/
  /* Función para Mostrar los Combos en la Consola */
  /**********************************************************/
  function logCombosToConsole() {
    console.log('Lista de Combos Activos:', combos.filter(combo => combo.estatus === 'Activo'));
  }
  
  /**********************************************************/
  /* Inicialización de la Tabla al Cargar la Página */
  /**********************************************************/
  document.addEventListener('DOMContentLoaded', renderTable);
  