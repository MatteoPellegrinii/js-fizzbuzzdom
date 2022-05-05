const ul = document.querySelector("ul.list");
const li = document.createElement ("li");

for (let index = 1; index <= 100; index++) {
    let restodicinque = index % 3;
    console.log(restodicinque);
    let restodidieci = index % 5;
    console.log(restodidieci);
    
    if (restodicinque === 0){
        let element = `<li class="box box--${index}"> fizz </li>`;
        ul.innerHTML += element;
    }
    else if (restodidieci=== 0) {
        let element = `<li class="box box--${index}"> buzz </li>`;
        ul.innerHTML += element;
    }
    else if((restodicinque === 0) || (restodidieci=== 0)) {
        let element = `<li class="box box--${index}"> fizzbuzz </li>`;
        ul.innerHTML += element;
    }
    else{
        let element = `<li class="box box--${index}">${index}</li>`;
        ul.innerHTML += element; 
    }
}


