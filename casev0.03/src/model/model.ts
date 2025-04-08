import { AppState, CandidateUpdateEvent } from './types';
import observableFactory from './observable';

const INITIAL_STATE: AppState = {
  candidateUpdateEvents: [
    {
      id: '1',
      name: 'Per Spelmann',
      emailPriv: 'per@mail.no',
      emailGet: 'per.spelmann@getacademy.no',
      phoneNumber: '',
      discordName: 'per.spelmann',
    },
    {
      id: '2',
      name: 'Petter Nordmann',
      emailPriv: 'petter@mail.no',
      emailGet: 'petter.nordmann@getacademy.no',
      phoneNumber: '000 00 000',
      discordName: 'petter.nordmann',
    },
    {
      id: '3',
      name: 'Kari Spelmann',
      emailPriv: 'kari@mail.no',
      emailGet: 'kari.spelmann@getacademy.no',
      phoneNumber: '000 00 000',
      discordName: 'kari.spelmann',
    },
    {
      id: '4',
      name: 'Jon Jonasen',
      emailPriv: 'jon@mail.no',
      emailGet: 'jon.spelmann@getacademy.no',
      phoneNumber: '000 00 000',
      discordName: 'kari.spelmann',
    },
    {
      id: '5',
      name: 'Don Donasen',
      emailPriv: 'don@mail.no',
      emailGet: 'don.spelmann@getacademy.no',
      phoneNumber: '000 00 000',
      discordName: 'don.spelmann',
    },
  ],
  courseAddedEvents: [
    {
      id: '1',
      name: 'StartIT',
      price: 55000,
      startDate: new Date('2025-01-11'),
      endDate: new Date('2025-01-11'),
    },
    {
      id: '2',
      name: 'FrontEnd',
      price: 55000,
      startDate: new Date('2025-01-11'),
      endDate: new Date('2025-01-11'),
    },
    {
      id: '3',
      name: 'GetPrepared',
      price: 55000,
      startDate: new Date('2025-01-11'),
      endDate: new Date('2025-01-11'),
    },
    {
      id: '4',
      name: 'GetIT',
      price: 55000,
      startDate: new Date('2025-01-11'),
      endDate: new Date('2025-01-11'),
    },
  ],
  courseCandidateUpdateEvents: [
    {
      courseId: '4',
      candidateId: '1',
      date: new Date('2025-01-01'),
      eventType: 'applied',
      amountPayed: 0,
    },
    {
      courseId: '4',
      candidateId: '2',
      date: new Date('2025-01-01'),
      eventType: 'approved',
      amountPayed: 0,
    },
  ],
};

export default (initialState: AppState = INITIAL_STATE) => {
  const { state, addChangeListener } = observableFactory(initialState);

  const deleteCandidate = (id: string) => {
    state.candidateUpdateEvents = state.candidateUpdateEvents.filter((candidate : CandidateUpdateEvent) => candidate.id !== id);
  }

  return { addChangeListener, deleteCandidate };
}
