libreria = [
  new libro(
    "libro1",
    "autor1",
    "editorial1",
    "genere1",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore suscipit in hic veritatis?",
    "https://images.unsplash.com/photo-1610882648335-ced8fc8fa6b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "prezzo1",
    "quantità1"
  ),
  new libro(
    "libro2",
    "autor2",
    "editorial2",
    "genere2",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore suscipit in hic veritatis?",
    "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    "prezzo2",
    "quantità2"
  ),
  new libro(
    "libro3",
    "autor3",
    "editorial3",
    "genere3",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore suscipit in hic veritatis?",
    "https://images.unsplash.com/photo-1598618253208-d75408cee680?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    "prezzo3",
    "quantità3"
  ),
  new libro(
    "libro4",
    "autor4",
    "editorial4",
    "genere4",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore suscipit in hic veritatis?",
    "https://images.unsplash.com/photo-1542871793-fd7e2b3cd0b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80",
    "prezzo4",
    "quantità4"
  ),
  new libro(
    "libro5",
    "autor5",
    "editorial5",
    "genere5",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore suscipit in hic veritatis?",
    "https://images.unsplash.com/photo-1542871793-fd7e2b3cd0b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80",
    "prezzo4",
    "quantità4"
  ),
  new libro(
    "libro6",
    "autor6",
    "editorial6",
    "genere6",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore suscipit in hic veritatis?",
    "https://images.unsplash.com/photo-1542871793-fd7e2b3cd0b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80",
    "prezzo4",
    "quantità4"
  ),
];

function libro(
  titolo,
  autore,
  editoriale,
  genere,
  descrizione,
  immagine,
  prezzo,
  quantità
) {
  this.titolo = titolo;
  this.autore = autore;
  this.editoriale = editoriale;
  this.genere = genere;
  this.descrizione = descrizione;
  this.immagine = immagine;
  this.prezzo = prezzo;
  this.quantità = quantità;
}


function insertLibro() {
  var count = 0;
  for (libro of libreria) {
  count++;
    document.getElementById("cards").innerHTML += `
    <div class="card">
    <img src="${libro.immagine}" class="card-img-top" alt="..." widt= "100%" height = "100%">
    <div class="card-body pt-4 mb-3">
    <h5 class="card-title">${libro.titolo}</h5>
    <button type="button" class="btn btn-primary"
    onclick="mostraModal(${count})">
    Dettagli</button>
    
    <div class="modal" id="modal${count}">
    <div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-header">
    <button type="button" class="btn btn-primary close" data-dismiss="modal" onclick="chiudiModal(${count})">&times;</button>
    </div>
    <div class="modal-body">
    <img src="${libro.immagine}" class="card-img-top" alt="..." widt= "100%" height = "100%">
    <p>Descrizione: ${libro.descrizione}</p>
    </div>

</div>
    <div class="card-footer">
    <small class="text-muted">${libro.autore}</small>
    </div>
    
    </div>
    
        `;
  }
}

insertLibro();

// modal dettagli di ogni libro

function mostraModal(count) {
    document.getElementById(`modal${count}`).style.display = "block";
    document.getElementById(`modal${count}`).style.background = "rgba(0,0,0,0.5)";
}

function chiudiModal(count) {
  document.getElementById(`modal${count}`).style.display = "none";
}


function cercaLibri() {

  let cerca = document.getElementById("cerca").value;
  let libri = document.getElementsByClassName("card");
  if (cerca !== "") {
    
  for (let i = 0; i < libri.length; i++) {
    if (libri[i].innerHTML.includes(cerca.trim().toLowerCase())) {
      libri[i].style.display = "flex";
    libri[i].style.height = "50vh";
    libri[i].style.button = "block";

    } else {
      libri[i].style.display = "none";
    }
  }
}
  // dopo aver cercato pulisco il campo di ricerca
  document.getElementById("cerca").value = "";
  }

  function tornaIndietro() {
    window.location.reload();
  }

  // scroll up button by id scrollUp in body and display after scroll down
  // after scroll down the button is displayed
  
  // after scroll up the button is hidden
  window.onscroll = function() {scrollFunction()};

  //Get the button
var mybutton = document.getElementById("scrollUp");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollUp() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// drag and drop 
