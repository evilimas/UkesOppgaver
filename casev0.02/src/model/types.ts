interface ICandidate {
  id: number;
  name: string;
  emailPriv: string;
  emailGet?: string;
  phoneNumber?: string;
  discordName?: string;
  profilPicture?: string;
}

interface ICourse {
  id: number;
  name: string;
  startDate: string
  endDate: string
  price: number
  semester: {
    name: string
    fromDate: string
    toDate: string
  }
}
interface ICourseCandidate {
      courseId: number
      candidateId: number
      course: string;
      applied: boolean;
      started: boolean;
      startDate: Date;
      endDate: Date;
      semesterId: number;
      completed: boolean;
      quit: boolean;
      paymentAdded: number | boolean;
    }
  
interface AppState {
  app: any;
  candidates: ICandidate[];
  courses: ICourse[];
}

export type { ICandidate, ICourse, AppState, ICourseCandidate };
