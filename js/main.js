import { burgerMenu } from "./modules/burgermenu.js";
import { scrollTrigger } from "./modules/scrolltrigger.js";
// import { Spanish, French, Tagalog } from "./modules/language.js";
import { Guitar, BassGuitar, Keytar } from "./modules/guitar.js";

if (document.body.getAttribute("data-page") === "home") {
  burgerMenu();
  scrollTrigger();
} else if (document.body.getAttribute("data-page") === "languageSelection") {
  const fenderStrat = new Guitar(
    "Fender",
    "Stratocastor",
    "Ocean Blue",
    6,
    "Single Coil",
    "HumberBucker"
  );

  const gretschWhiteFalcon = new Guitar(
    "Gretsch",
    "Falcon",
    "White",
    12,
    "Filter'Tron",
    "Filter'Tron"
  );

  const alesisKeytar = new Keytar(
    "Alesis",
    "Vortex",
    "Blue",
    0,
    "None",
    "None",
    49
  );

  console.log(alesisKeytar);
  alesisKeytar.slide();

  console.log(fenderStrat);
  fenderStrat.strum();

  console.log(gretschWhiteFalcon);
  gretschWhiteFalcon.strum();

  const fenderPrecisionBass = new BassGuitar();

  console.log(fenderPrecisionBass);
  fenderPrecisionBass.slapDaBass();
}
