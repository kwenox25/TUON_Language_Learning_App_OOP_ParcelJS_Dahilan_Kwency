import { burgerMenu } from "./modules/burgermenu.js";
import { scrollTrigger } from "./modules/scrolltrigger.js";
import { Spanish, French, Tagalog } from "./modules/language.js";

if (document.body.getAttribute("data-page") === "home") {
  burgerMenu();
  scrollTrigger();
} else if (document.body.getAttribute("data-page") === "languageSelection") {
  let languageSelection = new Spanish();

  const languageList = document.querySelector("#languageList");
  const greetingsList = document.querySelector("#greetingsList");

  languageList.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      const selectedLanguage = event.target.textContent.toLowerCase();
      switch (selectedLanguage) {
        case "french":
          languageSelection = new French();
          break;
        case "tagalog":
          languageSelection = new Tagalog();
          break;
        default:
          languageSelection = new Spanish();
          break;
      }
      renderGreetings();
    }
  });

  function renderGreetings() {
    greetingsList.innerHTML = "";

    const keys = Object.keys(languageSelection.translations);

    keys.forEach((key) => {
      const li = document.createElement("li");
      li.textContent = languageSelection.translate(key);
      greetingsList.appendChild(li);
    });
  }
  console.log("OOP working");
  renderGreetings();
}
