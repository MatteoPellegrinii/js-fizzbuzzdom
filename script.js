const ul = document.querySelector("ul.list");
const li = document.createElement ("li");

for (let index = 1; index <= 100; index++) {
    let element = `<li class="box box--${index}">${index}</li>`;
    ul.innerHTML += element; 
    let restodicinque = index % 5;
    console.log(restodicinque);
    let restodidieci = index % 10;
    console.log(restodidieci);
    
    if (resto = 0){
        let element = `fizzbuz`;
        ul.innerHTML += element; 
    }
}


