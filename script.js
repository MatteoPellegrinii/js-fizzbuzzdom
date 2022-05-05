const ul = document.querySelector("ul.list");
const li = document.createElement ("li");

for (let index = 1; index <= 100; index++) {
    let reestotre = index % 3;
    console.log(reestotre);
    let restocinque = index % 5;
    console.log(restocinque);
    
    if( reestotre==0 && restocinque==0) {
        let element = `<li class="box box--${index}"> fizzbuzz </li>`;
        ul.innerHTML += element;
    }
    else if (restocinque=== 0) {
        let element = `<li class="cinque cinque--${index}"> buzz </li>`;
        ul.innerHTML += element;
    }
    else if (reestotre === 0){
        let element = `<li class="fizz fizz--${index}"> fizz </li>`;
        ul.innerHTML += element;
    }
    else{
        let element = `<li class="others others--${index}">${index}</li>`;
        ul.innerHTML += element; 
    }
}


