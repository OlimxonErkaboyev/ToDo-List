const elForm = document.querySelector(".js-form");
const elFormInput = elForm.querySelector(".js-form-input");
const elFormResult = document.querySelector(".js-form-result");
let ombor = [];

function AddPage(){
    let result = "";

    for (let i = 0; i < ombor.length; i++) {
        result +=
        "<li class='list-item-group list-item-action d-flex align-items-center justify-content-between mb-3'>"+ 
         "<p class ='h5'>"+ ombor[i] +"</p>"+
        "<button class='btn btn-danger' type = 'button' onclick = 'DeletePage(" + i +")'>Delete</button>"+
        "</li>";        
    }
    // console.log(result);
    elFormResult.innerHTML = result;
}


function DeletePage(index){
    ombor.splice(index, 1)
    AddPage();
}


elForm.addEventListener("submit", function(evt){
    evt.preventDefault();

    ombor.push(elFormInput.value.trim());

    elFormInput.value = '';


    AddPage();

});
