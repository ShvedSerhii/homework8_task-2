const { fromEvent } = rxjs 
const { debounceTime, map } = rxjs.operators

const values = []

const input = document.getElementById('input_text')
const form = document.getElementById('form_value')
const button = document.getElementById('input_button')
const search = document.getElementById('search')

fromEvent(form, 'submit').subscribe(
 x => console.log(x.target[0].value) 
)

// let item = {
//   current: [
//     {
//       taskId: doId(),
//       taskContent: "Task 1",
//       taskState: "current"
//     },
//     {
//       taskId: doId(),
//       taskContent: "Task 2",
//       taskState: "current"
//     }
//   ],
//   done: [
//     {
//       taskId: doId(),
//       taskContent: "Task 3",
//       taskState: "done"
//     }
//   ],
//   get allTasks() {
//     return this.current.length + this.done.length;
//   },
//   get doneTasks() {
//     return this.done.length;
//   }
// };
// let tasksList = document.getElementById("app__list");
// let allTasks = document.getElementById("js-all-tasks");
// let doneTasks = document.getElementById("js-done-tasks");
// let addNewTaskField = document.getElementById("app__task-new");

// function INIT() {
//   for (const item of tasks.current) {
//     createItem(item);
//   }
//   for (const item of tasks.done) {
//     createItem(item);
//   }
//   allTasks.innerHTML = tasks.allTasks;
//   doneTasks.innerHTML = tasks.doneTasks;
// }

// function createItem(el) {
//   let item = document.createElement("li");
//   let remove = document.createElement("div");
//   let text = document.createElement("span");
//   remove.classList.add("app__list-remove");
//   // fromEvent(remove, 'click').subscribe(
//   //   removeTask(el)
//   // );
//   // remove.addEventListener("click", function() {
//   //   removeTask(this);
//   // });
//   text.classList.add("app__list-text");
//   text.addEventListener("click", function() {
//     doneTask(this);
//   });
//   switch (el.taskState) {
//     case "done":
//       item.classList.add("app__list-item", "app__list-item--done");
//       break;
//     default:
//       item.classList.add("app__list-item");
//   }
//   item.id = el.taskId;
//   text.innerHTML = el.taskContent;
//   item.appendChild(text);
//   item.appendChild(remove);
//   tasksList.appendChild(item);
// }

// function doneTask(el) {
//   let elem = el.parentNode;
//   let elemId = elem.id;
//   let elemState = elem.classList.contains("app__list-item--done");

//   const [itemsRemove, itemsAdd] = elemState
//     ? [tasks.done, tasks.current]
//     : [tasks.current, tasks.done];
//   elem.classList.toggle("app__list-item--done");
//   for (const [index, item] of itemsRemove.entries()) {
//     if (item.taskId !== elemId) {
//       continue;
//     }
//     itemsAdd.push(item);
//     itemsRemove.splice(index, 1);
//   }
//   doneTasks.innerHTML = tasks.doneTasks;
// }

// function removeTask(el) {
//   let removeEl = el.parentNode;
//   let removeElId = removeEl.id;
//   let removeElState = removeEl.classList.contains("app__list-item--done");

//   removeEl.remove();
//   const items = removeElState ? tasks.done : tasks.current;
//   for (const [index, item] of items.entries()) {
//     if (item.taskId !== removeElId) {
//       continue;
//     }
//     items.splice(index, 1);
//   }
//   allTasks.innerHTML = tasks.allTasks;
//   doneTasks.innerHTML = tasks.doneTasks;
// }

// function addTasks(str) {
//   let elem = {
//     taskId: doId(),
//     taskContent: str,
//     taskState: "current"
//   };
//   tasks.current.push(elem);
//   createItem(elem);
//   allTasks.innerHTML = tasks.allTasks;
// }

// function doId() {
//   return Math.random()
//     .toString(36)
//     .substr(2, 16);
// }

// INIT();

// addNewTaskField.addEventListener("keyup", function(e) {
//   if (e.keyCode === 13) {
//     addTasks(this.value);
//     this.value = "";
//   }
// });
