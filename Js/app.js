let elForm = document.querySelector(".js-form");
let elInput = document.querySelector(".js-input");
let elProgressBar = document.querySelector(".js-progress-bar");
let elResultOne = document.querySelector(".js-ResultOne");
let elResultTwo = document.querySelector(".js-ResultTwo");
let todos = [];
let dones = [];

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    let inputValue = elInput.value;
    elInput.value = "";
    elResultOne.innerHTML = null
    todos.push(inputValue);


    drawTodo()
    progressBar()
});

function drawTodo() {
    let resultONe = "";

    for (let i = 0; i < todos.length; i++) {
        resultONe += `<div class = "alert alert-primary d-flex justify-content-between align-items-center">
        ${todos[i]} <button class ="btn btn-success" onclick="checkTodo(${i})">&check;</button>
        </div>`
    }
    elResultOne.innerHTML = resultONe;

    let resultTwo = "";

    for (let i = 0; i < dones.length; i++) {
        resultTwo += `<div class = "alert alert-secondary d-flex justify-content-between align-items-center">
        ${dones[i]} <button class ="btn btn-danger" onclick="deleteTodo(${i})">&cross;</button>
        </div>`
    }
    elResultTwo.innerHTML = resultTwo;
}

function checkTodo(index) {
    dones.push(todos.splice(index, 1));
    drawTodo();
    progressBar()

}

function deleteTodo(index) {
    dones.splice(index, 1);
    drawTodo();
    progressBar()

}

function progressBar() {
    let percent = dones.length * 100 / (dones.length + todos.length);
    elProgressBar.style.width = percent + "%";
    progressBar()
}
