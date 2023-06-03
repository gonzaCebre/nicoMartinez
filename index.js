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

//  BOOK

//            Abrir

let viewBookButton = document.getElementById("viewBookButton");
let bookModal = document.getElementById("bookModal");

viewBookButton.addEventListener("click", () => {
  /* loadBook(); */
  bookModal.classList.remove("no-mostrar");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  document.body.style.overflow = "hidden";
});

//            Cargar imagenes
/* const loadBook = async () => {
  console.log("load book");
  const data = await loadBookData();

  let bookFotosContainer = document.getElementById("bookFotosContainer");

  data.forEach((image) => {
    //Creando las imagenes
    const foto = document.createElement("img");
    foto.classList.add("book__fotos__foto");
    foto.src = image.src;
    foto.alt = image.alt;

    //Insertando las imagenes en el contenedor
    bookFotosContainer.appendChild(foto);

    //Para abrir las imagenes
    let fotoAbierta = document.getElementById("fotoAbierta");
    foto.addEventListener("click", () => {
      //Creando el elemento
      fotoAbierta.classList.remove("no-mostrar");
      const fotoAmpliada = document.createElement("img");
      fotoAmpliada.classList.add("book__fotos__foto--ampliada");
      fotoAmpliada.src = image.src;
      fotoAmpliada.alt = image.alt;

      //Boton de cierre
      let botonCerrar = document.createElement("button");
      botonCerrar.classList.add("cerrar");
      botonCerrar.addEventListener("click", () => {
        fotoAbierta.removeChild(fotoAmpliada);
        fotoAbierta.removeChild(botonCerrar);
        fotoAbierta.classList.add("no-mostrar");
      });

      fotoAbierta.appendChild(fotoAmpliada);
      fotoAbierta.appendChild(botonCerrar);
    });
  });
}; */

//            Cerrar
let cerrarBookModal = document.getElementById("cerrarBookModal");
cerrarBookModal.addEventListener("click", () => {
  bookModal.classList.add("no-mostrar");
  viewBookButton.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
  document.body.style.overflow = "auto";
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
    fotoPortada.src = obra.imagenes[0].src;
    fotoPortada.alt = obra.imagenes[0].alt;

    //Creando el titulo
    const titulo = document.createElement("h3");
    titulo.classList.add("titulo-obra");
    titulo.innerHTML = obra.titulo;

    //Creando el fondo del titulo
    const fondoTitulo = document.createElement("div");
    fondoTitulo.classList.add("fondo-titulo");

    //Insertando los elementos en el contenedor
    obraPortadaContainer.appendChild(fotoPortada);
    obraPortadaContainer.appendChild(titulo);
    obraPortadaContainer.appendChild(fondoTitulo);

    //Para abrir las obras
    let obraAbierta = document.getElementById("obraAbierta");

    obraPortadaContainer.addEventListener("click", () => {
      //Creando el elemento
      obraAbierta.classList.remove("no-mostrar");

      //Creando el titulo
      const tituloObra = document.createElement("h3");
      tituloObra.classList.add("titulo-obra");
      tituloObra.innerHTML = obra.titulo;

      //Creando el contenedor
      const bookDataContainer = document.createElement("div");
      bookDataContainer.classList.add("book__data-container");

      //Creando el contenedor de textos
      const bookDataContainerData = document.createElement("div");
      bookDataContainerData.classList.add("book__data-container__data");
      bookDataContainer.appendChild(bookDataContainerData);

      //Dramaturgia
      const dramaturgiaTitulo = document.createElement("h4");
      dramaturgiaTitulo.innerHTML = "Dramaturgia: ";
      bookDataContainerData.appendChild(dramaturgiaTitulo);

      const dramaturgiaTexto = document.createElement("p");
      dramaturgiaTexto.innerHTML = obra.dramaturgia;
      bookDataContainerData.appendChild(dramaturgiaTexto);

      //En escena
      const actoresTitulo = document.createElement("h4");
      actoresTitulo.innerHTML = "En escena: ";
      bookDataContainerData.appendChild(actoresTitulo);

      const actoresTexto = document.createElement("p");
      actoresTexto.innerHTML = obra.actores;
      bookDataContainerData.appendChild(actoresTexto);

      //Dirección
      const direccionTitulo = document.createElement("h4");
      direccionTitulo.innerHTML = "Dirección: ";
      bookDataContainerData.appendChild(direccionTitulo);

      const direccionTexto = document.createElement("p");
      direccionTexto.innerHTML = obra.direccion;
      bookDataContainerData.appendChild(direccionTexto);

      //Asistencia de Dirección
      const asistenteTitulo = document.createElement("h4");
      asistenteTitulo.innerHTML = "Asistencia de dirección: ";
      bookDataContainerData.appendChild(asistenteTitulo);

      const asistenteTexto = document.createElement("p");
      asistenteTexto.innerHTML = obra.asistente;
      bookDataContainerData.appendChild(asistenteTexto);

      //Funciones en
      const funcionesTitulo = document.createElement("h4");
      funcionesTitulo.innerHTML = "Funciones en: ";
      bookDataContainerData.appendChild(funcionesTitulo);

      const funcionesTexto = document.createElement("p");
      funcionesTexto.innerHTML = obra.funciones;
      bookDataContainerData.appendChild(funcionesTexto);

      //Año
      const añoTitulo = document.createElement("h4");
      añoTitulo.innerHTML = "Año:";
      bookDataContainerData.appendChild(añoTitulo);

      const añoTexto = document.createElement("p");
      añoTexto.innerHTML = obra.año;
      bookDataContainerData.appendChild(añoTexto);

      //Fotos
      let imagenes = obra.imagenes;

      //Creando el contenedor de textos
      const bookDataContainerFotos = document.createElement("div");
      bookDataContainerFotos.classList.add("book__data-container__fotos");
      bookDataContainer.appendChild(bookDataContainerFotos);

      imagenes.forEach((imagen) => {
        const foto = document.createElement("img");
        foto.classList.add("book__fotos__foto--ampliada");
        foto.src = imagen.src;
        foto.alt = imagen.alt;

        bookDataContainer.appendChild(foto);
      });

      //Boton de cierre
      let botonCerrar = document.createElement("button");
      botonCerrar.classList.add("cerrar");
      botonCerrar.addEventListener("click", () => {
        obraAbierta.removeChild(bookDataContainer);
        obraAbierta.removeChild(tituloObra);
        obraAbierta.removeChild(botonCerrar);
        obraAbierta.classList.add("no-mostrar");
      });

      obraAbierta.appendChild(tituloObra);
      obraAbierta.appendChild(bookDataContainer);
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
