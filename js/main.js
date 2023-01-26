let elForm = document.querySelector(".input-form");
let elInput = document.querySelector(".text-input");
let elBtn = document.querySelector(".input-btn");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let elInputbox = elInput.value

  let elList = document.querySelector(".todo-list");
  let elInputBox = document.createElement("p");
  let pText = document.createTextNode(elInputbox);
  elList.appendChild(elInputBox);
  elInputBox.appendChild(pText);

  //delete btn

  let deleteTodo = document.createElement("button");
  let btnText = document.createTextNode("Delete");
  deleteTodo.appendChild(btnText);
  elList.appendChild(deleteTodo);
  deleteTodo.classList.add("delete-todo");

  deleteTodo.addEventListener("click", function () {
    let sibling = deleteTodo.previousSibling;
    deleteTodo.style.display = "none";
    sibling.style.display = "none";
  })

  elInput.value = "";
});


























