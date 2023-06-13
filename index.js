//      LOAD BOOK
const loadBookData = async () => {
  try {
    let response = await fetch("book.json");
    let data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

/* loadBookData(); */

//      LOAD OBRAS
const loadObrasData = async () => {
  try {
    let response = await fetch("obras.json");
    let data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Función para bloquear el botón de retroceso
function bloquearBotonRetroceso() {
  history.pushState(null, null, location.href);
  window.onpopstate = function (event) {
    history.go(1);
  };
}

// Función para desbloquear el botón de retroceso
function desbloquearBotonRetroceso() {
  window.onpopstate = null;
}

//  BOOK

//            Abrir

let viewBookButton = document.getElementById("viewBookButton");
let bookModal = document.getElementById("bookModal");
let bookModal2 = document.getElementById("bookModal2");

viewBookButton.addEventListener("click", () => {
  if (screen.width < 992) {
    bookModal.classList.remove("no-mostrar");
  }
  if (screen.width > 991) {
    bookModal2.classList.remove("no-mostrar");
  }
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  document.body.style.overflow = "hidden";
  bloquearBotonRetroceso();
});

//            Cerrar
let cerrarBookModal = document.getElementById("cerrarBookModal");
let cerrarBookModal2 = document.getElementById("cerrarBookModal2");

cerrarBookModal.addEventListener("click", () => {
  bookModal.classList.add("no-mostrar");
  viewBookButton.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
  document.body.style.overflow = "auto";
  desbloquearBotonRetroceso();
});
cerrarBookModal2.addEventListener("click", () => {
  bookModal2.classList.add("no-mostrar");
  viewBookButton.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
  document.body.style.overflow = "auto";
  desbloquearBotonRetroceso();
});

//  OBRAS
//            Abrir
let viewObrasButton = document.getElementById("viewObrasButton");
let obrasModal = document.getElementById("obrasModal");

viewObrasButton.addEventListener("click", () => {
  loadObras();
  obrasModal.classList.remove("no-mostrar");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  document.body.style.overflow = "hidden";
  bloquearBotonRetroceso();
});

//            Cargar imagenes
const loadObras = async () => {
  const data = await loadObrasData();

  let obrasContainer = document.getElementById("obrasContainer");

  data.forEach((obra) => {
    //Creando el contenedor de cada obra
    const obraPortadaContainer = document.createElement("div");
    obraPortadaContainer.classList.add("obras-container__obra");

    obrasContainer.appendChild(obraPortadaContainer);

    //Creando las imagenes
    const fotoPortada = document.createElement("img");
    fotoPortada.src = obra.portada;
    fotoPortada.alt = obra.imagenes[0].alt;

    //Creando el titulo
    const titulo = document.createElement("h3");
    titulo.classList.add("titulo-obra");
    titulo.innerHTML = obra.titulo;

    //Insertando los elementos en el contenedor
    obraPortadaContainer.appendChild(fotoPortada);
    obraPortadaContainer.appendChild(titulo);

    //Para abrir las obras
    let obraAbierta = document.getElementById("obraAbierta");

    obraPortadaContainer.addEventListener("click", () => {
      //Creando el elemento
      obraAbierta.classList.remove("no-mostrar");

      //Creando el titulo
      const tituloObra = document.createElement("h2");
      /* tituloObra.classList.add("titulo-obra"); */
      tituloObra.innerHTML = obra.titulo;

      //Creando el contenedor
      const obraDataContainer = document.createElement("div");
      obraDataContainer.classList.add("obra__data-container");

      //Creando el contenedor de textos
      const obraDataContainerData = document.createElement("div");
      obraDataContainerData.classList.add("obra__data-container__data");
      obraDataContainer.appendChild(obraDataContainerData);

      //Dramaturgia
      if (obra.dramaturgia) {
        const dramaturgiaTitulo = document.createElement("h4");
        dramaturgiaTitulo.innerHTML = "Dramaturgia: ";
        obraDataContainerData.appendChild(dramaturgiaTitulo);

        const dramaturgiaTexto = document.createElement("p");
        dramaturgiaTexto.innerHTML = obra.dramaturgia;
        obraDataContainerData.appendChild(dramaturgiaTexto);
      }

      //En escena
      const actoresTitulo = document.createElement("h4");
      actoresTitulo.innerHTML = "En escena: ";
      obraDataContainerData.appendChild(actoresTitulo);

      const actoresTexto = document.createElement("p");
      actoresTexto.innerHTML = obra.actores;
      obraDataContainerData.appendChild(actoresTexto);

      //Dirección
      const direccionTitulo = document.createElement("h4");
      direccionTitulo.innerHTML = "Dirección: ";
      obraDataContainerData.appendChild(direccionTitulo);

      const direccionTexto = document.createElement("p");
      direccionTexto.innerHTML = obra.direccion;
      obraDataContainerData.appendChild(direccionTexto);

      if (obra.asistente) {
        //Asistencia de Dirección
        const asistenteTitulo = document.createElement("h4");
        asistenteTitulo.innerHTML = "Asistencia de dirección: ";
        obraDataContainerData.appendChild(asistenteTitulo);

        const asistenteTexto = document.createElement("p");
        asistenteTexto.innerHTML = obra.asistente;
        obraDataContainerData.appendChild(asistenteTexto);
      }

      if (obra.iluminacion) {
        //Asistencia de Dirección
        const iluminacionTitulo = document.createElement("h4");
        iluminacionTitulo.innerHTML = "Iluminación: ";
        obraDataContainerData.appendChild(iluminacionTitulo);

        const iluminacionTexto = document.createElement("p");
        iluminacionTexto.innerHTML = obra.iluminacion;
        obraDataContainerData.appendChild(iluminacionTexto);
      }
      if (obra.musica) {
        //Asistencia de Dirección
        const musicaTitulo = document.createElement("h4");
        musicaTitulo.innerHTML = "Composición musical: ";
        obraDataContainerData.appendChild(musicaTitulo);

        const musicaTexto = document.createElement("p");
        musicaTexto.innerHTML = obra.musica;
        obraDataContainerData.appendChild(musicaTexto);
      }

      //Funciones en
      const funcionesTitulo = document.createElement("h4");
      funcionesTitulo.innerHTML = "Funciones en: ";
      obraDataContainerData.appendChild(funcionesTitulo);

      const funcionesTexto = document.createElement("p");
      funcionesTexto.innerHTML = obra.funciones;
      obraDataContainerData.appendChild(funcionesTexto);

      //Año
      const añoTitulo = document.createElement("h4");
      añoTitulo.innerHTML = "Año:";
      obraDataContainerData.appendChild(añoTitulo);

      const añoTexto = document.createElement("p");
      añoTexto.innerHTML = obra.año;
      obraDataContainerData.appendChild(añoTexto);

      //Fotos
      let imagenes = obra.imagenes;

      //Creando el contenedor de textos
      const obraDataContainerFotos = document.createElement("div");
      obraDataContainerFotos.classList.add("obra__data-container__fotos");
      obraDataContainer.appendChild(obraDataContainerFotos);

      imagenes.forEach((imagen) => {
        const foto = document.createElement("img");
        foto.src = imagen.src;
        foto.alt = imagen.alt;

        obraDataContainerFotos.appendChild(foto);
      });

      //Boton de cierre
      let botonCerrar = document.createElement("button");
      botonCerrar.classList.add("cerrar");
      botonCerrar.innerHTML = "X";
      botonCerrar.addEventListener("click", () => {
        obraAbierta.removeChild(obraDataContainer);
        obraAbierta.removeChild(tituloObra);
        obraAbierta.removeChild(botonCerrar);
        obraAbierta.classList.add("no-mostrar");
      });

      obraAbierta.appendChild(tituloObra);
      obraAbierta.appendChild(obraDataContainer);
      obraAbierta.appendChild(botonCerrar);
    });
  });
};

//            Cerrar
let cerrarObrasModal = document.getElementById("cerrarObrasModal");
cerrarObrasModal.addEventListener("click", () => {
  obrasModal.classList.add("no-mostrar");
  viewObrasButton.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
  document.body.style.overflow = "auto";
  desbloquearBotonRetroceso();
});

//  TRAYECTORIA
//            ABRIR
let viewTrayectoriaButton = document.getElementById("viewTrayectoriaButton");
let trayectoriaModal = document.getElementById("trayectoriaModal");

viewTrayectoriaButton.addEventListener("click", () => {
  trayectoriaModal.classList.remove("no-mostrar");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  document.body.style.overflow = "hidden";
  bloquearBotonRetroceso();
});

//            Cerrar
let cerrarTrayectoriaModal = document.getElementById("cerrarTrayectoriaModal");
cerrarTrayectoriaModal.addEventListener("click", () => {
  trayectoriaModal.classList.add("no-mostrar");
  viewTrayectoriaButton.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
  document.body.style.overflow = "auto";
  desbloquearBotonRetroceso();
});

//  TRAYECTORIA 2
//            ABRIR
let viewTrayectoriaButton2 = document.getElementById("viewTrayectoriaButton2");

viewTrayectoriaButton2.addEventListener("click", () => {
  trayectoriaModal.classList.remove("no-mostrar");
  quienSoyModal.classList.add("no-mostrar");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  document.body.style.overflow = "hidden";
  bloquearBotonRetroceso();
});

//  TRAYECTORIA 3 DESKTOP
//            ABRIR
let viewTrayectoriaButton3 = document.getElementById("viewTrayectoriaButton3");

viewTrayectoriaButton3.addEventListener("click", () => {
  trayectoriaModal.classList.remove("no-mostrar");
  quienSoyModal.classList.add("no-mostrar");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  document.body.style.overflow = "hidden";
  bloquearBotonRetroceso();
});

//  QUIEN SOY
//            ABRIR
let viewQuienSoyButton = document.getElementById("viewQuienSoyButton");
let quienSoyModal = document.getElementById("quienSoyModal");

viewQuienSoyButton.addEventListener("click", () => {
  quienSoyModal.classList.remove("no-mostrar");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  document.body.style.overflow = "hidden";
  bloquearBotonRetroceso();
});

//            Cerrar
let cerrarQuienSoyModal = document.getElementById("cerrarQuienSoyModal");
cerrarQuienSoyModal.addEventListener("click", () => {
  quienSoyModal.classList.add("no-mostrar");
  viewQuienSoyButton.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
  document.body.style.overflow = "auto";
  desbloquearBotonRetroceso();
});

//CONTACTO  CONTACTO  CONTACTO  CONTACTO

//Selecciono todos los botones
const contactButtons = document.querySelectorAll(".logo-contacto"); //Esto devuelve un nodeList

contactButtons.forEach(function (button) {
  //para recorrer un nodelist solo puedo hacerlo con un forEach, no sirve el map
  button.addEventListener("mouseover", (e) => {
    //Simulo el hover
    let seleccionado = e.target.parentNode.children; //Selecciona todos los 'path' dentro de 'g' que es el elemento padre
    console.log(seleccionado);
    const seleccionadoArray = Array.from(seleccionado); //Lo convierto a array, porque es un HTMLCollection y sino no puedo aplicar el foreach

    seleccionadoArray.forEach((path) => {
      //Recorro el array con todos los 'paths'
      if (path.classList.contains("red")) {
        //Lo que tenga clase 'red' cambia a 'white' y viceversa
        path.classList.remove("red");
        path.classList.add("white");
      } else if (path.classList.contains("white")) {
        path.classList.remove("white");
        path.classList.add("red");
      }
    });
  });

  button.addEventListener("mouseout", (e) => {
    let seleccionado = e.target.parentNode.children;
    const seleccionadoArray = Array.from(seleccionado);

    seleccionadoArray.forEach((path) => {
      if (path.classList.contains("red")) {
        path.classList.remove("red");
        path.classList.add("white");
      } else if (path.classList.contains("white")) {
        path.classList.remove("white");
        path.classList.add("red");
      }
    });
  });
});

// Cerrar el modal y desbloquear el botón de retroceso
cerrarQuienSoyModal.addEventListener("click", () => {
  quienSoyModal.classList.add("no-mostrar");
  viewQuienSoyButton.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
  document.body.style.overflow = "auto";
  desbloquearBotonRetroceso();
});

//  DETECTAR PANTALLAS
const quienSoyMobile = document.getElementById("quienSoy");
const quienSoyDesktop = document.getElementById("quienSoyDesktop");
const contacto = document.getElementById("contacto");
const contactoDesktop = document.getElementById("contactoDesktop");
const indexMobile = document.getElementById("index");
const indexDesktop = document.getElementById("indexDesktop");

if (screen.width < 992) {
  console.log("Es celu");
  quienSoyMobile.classList.remove("no-mostrar");
  quienSoyDesktop.classList.add("no-mostrar");
  contacto.classList.remove("no-mostrar");
  contactoDesktop.classList.add("no-mostrar");
  indexMobile.classList.remove("no-mostrar");
  indexDesktop.classList.add("no-mostrar");
}
if (screen.width > 991) {
  console.log("Es notebook");
  quienSoyMobile.classList.add("no-mostrar");
  quienSoyDesktop.classList.remove("no-mostrar");
  contacto.classList.add("no-mostrar");
  contactoDesktop.classList.remove("no-mostrar");
  indexMobile.classList.add("no-mostrar");
  indexDesktop.classList.remove("no-mostrar");
}
