import types from './types';
export default {
  app: {},
  candidates: [
    {
      id: 1,
      name: 'Per Spelmann',
      emailPriv: 'per@mail.no',
      emailGet: 'per.spelmann@getacademy.no',
      phoneNumber: '',
      discordName: 'per.spelmann',
      profilPicture: '../img/per_spelmann.png',
      courses: [
        {
          course: 'FrontEnd',
          applied: 2025 - 0o1 - 0o1,
          started: 2025 - 0o1 - 0o2,
          semester: '',
          completed: false,
          quit: false,
          paymentAdded: 0,
        },
        {
          course: 'StartIT',
          applied: 2024 - 0o1 - 0o1,
          started: 2024 - 0o1 - 0o2,
          completed: true,
          quit: false,
          paymentAdded: 55000,
        },
      ],
    },
    {
      id: 2,
      name: 'Petter Nordmann',
      emailPriv: 'petter@mail.no',
      emailGet: 'petter.nordmann@getacademy.no',
      phoneNumber: '000 00 000',
      discordName: 'petter.nordmann',
      profilPicture: '../img/roll.jpg',
      courses: {
        course: 'FrontEnd',
        applied: 2025 - 0o1 - 0o1,
        started: 2025 - 0o1 - 0o2,
        semester: '',
        completed: false,
        quit: false,
        paymentAdded: 0,
      },
    },
    {
      id: 3,
      name: 'Kari Spelmann',
      emailPriv: 'kari@mail.no',
      emailGet: 'kari.spelmann@getacademy.no',
      phoneNumber: '000 00 000',
      discordName: 'kari.spelmann',
      profilPicture: '../img/per_spelmann.png',
      courses: [{
        course: 'FrontEnd',
        applied: 2025 - 0o1 - 0o1,
        started: 2025 - 0o1 - 0o2,
        semester: 'spring2025',
        completed: false,
        quit: false,
        paymentAdded: 0,
      },
      {
        course: 'Fagskolen',
        applied: 2024 - 0o1 - 0o1,
        startDate: 2024 - 0o1 - 0o2,
        finishDate: "2024-12-24",
        semester: 'fall2024',
        completed: true,
        quit: false,
        paymentAdded: 0,
      }],
    },
    {
      id: 4,
      name: 'Jon Jonasen',
      emailPriv: 'jon@mail.no',
      emailGet: 'jon.spelmann@getacademy.no',
      phoneNumber: '000 00 000',
      discordName: 'kari.spelmann',
      profilPicture: '../img/per_spelmann.png',
      courses: {
        course: 'FrontEnd',
        applied: 2025 - 0o1 - 0o1,
        started: 2025 - 0o1 - 0o2,
        semester: '',
        completed: false,
        quit: false,
        paymentAdded: 0,
      },
    },
    {
      id: 5,
      name: 'Don Donasen',
      emailPriv: 'don@mail.no',
      emailGet: 'don.spelmann@getacademy.no',
      phoneNumber: '000 00 000',
      discordName: 'don.spelmann',
      profilPicture: '../img/roll.png',
      courses: {
        course: 'FrontEnd',
        applied: 2025 - 0o1 - 0o1,
        started: 2025 - 0o1 - 0o2,
        semester: '',
        completed: false,
        quit: false,
        paymentAdded: 0,
      },
    },
  ],
  course: [
    {
      id: 1,
      name: 'StartIT',
      price: 55000,
      startDate: '',
      endDate: '',
    },
    {
      id: 2,
      name: 'FrontEnd',
      price: 55000,
      startDate: '',
      endDate: '',
    },
    {
      id: 3,
      name: 'GetPrepared',
      price: 55000,
      startDate: '',
      endDate: '',
    },
    {
      id: 4,
      name: 'GetIT',
      price: 55000,
      startDate: '',
      endDate: '',
    },
  ],
  semester: [
    {
      id: 1,
      name: 'spring2025',
      fromDato: '20-01-2025',
      toDato: '26-06-2025',
    },
    {
      id: 2,
      name: 'fall2024',
      fromDato: '10-08-2024',
      toDato: '10-01-2025',
    },
  ],
};
