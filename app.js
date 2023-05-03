
let edad;
let fechaNacimiento;
let fechaInput = document.getElementById("fechaNacimientoInput");
let selectSports = document.getElementById("disciplinaInput");
let selectCategory = document.getElementById("distancia");
let selected;
let category;



ageCalcule();
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
      } else {
        if (edad> 23 && edad <35) {
          console.log("la categoría es senior")
        } else {
          if (edad> 36) {
            console.log("la categoría es máster")
          }
        }
      }
      console.log("sw running")
      break;
    case "mtb":
      if (edad> 16 && edad <24) {
        console.log("la categoría es juvenil")
        console.log("porque da", edad)
      } else {
        if (edad> 25 && edad <29) {
          console.log("la categoría es Elite")
        } else {
          if (edad> 30 && edad <39) {
            console.log("la categoría es máster A")
          } else {
            if (edad> 40 && edad <49) {
              console.log("la categoría es master B")
            } else {
              if (edad> 59 && edad <59) {
                console.log("la categoría es master C")
              } else {
                if (60 <edad) {
                  console.log("la categoría es master D")
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
          console.log("la categoría es cadete")
        } else {
          if (edad> 16 && edad <17) {
            console.log("la categoría es cadete")
          } else {
            if (edad> 18) {
              console.log("la categoría es Mayor")
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