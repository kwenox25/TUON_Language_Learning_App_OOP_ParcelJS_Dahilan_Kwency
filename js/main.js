import { burgerMenu } from "./modules/burgermenu.js";
import { scrollTrigger } from "./modules/scrolltrigger.js";
import { gotonextPage } from "./modules/gotonextpage.js";

if (document.body.dataset.page === "home") {
  burgerMenu();
  scrollTrigger();
} else if (document.body.dataset.page === "gettingStarted") {
  //   gotonextPage();
}
