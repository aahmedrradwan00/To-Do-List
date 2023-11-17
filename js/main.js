let theInput = document.querySelector(".add-task input");
let theAdd = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");

window.onload = function () {
  theInput.focus();
};

theAdd.onclick = function () {
  if (theInput.value === "") {
    console.log("No Value");
    swal("Hey , it should not be empty");
  } else {
    let noTasksMsg = document.querySelector(".no-tasks-message");
    if (document.body.contains(noTasksMsg)) {
      noTasksMsg.remove();
    }
    let mainSpan = document.createElement("span");
    let del = document.createElement("span");
    let text = document.createTextNode(theInput.value);
    let delext = document.createTextNode("Delete");
    mainSpan.appendChild(text);
    mainSpan.classList.add("task-box");
    del.appendChild(delext);
    del.classList.add("delete");
    mainSpan.appendChild(del);
    tasksContainer.appendChild(mainSpan);
    theInput.value = "";
    theInput.focus();
    calculateTasks();
  }
};

document.addEventListener("click", function (e) {
  if (e.target.className == "delete") {
    e.target.parentNode.remove();

    if (tasksContainer.childElementCount == 0) {
      createNoTasks();
    }
  }

  if (e.target.classList.contains("task-box")) {
    e.target.classList.toggle("finished");
  }

  calculateTasks();
});

function createNoTasks() {
  let msg = document.createElement("span");

  let textmsg = document.createTextNode("No Tasks To Show");

  msg.appendChild(textmsg);

  msg.classList.add("no-tasks-message");

  tasksContainer.appendChild(msg);
}

function calculateTasks() {
  tasksCount.innerHTML = document.querySelectorAll(".task-box").length;
  tasksCompleted.innerHTML = document.querySelectorAll(
    ".tasks-content .finished"
  ).length;
}

finishAll = document.querySelector(".finishall");
deleteAll = document.querySelector(".deleteall");

finishAll.onclick = function () {
  var fin = document.querySelectorAll(".task-box");

  for (var i = 0; i < fin.length; i++) {
    fin[i].classList.add("finished");
  }
};

elements = document.getElementsByClassName("task-box");

deleteAll.onclick = function () {
  tasksContainer.innerHTML = "";
  createNoTasks();

  //another solution

  // if (elements.length === 0) {
  //   return;
  // } else {
  //   while (elements.length > 0) {
  //     elements[0].remove();
  //   }
  //   createNoTasks();
  // }
};
