
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
renderCategory(category);

}


function renderCategory(category) {
  const categoryUser = category;
  const renderCategoryp = document.getElementById("render-category");
  renderCategoryp.innerHTML = ""
  if ( edad != undefined) {
    renderCategoryp.innerHTML = `* su categoría: ${categoryUser}`;
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


register.addEventListener("click", ()=> {

  const datos = 
  `<h5>Nombre: ${persona.value}</h5>
  <p>Categoría: ${category}</p>
  <p>Disciplina: ${selectSports.value}</p>
  <p>DIstancia: ${selectCategory.value}</p>
  <div>`


  console.log("register");
  const key = Math.round(Math.random()*1000000);
    Swal.fire({
      title: 'Confirma su inscripción?',
      html: datos,
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si! confirmo'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "su número de operación ID:",          
          html: key,
          icon: "success"
        }).then((result) => {
          if (result.isConfirmed) {
        window.location.href = "../index.html";
      }
    })
  }})
})
