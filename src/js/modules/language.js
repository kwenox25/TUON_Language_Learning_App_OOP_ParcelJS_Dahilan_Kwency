class Language {
  constructor(hi, goodMorning, goodNight, iLoveYou, sorry, thankyou, excuseMe) {
    this.hi = hi;
    this.goodMorning = goodMorning;
    this.goodNight = goodNight;
    this.iLoveYou = iLoveYou;
    this.sorry = sorry;
    this.thankyou = thankyou;
    this.excuseMe = excuseMe;
  }

  translate(key) {
    if (this[key]) {
      return this[key];
    } else {
      return `Translation not available for "${key}" in this language`;
    }
  }
}

class Spanish extends Language {
  constructor() {
    super(
      "Hola",
      "Buenos días",
      "Buenas noches",
      "Te quiero",
      "Lo siento",
      "Gracias",
      "Perdón"
    );
  }
}

class French extends Language {
  constructor() {
    super(
      "Bonjour",
      "Bonjour",
      "Bonne nuit",
      "Je t'aime",
      "Désolé",
      "Merci",
      "Excusez-moi"
    );
  }
}

class Tagalog extends Language {
  constructor() {
    super(
      "Kamusta",
      "Magandang umaga",
      "Magandang gabi",
      "Mahal kita",
      "Pasensya na",
      "Salamat",
      "Paumanhin"
    );
  }
}

class Nihongo extends Language {
  constructor() {
    super(
      "Konnichiwa",
      "Ohayou gozaimasu",
      "Oyasumi nasai",
      "Aishiteru",
      "Sumimasen",
      "Arigatou gozaimasu",
      "Gomen nasai"
    );
  }
}

class Hangul extends Language {
  constructor() {
    super(
      "Annyeonghaseyo",
      "Annyeonghaseyo",
      "Annyeonghi jumuseyo",
      "Saranghae",
      "Mianhamnida",
      "Gamsahamnida",
      "Silryehabnida"
    );
  }
}

class Italian extends Language {
  constructor() {
    super(
      "Ciao",
      "Buongiorno",
      "Buona notte",
      "Ti amo",
      "Mi dispiace",
      "Grazie",
      "Scusi"
    );
  }
}

export { Spanish, French, Tagalog, Nihongo, Hangul, Italian };
