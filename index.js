const input = document.getElementById("input-bx");
const list = document.getElementById("list");

function onAdd() {
  if (input.value === "") {
    alert("You Must Enter Something!");
  } else {
    const li = document.createElement("li");
    li.innerHTML = input.value;
    list.appendChild(li);
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerHTML = "\u00d7";
  }
  input.value = "";
}

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") e.target.classList.toggle("checked");
  if (e.target.tagName === "SPAN") e.target.parentElement.remove();
});
