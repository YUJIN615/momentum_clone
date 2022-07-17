const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting");
const logoutBtn = document.querySelector(".logoutBtn");

const todoForm2 = document.querySelector('.todo-form');
const todoList2 = document.querySelector('.todo-list');

// 반복되는 string 값은 변수로 저장해두는 것이 좋다.
// 일반적으로 대문자로 변수명을 지정해서 string이라는 것을 나타낸다.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

logoutBtn.addEventListener('click', logout);

if (savedUsername === null) {
  // 저장된 username 없으면 로그인 창 표시
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // 저장된 username 있으면 인사
  paintGreeting(savedUsername);
}

// 로그인
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

// 인사
function paintGreeting(username) {
  greeting.innerText = `Hello, ${username} :)`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  todoForm2.classList.remove("hidden");
  todoList2.classList.remove("hidden");
}

function logout() {
  localStorage.removeItem(USERNAME_KEY);
}