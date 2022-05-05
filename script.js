const ul = document.querySelector("ul.list");
const li = document.createElement ("li");

for (let index = 1; index <= 100; index++) {
    let element = `<li class="box box--${index}">${index}</li>`;
    ul.innerHTML += element; 
}
