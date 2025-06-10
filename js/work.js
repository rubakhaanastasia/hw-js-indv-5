//1.
const list = prompt("виберіть напій: кава, чай або сік");
switch (list) {
  case "кава":
    alert("ви вибрали каву");
    break;
  case "чай":
    alert("ви вибрали чай");
    break;
  case "сік":
    alert("ви вибрали сік");
    break;
  default:
    alert("вибір невірний, спробуйте будь ласка ще раз");
}

//2.
const dayWeek = prompt(
  "напишіть любий день тижня наприклад: понеділок, вівторок").toLowerCase();
switch (dayWeek) {
  case "понеділок":
  case "вівторок":
  case "середа":
  case "четвер":
  case "п'ятниця":
    alert("це є робочим днем!");
    break;
  case "субота":
  case "неділя":
    alert("це є вихідні дні!");
    break;
  default:
    alert("неправильно введений день тижня, спробуйте будь ласка ще раз");
}

//3.
const mounth = Number(prompt("введіть номер місяця 1-12"));
switch (mounth) {
  case 12:
  case 1:
  case 2:
    alert("це зима");
    break;
  case 3:
  case 4:
  case 5:
    alert("це весна");
    break;
  case 6:
  case 7:
  case 8:
    alert("це літо");
    break;
  case 9:
  case 10:
  case 11:
    alert("це осінь");
    break;
  default:
    alert("неправильно введений номер місяця, спробуйте будь ласка ще раз");
}

//4.
const mounthMo = Number(prompt("введіть номер місяця (1-12)"));
switch (mounthMo) {
  case 1:
    alert("cічень має 31 день.");
    break;
  case 2:
    alert("лютий має 28 або 29 днів");
    break;
  case 3:
    alert("березень має 31 день");
    break;
  case 4:
    alert("квітень має 30 днів");
    break;
  case 5:
    alert("травень має 31 день");
    break;
  case 6:
    alert("червень має 30 днів");
    break;
  case 7:
    alert("липень має 31 день");
    break;
  case 8:
    alert("серпень має 31 день");
    break;
  case 9:
    alert("вересень має 30 днів");
    break;
  case 10:
    alert("жовтень має 31 день");
    break;
  case 11:
    alert("листопад має 30 днів");
    break;
  case 12:
    alert("грудень має 31 день");
    break;
  default:
    alert("неправильно введений номер місяця, спробуйте будь ласка ще раз");
}

//5.
const color = prompt("введіть назву кольору наприклад: рожевий, голубий, салатовий").toLowerCase();
switch (color) {
  case "рожевий":
    alert("стоп");
    break;
  case "голубий":
    alert("йти");
    break;
  case "салатовий":
    alert("чекати");
    break;
  default:
    alert("неправильно введена назва кольору, спробуйте будь ласка ще раз");
}

6;
const num1 = prompt("введіть перше число");
const num2 = prompt("введіть друге число");
const message = prompt("виберіть знак +, -, *, /");

switch (message) {
  case "+":
    alert(Number(num1) + num2);
    break;
  case "-":
    alert(Number(num1) - num2);
    break;
  case "*":
    alert(Number(num1) * num2);
    break;
  case "/":
    alert(Number(num1) / num2);
    break;
  default:
    alert("знак невірний, спробуйте будь ласка ще раз");
}
