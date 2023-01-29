var i = 0;
var txt = document.getElementById("txt");
var speed = 50;

function typeWriter() {
  if (i < txt.lenght) {
    document.getElementById("txt").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
