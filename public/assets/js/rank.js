// Rank

const classes = [
   {
       name: "Fighter",
       attack: 2,
       defense: -1,
   },
   {        
       name: "Assassin",
       attack: 2,
       defense: -1,
   },
   {
      name: "Mage",
      attack: 1,
      defense: -2,
   },
   {
      name: "Archer",
      attack: 1,
      defense: -2,
   },
   {
      name: "Beserker",
      attack: 2,
      defense: -4,
   },
   {
      name: "Priest",
      attack: 1,
      defense: -2,
   },
   {
      name: "Necromancer",
      attack: 0,
      defense: -3,
   },
   {
      name: "Bard",
      attack: 0,
      defense: -3,
   },
   {
      name: "Jack-of-all-Trades",
      attack: 1,
      defense: -2,
   }
];

const rank = [
   {
      rank: "Beginner",
      level: 1,
      attack: 1,
      defense: 1,
   },
   {
      rank: "Apprentice",
      level: 2,
      attack: 3,
      defense: 3,
   },
   {
      rank: "Journeyman",
      level: 3,
      attack: 6,
      defense: 6,
   },
   {
      rank: "On the Council",
      level: 4,
      attack: 7,
      defense: 7,
   },
   {
      rank: "Master",
      level: 5,
      attack: 10,
      defense: 10,
   },
];

const statusEffect = [
   {
      effect: "Increased Attack",
      attack: 4,
   },
   {
      effect: "Increased Defense",
      attack: 4,
   },
];

let selectClassOptions = classes.map(a => a.name);
let selectRankOptions = rank.map(a => a.rank);
let statusEffectOptions = statusEffect.map(a => a.effect);

function rank() {

}

function playerClass()
{

}

function statusEffect() {
   
}

attack.innerHTML = classes[1].attack + rank[1].attack + statusEffect[1].attack;
defense.innerHTML = classes[2].defense + rank[2].defense + statusEffect[2].defense;

const selectRank = document.getElementById("selectRank");

for( let i = 0; i < selectRankOptions.length; i++ ) {
   let opt = selectRankOptions[i];
   const el = document.createElement("option");
   el.textContent = opt;
   el.value = opt;
   selectRank.appendChild(el); 
}

// Class

const selectClass = document.getElementById("selectClass");

for( let i = 0; i < selectClassOptions.length; i++ ) {
   let opt = selectClassOptions[i];
   const el = document.createElement("option");
   el.textContent = opt;
   el.value = opt;
   selectClass.appendChild(el); 

}

// Status Effects

const statusEffects = document.getElementById("statusEffects");

for( let i = 0; i < statusEffectsOptions.length; i++ ) {
   let opt = statusEffectsOptions[i];
   const el = document.createElement("option");
   el.textContent = opt;
   el.value = opt;
   statusEffects.appendChild(el); 

}