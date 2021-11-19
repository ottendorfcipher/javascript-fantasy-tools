// Rank

let rank = []

for (var i = 1; i <= 5; i++) {
   rank.push(i);
}

const selectRank = document.getElementById("selectRank");
let selectRankOptions = rank;

for(let i = 0; i < selectRankOptions.length; i++) {
let opt = selectRankOptions[i];
const el = document.createElement("option");
el.textContent = opt;
el.value = opt;
selectRank.appendChild(el); 

}

// Class

const selectClass = document.getElementById("selectClass");
let selectClassOptions = ["Fighter", "Assassin", "Mage", "Archer", "Beserker", "Healer", "Necromancer", "Bard", "Jack-of-all-Trades"];

for(let i = 0; i < selectClassOptions.length; i++) {
let opt = selectClassOptions[i];
const el = document.createElement("option");
el.textContent = opt;
el.value = opt;
selectClass.appendChild(el); 

}

// Status Effects

const statusEffects = document.getElementById("statusEffects");
let statusEffectsOptions = ["Increased Attack", "Increased HP", "Increased Defense"];

for(let i = 0; i < statusEffectsOptions.length; i++) {
let opt = statusEffectsOptions[i];
const el = document.createElement("option");
el.textContent = opt;
el.value = opt;
statusEffects.appendChild(el); 

}