const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-form input');
const todoList = document.querySelector('.todo-list');
let todos = [];

const TODOS_KEY = 'todos';
const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedUsername !== null) {
  // 저장된 username 있으면 todo-form, todo-list 노출
  todoForm.classList.remove("hidden");
  todoList.classList.remove("hidden");
}

// localstorage에 저장된 todo가 있을 경우
if (savedTodos !== null) {
  // JSON 문자열로 저장했던 값을 JSON.parse를 이용해서 배열로 받아온다.
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}

// todo 등록
function submitTodo(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }
  paintTodo(newTodoObj);
  todos.push(newTodoObj);
  saveTodoDocs();

  todoInput.value ='';
}

// todo 그리기
function paintTodo(newTodo) {
  const li = document.createElement('li');
  const sapn = document.createElement('span');
  const deleteBtn = document.createElement('button');

  sapn.innerText = newTodo.text;
  li.id = newTodo.id;
  deleteBtn.innerText = '❌'

  li.appendChild(sapn);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  deleteBtn.addEventListener('click', deleteTodo);
}

// todo를 localstorage에 저장하기
function saveTodoDocs() {
  // localStorage에는 array를 저장할 수 없다. 텍스트만 가능.
  // array를 저장해도 a,b,c... 형태로 나온다.
  // JSON.stringify()를 사용해서 array를 JSON 문자열로 변환시켜 저장한다. (실제 array가 아님)
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

// todo 삭제하기
function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  // li의 id와 todos array중 id가 일치하는 객체를 제외한 todos를 반환
  todos = todos.filter(todo => parseInt(li.id) !== todo.id);
  saveTodoDocs();
}


todoForm.addEventListener('submit', submitTodo);
