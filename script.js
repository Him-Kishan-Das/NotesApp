

function save(){
    var key = document.getElementById('note-title').value;
    let a = document.getElementById("note-field").value;
    localStorage.setItem(key, a);
    
    let html = '';
    for (let [a, b] of Object.entries(localStorage)) {
        
        html += `<p class="display_key">${a} </p> <p class="display_value"> ${b} </p>`;
       
      }
      document.getElementById('note-display').innerHTML = html;
    

    document.getElementById('note-title').value = '';
    document.getElementById("note-field").value = '';
}

let html = '';
for (let [a, b] of Object.entries(localStorage)) {
    
    html += `<p class="display_key">${a} </p> <p class="display_value"> ${b} </p>`;
   
  }
  document.getElementById('note-display').innerHTML = html;
