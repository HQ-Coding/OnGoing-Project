let color = document.getElementById('color');
let createBtn = document.getElementById('createBtn');
let list = document.getElementById('list');

createBtn.onclick = () => {
  let newNote = document.createElement('div');
  newNote.classList.add('note');
  newNote.innerHTML = `
    <span class="close">X</span>
    <textarea placeholder="Write Content..." rows="10" cols="30"></textarea>`;

  newNote.style.borderColor = color.value;
  list.appendChild(newNote);
};


document.addEventListener('click' ,(event)=>{
    console.log(event.target  );
    console.log(event.target.parentNode);
    if(event.target.classList.contains('close')){
        event.target.parentNode.remove() 
    }
})