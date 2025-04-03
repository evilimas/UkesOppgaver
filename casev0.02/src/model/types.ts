interface Candidate {
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
      courseId: number[]
      candidateId: number
      applied: boolean;
      started: boolean;
      startDate: Date;
      endDate: Date;
      semesterId: number;
      completed: boolean;
      quit: boolean;
      paymentAdded: {
        payDate: Date
        amount: number
        balance: number
        payedInFull: boolean
      };
    }
  
interface AppState {
  app: any;
  candidates: Candidate[];
  courses: ICourse[];
}

export type { Candidate, ICourse, AppState, ICourseCandidate };
