const ul = document.querySelector("ul.list");
const li = document.createElement ("li");

for (let index = 1; index <= 100; index++) {
    let restotre = index % 3;
    console.log(restotre);
    let restocinque = index % 5;
    console.log(restocinque);
    
    if( restotre==0 && restocinque==0) {
        let element = `<li class="box"> fizzbuzz </li>`;
        ul.innerHTML += element;
    }
    else if (restocinque=== 0) {
        let element = `<li class="cinque "> buzz </li>`;
        ul.innerHTML += element;
    }
    else if (restotre === 0){
        let element = `<li class="fizz"> fizz </li>`;
        ul.innerHTML += element;
    }
    else{
        let element = `<li class="others others--${index}">${index}</li>`;
        ul.innerHTML += element; 
    }
}


