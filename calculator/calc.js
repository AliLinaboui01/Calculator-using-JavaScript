let num = document.querySelectorAll("#num");

let op = document.querySelectorAll("#op");

let AC = document.getElementById("AC");

let DE = document.getElementById("DE");

let EQ = document.getElementById("EQ");

let display = document.getElementById("display");

num.forEach((element) => {
  element.addEventListener("click", function () {
    display.value += element.value;
  });
});

op.forEach((element) => {
  element.addEventListener("click", function () {
    display.value += element.value;
  });
});

AC.addEventListener("click", function () {
  display.value = "";
});

DE.addEventListener("click", function () {
  display.value = display.value.toString().slice(0, -1);
});
EQ.addEventListener("click", function () {
  if (display.value) {
    display.value = eval(display.value);
  }
});
