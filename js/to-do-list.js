
     //Variables
     const list = document.querySelector('ul');  
     const input = document.querySelector('input');
     const button = document.querySelector('button');
     const checkBox = document.querySelector('checkBox');
    
     //Add the item to the list
     button.onclick = function() {
     let myItem = input.value;
     input.value = '';
  
     //DOM
     const listItem = document.createElement('li');
     const listText = document.createElement('span');
     const listBtn = document.createElement('button');
     const listCheckBox = document.createElement('checkBox');
     listItem.appendChild(listText);
     listText.textContent = myItem;
  
     //Removes to-do list item with the delete button
     listBtn.onclick = function() {
         list.removeChild(listItem);
     }
  
     listItem.appendChild(listBtn);
     listBtn.textContent = 'Delete';
     list.appendChild(listItem);


     //CheckBox for the to-do-items
     var submit = document.createElement("input");
     submit.setAttribute("type", "checkbox");
 
    listItem.appendChild(submit);
    list.appendChild(submit);

    //To input element
         input.focus();
        }
     /*

     //Check box in the list in event Listener
     const checkBox = document.querySelector('checkBox');
     checkBox.addEventListener('change', (event) => {
        const result = document.querySelector('result');
        result.textContent = `What you still need to do is ${event.target.value}`;
      });

      listItem.appendChild(checkBox);


     const checkBox = document.createElement('input');
    checkBox.type="checkbox";

    checkBox.onclick = function (event) {
        const element = event.target;

        if (element.type === "checkbox") {
            if (element.checked) {
                listItem.style.textDecoration = "line-through";
                listItem.style.textDecorationColor = "red";
                listItem.style.opacity = 0.5;

                const parent = element.parentElement.parentElement;
                parent.appendChild(element.parentElement);
            } else {
                listItem.style.textDecoration = "none";
                listItem.style.opacity = 1;

                const parent = element.parentElement.parentElement;
                parent.insertBefore(element.parentElement.parent.firstChild);
            }
        }
    }

*/


