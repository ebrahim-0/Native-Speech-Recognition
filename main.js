window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let li = document.createElement("li");
const list = document.querySelector(".list");
li.className = "list-item";
list.appendChild(li);

recognition.addEventListener("result", (e) => {
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  li.textContent = transcript;

  if (e.results[0].isFinal) {
    li = document.createElement("li");
    li.className = "list-item";
    list.appendChild(li);
  }
});

recognition.addEventListener("end", recognition.start);

recognition.start();
