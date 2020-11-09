const input = document.querySelector('input');
const Button = document.querySelector('.addTask > button');

Button.addEventListener('click', addList);

function addList(){
    const notCompleted = document.querySelector('.notCompleted');
    const Completed = document.querySelector('.Completed');

    const newList = document.createElement('li');
    const checkButton = document.createElement('button');
    const deleteButton = document.createElement('button');
    const editButton = document.createElement('button');
    
    checkButton.innerHTML = '<i class="fa fa-check"></i>';
    deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
    editButton.innerHTML = '<i class="fa fa-pencil"></i>';

    if(input.value !== ''){
        newList.textContent = input.value;
        input.value = '';
        notCompleted.appendChild(newList);
        newList.appendChild(checkButton);
        newList.appendChild(deleteButton);
        newList.appendChild(editButton);
    }

    checkButton.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
        Completed.appendChild(parent);
        checkButton.style.display='none';
        editButton.style.display='none';

    });
    deleteButton.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
    });
    editButton.addEventListener('click', function(){
        if(input.value !== ''){
            const parent = this.parentNode;
            parent.remove();
            newList.textContent = input.value;
            input.value = '';
            notCompleted.appendChild(newList);
            newList.appendChild(checkButton);
            newList.appendChild(deleteButton);
            newList.appendChild(editButton);
        }
    });
}
