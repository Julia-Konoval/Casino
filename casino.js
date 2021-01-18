class Casino {
  constructor(name) {
    this.name = name;
    this.year = year;
  }
  get getMoney() {}
  get getMachineCount() {}
  // generateNumber() {
  //   Math.floor(Math.random() * (3 - 1 + 1) + 100);
}
let numberButton = document.getElementById("number-button");
let numberContainer = document.getElementById("#number-container");

let result = document.createElement("div");
result.setAttribute("id", "generated-number");
document.body.appendChild(result);

function randomNumber(length) {
  var text = "";
  var possible = "123";
  for (var i = 0; i < length; i++) {
    var sup = Math.floor(Math.random() * possible.length);
    text += i > 0 && sup == i ? "0" : possible.charAt(sup);
  }
  result.textContent = Number(text);
}
