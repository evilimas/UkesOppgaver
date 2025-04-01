
export default {
  app: {},
  candidates: [
    {
      id: 1,
      name: "Per Spelmann",
      emailPriv: "per@mail.no",
      emailGet: "per.spelmann@getacademy.no",
      kurs: "FrontEnd",
      kursType: "Fagskole",
      startDato: "2025-08-12",
      sluttdato: null,
      telefonNummer: "000 00 000",
      discordNavn: "per.spelmann",
      profilBilde: "../img/per_spelmann.png",
      events: {
        courses: [],
        applied: new Date(),
        started: false,
        completed: false,
        quit: false,
        paymentAdded: 0,
      }
    },
  ],
  kurs: [
    {
      id: 1,
      navn: "StartIT",
      pris: 55000,
      events: {}
    },
    {
      id: 2,
      navn: "FrontEnd",
      pris: 55000,
      events: {}
    },
  ],
};
