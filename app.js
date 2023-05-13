
// => Variables 
let edad;
let fechaNacimiento;
let persona = document.getElementById("nombreInput");
let fechaInput = document.getElementById("fechaNacimientoInput");
let selectSports = document.getElementById("disciplinaInput");
let selectCategory = document.getElementById("distancia");
let register = document.getElementById("register");
let registerRender = document.getElementById("register-render");
let selected;
let category;
let card;
let cards;
let body;
let navbar;



//=> Array de inscriptos
const inscriptos = [];



//=> Function dark-mode
function toggleDarkMode() {
  body = document.body;
  body.classList.toggle("dark-mode");
  cards = document.querySelectorAll(".card");
  cards.forEach((card)=> card.classList.toggle("dark-mode"));
  navbar = document.getElementById("nav-dark");
  navbar.classList.toggle("dark-mode")
}


//=> Llamado a la función cálculo de Edad
ageCalcule();

//=> Llamado a la función enable input from category
changeValue();


//=> Calcula la edad de la persona en base a la fecha de nacimiento
function ageCalcule() { 
  fechaInput.addEventListener("change", ()=> {
    fechaNacimiento = fechaInput.value;
  
    edad = moment().diff(moment(fechaNacimiento, "YYYY-MM-DD"), 'years');
    console.log("La edad es: " + edad);  
    return edad
  })
}

//=> devuelve la categoría en base a la edad y el deporte
function ageCategory(option) { 
console.log("ageCatogory")
console.log("la edad", edad)
  switch (option) {
    case "running":
      if (edad> 16 && edad <22) {
        console.log("la categoría es juvenil")
        console.log("porque da", edad)
        category = "juvenil"
      } else {
        if (edad> 23 && edad <35) {
          console.log("la categoría es senior")
          category = "senior"
        } else {
          if (edad> 36) {
            console.log("la categoría es máster")
            category = "máster"
          }
        }
      }
      console.log("sw running")
      break;
    case "mtb":
      if (edad> 16 && edad <24) {
        console.log("la categoría es juvenil")
        console.log("porque da", edad)
        category = "juvenil"
      } else {
        if (edad> 25 && edad <29) {
          console.log("la categoría es Elite")
          category = "Elíte"
        } else {
          if (edad> 30 && edad <39) {
            console.log("la categoría es máster A")
            category = "Master A"
          } else {
            if (edad> 40 && edad <49) {
              console.log("la categoría es master B")
              category = "Master B"
            } else {
              if (edad> 59 && edad <59) {
                console.log("la categoría es master C")
                category = "MAster C"
              } else {
                if (60 <edad) {
                  console.log("la categoría es master D")
                  category = "MAster D"
                }
              }
            }
          }
        }
      }
      console.log("sw mtb")
      break
      case "nado":
        if (edad> 14 && edad <15) {
          console.log("la categoría es juvenil")
          category = "juvenil"
        } else {
          if (edad> 16 && edad <17) {
            console.log("la categoría es cadete");
            category = "Cadete"
          } else {
            if (edad> 18) {
              console.log("la categoría es Mayor");
              category = "mayor"
            } else {
              
            }
          }
        }
        console.log("sw nado")
    default:
      break;
  }

}


//=> Habilita la opción distancia en base a la actividad que selecciona
function changeValue() {
  selectSports.addEventListener("change", ()=> {
    let option = selectSports.value;
    console.log("option", option)
    ageCategory(option)
    let select2 = document.getElementById("distancia");
    console.log("select2, option",option)
    if (option === "running") {
      select2.innerHTML = "<option value='5k'>5k</option><option value='10k'>10k</option>";
      console.log("running")
    } else if (option === "mtb") {
      select2.innerHTML = "<option value='25k'>25k</option><option value='50k'>50k</option>";
      console.log("ciclismo")
    } else if (option === "nado") {
      select2.innerHTML = "<option value='500m'>500m</option><option value='2000m'>2000m</option>";
      console.log("nado")
    } else {
      select2.innerHTML = "";
    }
    let select = document.getElementById("distancia");
    select.disabled = false;
  })

}


//=> Creo un evento sobre el btn Registrar
inscribirUser();

function inscribirUser() {
  register.addEventListener("click", ()=> {
    console.log("register");
    const key = Math.round(Math.random()*1000000)
    inscribir(key)
  } )
}


//=> Modelo de objeto de inscripto
function inscribir (key) {
  
const inscripto = {
  nombre: persona.value,
  edad: edad,
  categoria: category,
  disciplina: selectSports.value,
  distancia: selectCategory.value,
  id: key 
}

//=> pusheo los objetos inscriptos al array
inscriptos.push(inscripto)
console.log(inscriptos)

renderizarInscripto();
}


function renderizarInscripto() {
  registerRender.innerHTML = "" 
  inscriptos.forEach(item => {
    let {nombre, categoria, disciplina, distancia, id} = item;
    let div = document.createElement('div');
    div.className = 'div-render';
    div.innerHTML = 
                      `<div class="inscripto">
                        <h3>Datos del inscripto:</h3>
                        <h5>Nombre: ${nombre}</h5>
                        <p>Categoría: ${categoria}</p>
                        <p>Disciplina: ${disciplina}</p>
                        <p>DIstancia: ${distancia}</p>
                        <p>Comprobante: ${id}</p>
                      <div`
    registerRender.appendChild(div)
  })
}


