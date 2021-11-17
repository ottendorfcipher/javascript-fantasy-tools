// Create NPC Object 
let npcChar = [];

const addNpc = (ev)=>{
    ev.preventDefault();
    let npc = {
        id: Date.now(),
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        age: document.getElementById('age').value,
        hairColor: document.getElementById('hairColor').value,
        eyeColor: document.getElementById('eyeColor').value,
        complexion: document.getElementById('complexion').value,
        favColorOne: document.getElementById('favColorOne').value,
        favColorTwo: document.getElementById('favColorTwo').value,
        hairStyle: document.getElementById('hairStyle').value
    }

    npcChar.push(npc);
    document.forms[0].reset(); 


    console.warn('added' , {npcChar} );
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(npcChar, '\t', 2);

    localStorage.setItem('userGeneratedNpc', JSON.stringify(npcChar) );
}

    document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addNpc);
});