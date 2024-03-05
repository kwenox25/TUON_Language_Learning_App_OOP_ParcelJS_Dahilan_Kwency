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

// Add more language subclasses as needed

export { Spanish, French, Tagalog };
