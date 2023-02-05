const text = document.getElementById("txt");
const str = text.textContent + "Ewa Malik";
let index = 0;
const typeWriter = () => {
  if (index < str.length) {
    text.textContent += str.charAt(index);
    index++;
    setTimeout(typeWriter, 300);
  }
};
typeWriter();

const emailBtn = document.getElementById("emailBtn");
emailBtn.addEventListener("click", function () {
  window.location.href = "mailto:supernatychacz@gmail.com";
});
