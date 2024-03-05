import { burgerMenu } from "./modules/burgermenu.js";
import { scrollTrigger } from "./modules/scrolltrigger.js";
import {
  Spanish,
  French,
  Tagalog,
  Nihongo,
  Hangul,
  Italian,
} from "./modules/language.js";

if (document.body.getAttribute("data-page") === "home") {
  burgerMenu();
  scrollTrigger();
} else if (document.body.getAttribute("data-page") === "languageSelection") {
  let languageSelection = new Spanish();

  const languageList = document.querySelector("#languageList");
  const greetingsList = document.querySelector("#greetingsList");

  languageList.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG" || e.target.tagName === "P") {
      const selectedLanguage = e.target
        .closest("li")
        .querySelector("p")
        .textContent.toLowerCase();
      if (selectedLanguage === "french") {
        languageSelection = new French();
      } else if (selectedLanguage === "tagalog") {
        languageSelection = new Tagalog();
      } else if (selectedLanguage === "nihongo") {
        languageSelection = new Nihongo();
      } else if (selectedLanguage === "hangul") {
        languageSelection = new Hangul();
      } else if (selectedLanguage === "italian") {
        languageSelection = new Italian();
      } else {
        languageSelection = new Spanish();
      }
      renderGreetings();
    }
  });

  function renderGreetings() {
    greetingsList.innerHTML = "";

    for (const key in languageSelection) {
      if (Object.hasOwnProperty.call(languageSelection, key)) {
        const li = document.createElement("li");
        li.textContent = `${key}: "${languageSelection[key]}"`;
        greetingsList.appendChild(li);
      }
    }
  }

  console.log("OOP working");
  renderGreetings();
}
