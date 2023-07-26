//Boton calificar vista docente
function obtenerCalificacionYComentario() {
    let calificacion = prompt("Ingrese una calificación:");
    let comentario = prompt("Ingrese un comentario:");
  
    const resultadoDiv = document.getElementById("resultado-calificacion");
  resultadoDiv.innerHTML = "Calificación: " + calificacion + "<br>Comentario: " + comentario;

    // Mostrar los datos ingresados
    alert("Calificación: " + calificacion + "\nComentario: " + comentario);
  }

//---------------------

/*
function agregarLink() {
    // Crear un nuevo elemento de botón
    const btnAgregar = document.createElement('button');
    btnAgregar.innerHTML = 'Agregar';
          
    // Crear un nuevo campo de texto
    const urlInput = document.createElement('input');
    urlInput.type = 'text';
    urlInput.placeholder = 'Ingrese una URL';
          
    // Agregar el botón y el campo de texto al contenedor de links
    const linkContainer = document.getElementById('linkContainer');
    linkContainer.appendChild(urlInput);
    linkContainer.appendChild(btnAgregar);
          
    // Asignar el evento clic al botón "Agregar"
    btnAgregar.addEventListener('click', function() {
    // Obtener el valor del campo de texto
    const url = urlInput.value;
            
    // Crear un elemento de enlace <a>
    const enlace = document.createElement('a');
    enlace.href = url;
    enlace.innerHTML = url;
            
    // Crear un elemento de lista <li>
    const listItem = document.createElement('li');
    listItem.appendChild(enlace);
            
    // Agregar el elemento de lista al contenedor de resultados
    const resultado = document.getElementById('resultado');
    resultado.appendChild(document.createElement('br'));
    resultado.appendChild(listItem);
            
    // Limpiar el campo de texto
    urlInput.value = '';
    });
}
function openPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function addText() {
    const textitulo=document.getElementById("titulo").value;
    const lineas2=textitulo.split("\n");
    const textoFormateado2 = lineas2.map(function(linea2) {
        return "<span class='texto-sangria2'>&nbsp;&nbsp;&nbsp;&nbsp;" + lineas2 + "</span>";
    }).join("<br><br>");
    document.getElementById("texto-agregado").innerHTML += textoFormateado2 + "<br><br>";

    const texto = document.getElementById("texto").value;
    const lineas = texto.split("\n");
    const textoFormateado = lineas.map(function(linea) {
        return "<span class='texto-sangria'>&nbsp;&nbsp;&nbsp;&nbsp;" + linea + "</span>";
    }).join("<br><br>");
    document.getElementById("texto-agregado").innerHTML += textoFormateado + "<br><br>";

    const imagenInput = document.getElementById("imagen");
    if (imagenInput.files && imagenInput.files[0]) {
        const imagen = imagenInput.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
          const imagenHTML = "<div class='imagen-container'><img src='" + e.target.result + "'></div>";
          document.getElementById("texto-agregado").innerHTML += imagenHTML + "<br><br>";
          clearInputFile(imagenInput);
        };
        reader.readAsDataURL(imagen);
    }
      
    const pdfInput = document.getElementById("pdf");
    if (pdfInput.files && pdfInput.files[0]) {
        const pdf = pdfInput.files[0];
        const pdfName = escape(pdf.name);
        const pdfHTML = "<a href='" + URL.createObjectURL(pdf) + "' target='_blank'>" + pdfName + "</a>";
        document.getElementById("texto-agregado").innerHTML += pdfHTML + "<br><br>";
        clearInputFile(pdfInput);
    }
    document.getElementById("texto").value = "";
    closePopup();
  }
*/

//Pruebas de funciones para json
function agregarLink() {
    // ... (código anterior)
    // Crear un nuevo elemento de botón
    const btnAgregar = document.createElement('button');
    btnAgregar.innerHTML = 'Agregar';
          
    // Crear un nuevo campo de texto
    const urlInput = document.createElement('input');
    urlInput.type = 'text';
    urlInput.placeholder = 'Ingrese una URL';
          
    // Agregar el botón y el campo de texto al contenedor de links
    const linkContainer = document.getElementById('linkContainer');
    linkContainer.appendChild(urlInput);
    linkContainer.appendChild(btnAgregar);
          
    // Asignar el evento clic al botón "Agregar"
    btnAgregar.addEventListener('click', function() {
    // Obtener el valor del campo de texto
    const url = urlInput.value;
            
    // Crear un elemento de enlace <a>
    const enlace = document.createElement('a');
    enlace.href = url;
    enlace.innerHTML = url;
            
    // Crear un elemento de lista <li>
    const listItem = document.createElement('li');
    listItem.appendChild(enlace);
            
    // Agregar el elemento de lista al contenedor de resultados
    const resultado = document.getElementById('resultado');
    resultado.appendChild(document.createElement('br'));
    resultado.appendChild(listItem);
            
    // Limpiar el campo de texto
    urlInput.value = '';
    });

  //pruebajson

    // Después de agregar el elemento de lista al contenedor de resultados
    const resultado = document.getElementById('resultado');
    resultado.appendChild(document.createElement('br'));
    resultado.appendChild(listItem);
  
    // Limpiar el campo de texto
    urlInput.value = '';
  
     // Guardar la información en el Local Storage
  const linkInfo = {
    url: url,
    enlaceHTML: listItem.innerHTML
  };

  // Obtener el arreglo actual de links (si existe) o crear uno nuevo
  let linksArray = JSON.parse(localStorage.getItem('linksArray') || '[]');
  linksArray.push(linkInfo);

  // Guardar la información en el Local Storage nuevamente
  localStorage.setItem('linksArray', JSON.stringify(linksArray));
}

//funciones fuera de prueba////////////////////////////  
function openPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
////////////////////////////////////////////////////

function addText() {
    const textitulo=document.getElementById("titulo").value;
    const lineas2=textitulo.split("\n");
    const textoFormateado2 = lineas2.map(function(linea2) {
        return "<span class='texto-sangria2'>&nbsp;&nbsp;&nbsp;&nbsp;" + lineas2 + "</span>";
    }).join("<br><br>");
    document.getElementById("texto-agregado").innerHTML += textoFormateado2 + "<br><br>";

    const texto = document.getElementById("texto").value;
    const lineas = texto.split("\n");
    const textoFormateado = lineas.map(function(linea) {
        return "<span class='texto-sangria'>&nbsp;&nbsp;&nbsp;&nbsp;" + linea + "</span>";
    }).join("<br><br>");
    document.getElementById("texto-agregado").innerHTML += textoFormateado + "<br><br>";

    const imagenInput = document.getElementById("imagen");
    if (imagenInput.files && imagenInput.files[0]) {
        const imagen = imagenInput.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
          const imagenHTML = "<div class='imagen-container'><img src='" + e.target.result + "'></div>";
          document.getElementById("texto-agregado").innerHTML += imagenHTML + "<br><br>";
          clearInputFile(imagenInput);
        };
        reader.readAsDataURL(imagen);
    }
      
    const pdfInput = document.getElementById("pdf");
    if (pdfInput.files && pdfInput.files[0]) {
        const pdf = pdfInput.files[0];
        const pdfName = escape(pdf.name);
        const pdfHTML = "<a href='" + URL.createObjectURL(pdf) + "' target='_blank'>" + pdfName + "</a>";
        document.getElementById("texto-agregado").innerHTML += pdfHTML + "<br><br>";
        clearInputFile(pdfInput);
    }
    document.getElementById("texto").value = "";
    closePopup();

    //pruebajson

     // Guardar la información en el Local Storage
  const textInfo = {
    textitulo: textitulo,
    texto: texto,
    imagenHTML: imagenHTML,
    pdfHTML: pdfHTML
  };

  // Obtener el arreglo actual de textos (si existe) o crear uno nuevo
  let textosArray = JSON.parse(localStorage.getItem('textosArray') || '[]');
  textosArray.push(textInfo);

  // Guardar la información en el Local Storage nuevamente
  localStorage.setItem('textosArray', JSON.stringify(textosArray));
  }

// funcion para almacenar el valor del titulo y pasarselo a las distintas paginas del  profesor
// pagina de nueva tarea
function enviarValor() {
    const valor = document.getElementById("titulo").value;
    localStorage.setItem('miVariable', valor);
    window.location.href = "tabprofe.html";
    window.location.href = "Taragregada.html";
    //window.location.href = "Tarasignada.html";

}
function clearInputFile(input) {
    input.value = "";
}

// pagina del tablero del profesor
function redirectToPage(url) {
    window.location.href = url;
  }
  // Obtener el valor de la variable desde el LocalStorage
  const valorRecibido = localStorage.getItem('miVariable');
  // Mostrar el valor en la página
  document.getElementById("tarea1").innerText += valorRecibido;

//pruebajsonrecibe

