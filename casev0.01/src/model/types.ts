interface ICandidate {
  id: number;
  name: string;
  emailPriv: string;
  emailGet?: string;
  phoneNumber?: string;
  discordName?: string;
  profilPicture?: string;
  courses: [
    {
      course: string;
      applied: boolean;
      started: boolean;
      startDate: Date;
      endDate: Date;
      semesterId: number;
      completed: boolean;
      quit: boolean;
      paymentAdded: number;
    }
  ];
}
// const defaults: Pick<ICandidate, 'emailGet'> = {
//     emailGet: ''
// }
interface Course {
  id: number;
  name: string;
  event: {};
}

interface AppState {
  app: any;
  candidates: ICandidate[];
  courses: Course[];
}
interface ISemester {
  id: number;
  name: string;
  fromDate: Date;
  toDate: Date;
}
export type { ICandidate, Course, AppState, ISemester };
