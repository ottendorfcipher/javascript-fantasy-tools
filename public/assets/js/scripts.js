
// NPC Color Options
let colorOptions = [
   "AliceBlue",
   "AntiqueWhite",
   "Aqua",
   "Aquamarine",
   "Azure",
   "Beige",
   "Bisque",
   "Black",
   "BlanchedAlmond",
   "Blue",
   "BlueViolet",
   "Brown",
   "BurlyWood",
   "CadetBlue",
   "Chartreuse",
   "Chocolate",
   "Coral",
   "CornflowerBlue",
   "Cornsilk",
   "Crimson",
   "Cyan",
   "DarkBlue",
   "DarkCyan",
   "DarkGoldenRod",
   "DarkGray",
   "DarkGrey",
   "DarkGreen",
   "DarkKhaki",
   "DarkMagenta",
   "DarkOliveGreen",
   "DarkOrange",
   "DarkOrchid",
   "DarkRed",
   "DarkSalmon",
   "DarkSeaGreen",
   "DarkSlateBlue",
   "DarkSlateGray",
   "DarkSlateGrey",
   "DarkTurquoise",
   "DarkViolet",
   "DeepPink",
   "DeepSkyBlue",
   "DimGray",
   "DimGrey",
   "DodgerBlue",
   "FireBrick",
   "FloralWhite",
   "ForestGreen",
   "Fuchsia",
   "Gainsboro",
   "GhostWhite",
   "Gold",
   "GoldenRod",
   "Gray",
   "Grey",
   "Green",
   "GreenYellow",
   "HoneyDew",
   "HotPink",
   "IndianRed",
   "Indigo",
   "Ivory",
   "Khaki",
   "Lavender",
   "LavenderBlush",
   "LawnGreen",
   "LemonChiffon",
   "LightBlue",
   "LightCoral",
   "LightCyan",
   "LightGoldenRodYellow",
   "LightGray",
   "LightGrey",
   "LightGreen",
   "LightPink",
   "LightSalmon",
   "LightSeaGreen",
   "LightSkyBlue",
   "LightSlateGray",
   "LightSlateGrey",
   "LightSteelBlue",
   "LightYellow",
   "Lime",
   "LimeGreen",
   "Linen",
   "Magenta",
   "Maroon",
   "MediumAquaMarine",
   "MediumBlue",
   "MediumOrchid",
   "MediumPurple",
   "MediumSeaGreen",
   "MediumSlateBlue",
   "MediumSpringGreen",
   "MediumTurquoise",
   "MediumVioletRed",
   "MidnightBlue",
   "MintCream",
   "MistyRose",
   "Moccasin",
   "NavajoWhite",
   "Navy",
   "OldLace",
   "Olive",
   "OliveDrab",
   "Orange",
   "OrangeRed",
   "Orchid",
   "PaleGoldenRod",
   "PaleGreen",
   "PaleTurquoise",
   "PaleVioletRed",
   "PapayaWhip",
   "PeachPuff",
   "Peru",
   "Pink",
   "Plum",
   "PowderBlue",
   "Purple",
   "RebeccaPurple",
   "Red",
   "RosyBrown",
   "RoyalBlue",
   "SaddleBrown",
   "Salmon",
   "SandyBrown",
   "SeaGreen",
   "SeaShell",
   "Sienna",
   "Silver",
   "SkyBlue",
   "SlateBlue",
   "SlateGray",
   "SlateGrey",
   "Snow",
   "SpringGreen",
   "SteelBlue",
   "Tan",
   "Teal",
   "Thistle",
   "Tomato",
   "Turquoise",
   "Violet",
   "Wheat",
   "White",
   "WhiteSmoke",
   "Yellow",
   "YellowGreen",
 ];

// Hair Style
   
const hairStyle = document.getElementById("hairStyle");
let hairStyleOptions = ["Short", "Medium", "long"];

for(let i = 0; i < hairStyleOptions.length; i++) {
let opt = hairStyleOptions[i];
const el = document.createElement("option");
el.textContent = opt;
el.value = opt;
hairStyle.appendChild(el);
}

// Complexion

const complexion = document.getElementById("complexion");
let complexionOptions = ["Ivory", "Porcelain", "Pale Ivory", "Warm Ivory", "Sand", "Rose Beige", "Limestone", "Beige", "Senna", "Honey", "Almond", "Chesnut", "Bronze", "Umber", "Espresso", "Chocolate"];

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
