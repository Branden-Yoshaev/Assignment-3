     //Variables
     const list = document.querySelector('ul');  
     const input = document.querySelector('input');
     const button = document.querySelector('button');

     //Add the item to the list
     button.onclick = function() {
     let myItem = input.value;
     input.value = '';
  
     //DOM
     const listItem = document.createElement('li');
     const listText = document.createElement('span');
     const listBtn = document.createElement('button');
  
     listItem.appendChild(listText);
     listText.textContent = myItem;
  
     //Event Handler removes to-do list item  with the delete button
     listBtn.onclick = function() {
         list.removeChild(listItem);
     }
  
     listItem.appendChild(listBtn);
     listBtn.textContent = 'Delete';
     list.appendChild(listItem);

     //Check box in the list
    
     //To input element
     input.focus();
     }