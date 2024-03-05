class Spanish {
  constructor() {
    this.translations = {
      hi: "Hola",
      goodMorning: "Buenos días",
      goodNight: "Buenas noches",
      iLoveYou: "Te quiero",
      sorry: "Lo siento",
      thankyou: "Gracias",
      excuseMe: "Perdón",
    };
  }

  translate(key) {
    if (this.translations[key]) {
      return this.translations[key];
    } else {
      return `Translation not available for "${key}" in Spanish`;
    }
  }
}

class French extends Spanish {
  constructor() {
    super();
    this.translations = {
      hi: "Bonjour",
      goodMorning: "Bonjour",
      goodNight: "Bonne nuit",
      iLoveYou: "Je t'aime",
      sorry: "Désolé",
      thankyou: "Merci",
      excuseMe: "Excusez-moi",
    };
  }
}

class Tagalog extends Spanish {
  constructor() {
    super();
    this.translations = {
      hi: "Kamusta",
      goodMorning: "Magandang umaga",
      goodNight: "Magandang gabi",
      iLoveYou: "Mahal kita",
      sorry: "Pasensya na",
      thankyou: "Salamat",
      excuseMe: "Paumanhin",
    };
  }
}

class Nihongo extends Spanish {
  constructor() {
    super();
    this.translations = {
      hi: "Konnichiwa",
      goodMorning: "Ohayou gozaimasu",
      goodNight: "Oyasumi nasai",
      iLoveYou: "Aishiteru",
      sorry: "Sumimasen",
      thankyou: "Arigatou gozaimasu",
      excuseMe: "Gomen nasai",
    };
  }
}

class Hangul extends Spanish {
  constructor() {
    super();
    this.translations = {
      hi: "Annyeonghaseyo",
      goodMorning: "Annyeonghaseyo",
      goodNight: "Annyeonghi jumuseyo",
      iLoveYou: "Saranghae",
      sorry: "Mianhamnida",
      thankyou: "Gamsahamnida",
      excuseMe: "Silryehabnida",
    };
  }
}

class Italian extends Spanish {
  constructor() {
    super();
    this.translations = {
      hi: "Ciao",
      goodMorning: "Buongiorno",
      goodNight: "Buona notte",
      iLoveYou: "Ti amo",
      sorry: "Mi dispiace",
      thankyou: "Grazie",
      excuseMe: "Scusi",
    };
  }
}

export { Spanish, French, Tagalog, Nihongo, Hangul, Italian };
