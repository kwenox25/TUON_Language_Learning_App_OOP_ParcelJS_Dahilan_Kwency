import { burgerMenu } from "./modules/burgermenu.js";
import { scrollTrigger } from "./modules/scrolltrigger.js";
// import { gotonextPage } from "./modules/gotonextpage.js";
// import { Spanish, French, Tagalog } from "./language.js";

if (document.body.dataset.page === "home") {
  burgerMenu();
  scrollTrigger();
} else if (document.body.dataset.page === "gettingStarted") {
}
// } else if (document.body.dataset.page === "gettingStarted") {
// }

// function getLanguage(event) {
//   event.preventDefault();

//   const selectedLanguage = event.target.textContent.trim();
//   let language;

//   switch (selectedLanguage) {
//     case "Spanish":
//       language = new Spanish();
//       break;
//     case "French":
//       language = new French();
//       break;
//     case "Tagalog":
//       language = new Tagalog();
//       break;
//     default:
//       language = new Language();
//   }

//   const greetingsList = document.querySelector("#greetingsList");
//   greetingsList.innerHTML = "";

//   const greetings = language.greetings;
//   for (const key in greetings) {
//     const greetingText = greetings[key];
//     const li = document.createElement("li");
//     li.textContent = `${key}: ${greetingText}`;
//     greetingsList.appendChild(li);
//   }
// }

// const languageItems = document.querySelectorAll("#languageList li a");
// languageItems.forEach((item) => {
//   item.addEventListener("click", getLanguage);
// });
