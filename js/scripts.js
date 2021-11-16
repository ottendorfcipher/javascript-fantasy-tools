
// NPC Color Options
let colorOptions = ["1","2","3","4","5"];

// Hair Style
   
const hairStyle = document.getElementById("hairStyle");
let hairStyleOptions = ["1", "2", "3", "4", "5"];

for(let i = 0; i < hairStyleOptions.length; i++) {
let opt = hairStyleOptions[i];
const el = document.createElement("option");
el.textContent = opt;
el.value = opt;
hairStyle.appendChild(el);
}

// Complexion

const complexion = document.getElementById("complexion");
let complexionOptions = ["1", "2", "3", "4", "5"];

for(let i = 0; i < complexionOptions.length; i++) {
let opt = complexionOptions[i];
const el = document.createElement("option");
el.textContent = opt;
el.value = opt;
complexion.appendChild(el);
}

// colorOptions

// Favorite Color One
   
    const favColorOne = document.getElementById("favColorOne");
    let favColorOneOptions = colorOptions;
 
    for(let i = 0; i < favColorOneOptions.length; i++) {
    let opt = favColorOneOptions[i];
    const el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    favColorOne.appendChild(el);
 }
 
 // Favorite Color Two
   
   const favColorTwo = document.getElementById("favColorTwo");
   let favColorTwoOptions = colorOptions;

   for(let i = 0; i < favColorTwoOptions.length; i++) {
   let opt = favColorTwoOptions[i];
   const el = document.createElement("option");
   el.textContent = opt;
   el.value = opt;
   favColorTwo.appendChild(el);
}
   
// Eye Color

const eyeColor = document.getElementById("eyeColor");
let eyeColorOptions = colorOptions;

for(let i = 0; i < eyeColorOptions.length; i++) {
let opt = eyeColorOptions[i];
const el = document.createElement("option");
el.textContent = opt;
el.value = opt;
eyeColor.appendChild(el);
}

// Hair Color

const hairColor = document.getElementById("hairColor");
let hairColorOptions = colorOptions;

for(let i = 0; i < hairColorOptions.length; i++) {
let opt = hairColorOptions[i];
const el = document.createElement("option");
el.textContent = opt;
el.value = opt;
hairColor.appendChild(el);
}
