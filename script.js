let inputBox = document.querySelector(".input-box"),
  textArea = inputBox.querySelector("textarea"),
  minNum = inputBox.querySelector(".min_num");

textArea.addEventListener("keyup", () => {
  let valLenght = textArea.value.length;
  var maxLength =
    document.getElementById("digMax").value > 0
      ? document.getElementById("digMax").value
      : 100;

  minNum.innerHTML = valLenght;

  valLenght > 0
    ? inputBox.classList.add("active")
    : inputBox.classList.remove("active");

  valLenght > maxLength
    ? inputBox.classList.add("error")
    : inputBox.classList.remove("error");
});

function Numeros(string) {
  var out = "";
  var filtro = "1234567890";

  for (var i = 0; i < string.length; i++)
    if (filtro.indexOf(string.charAt(i)) != -1) out += string.charAt(i);

  return out;
}

function showhide(string) {
  var x = document.getElementById(string);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
function changeColor(){
 
  let color = "#";
  for (let i = 0; i < 6; i++) color += hex[randomNumber()];
  document.body.style.background = color;
}

function randomNumber() {
  return Math.floor(Math.random() * hex.length);
}
