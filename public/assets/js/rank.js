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


// Create NPC Object 
let player = [];

const addPlayer = (ev)=>{
    ev.preventDefault();
    let npc = {
        id: Date.now(),
        class: document.getElementById('selectClass').value,
        rank: document.getElementById('selectRank').value,
    }

    player.push(player);
    document.forms[0].reset(); 


    console.warn('added' , {player} );
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(player, '\t', 2);

    localStorage.setItem('statsJson', JSON.stringify(player) );
}

    document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addPlayer);
});