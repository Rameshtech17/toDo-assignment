const input = document.querySelector('input');
const Button = document.querySelector('.addTask > button');
const Button1 = document.querySelector('.addTask > button1');

Button.addEventListener('click', addList);

const url_update = new URL("http://localhost:8000/todo1/")

const url_post = new URL("http://localhost:8000/todo/")


const sendHttpRequest = (method, urls, data) => {
    return fetch(urls, {
        method: method,
        body: JSON.stringify(data),
        headers: data ? {
            'content-Type': 'application/json',
            'Accept': 'application/json'
        } : {}
    }).then(response => {
        return response.json();
    }
    )
};

const postData = (text) => {
    sendHttpRequest('POST', url_post, {
        text: text,
    })
};

const editData = (id, textdata) => {
    sendHttpRequest('PUT', url_update + id, {
        text: textdata,
    })
};

const completedData = (id, textdata, sts) => {
    sendHttpRequest('PUT', url_update + id, {
        text: textdata,
        status: sts,
    })
};

const deleteData = (id) => {
    sendHttpRequest('DELETE', url_update + id)
        .then(response => {
            console.log("delete :", response)
        })
}


const getData = () => {
    sendHttpRequest('GET', url_post)
        .then(responseData => {

            responseData.forEach(element => {

                const notCompleted = document.querySelector('.notCompleted');
                const Completed = document.querySelector('.Completed');

                const newList = document.createElement('li');
                const updateList = document.createElement('li');

                const checkButton = document.createElement('button');
                const deleteButton = document.createElement('button');
                const deleteButton1 = document.createElement('button');
                const editButton = document.createElement('button');

                checkButton.innerHTML = '<i class="fa fa-check"></i>';
                deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
                deleteButton1.innerHTML = '<i class="fa fa-trash"></i>';
                editButton.innerHTML = '<i class="fa fa-pencil"></i>';


                if (input.value !== '') {
                    Button.addEventListener('click', postData(input.value));
                }

                if (element['status'] == true) {

                    newList.textContent = element['text'];
                    input.value = '';
                    notCompleted.appendChild(newList);
                    newList.appendChild(checkButton);
                    newList.appendChild(deleteButton);
                    newList.appendChild(editButton);
                }

                else {
                    updateList.textContent = element['text'];
                    Completed.appendChild(updateList);
                    updateList.appendChild(deleteButton1);

                }
                checkButton.addEventListener('click', function () {

                    completedData(element['id'], element['text'], false);
                    const parent = this.parentNode;
                    parent.remove();
                    Completed.appendChild(parent);
                    checkButton.style.display = 'none';
                    editButton.style.display = 'none';

                });

                deleteButton.addEventListener('click', function () {
                    deleteData(element['id']);
                    const parent = this.parentNode;
                    parent.remove();
                });

                deleteButton1.addEventListener('click', function () {
                    deleteData(element['id']);
                    const parent = this.parentNode;
                    parent.remove();
                });

                editButton.addEventListener('click', function () {
                    if (input.value !== '') {
                        editData(element['id'], input.value);
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
            });
        })
};


function addList() {
    location.reload();
    if (input.value !== '') {
        Button.addEventListener('click', postData(input.value));
    }
}

getData();



