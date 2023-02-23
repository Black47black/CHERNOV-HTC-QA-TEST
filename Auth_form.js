
var form = document.getElementById("form"); // Берем форму из верстки

form.addEventListener('submit', function (e) { // Подписываемся на событие submit у формы
  var login = form.email.value;
  var password = form.pass.value;

  if (login === "piu@piu.piu" && password === "1234567890") {
      alert("Добро пожаловать, " + login + "!");
      window.location.href = "Auth_form.htm";
  }
  else {
      alert("Неправильный пароль или логин!!");
  }
}); 
