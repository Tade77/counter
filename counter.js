const body = document.body;
const getReader = document.querySelector(".number");
const add = document.querySelector("#add");
const low = document.querySelector(".low");
let count = 0;
console.log(getReader);

read();

add.addEventListener("click", function () {
  count += 1;
  read();
});
low.addEventListener("click", function () {
  count -= 1;
  read();
});

function read() {
  getReader.innerText = count;
}
