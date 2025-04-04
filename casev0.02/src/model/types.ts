export type Candidate = {
  id: number;
  name: string;
  emailPriv: string;
  emailGet?: string;
  phoneNumber?: string;
  discordName?: string;
  profilPicture?: string;
}

export type Course = {
  id: number;
  name: string;
  startDate: string
  endDate: string
  price: number
  semester: Semester
}

export type Semester = {
  name: string
  fromDate: string
  toDate: string
}
export type CourseCandidate = {
      courseId: number[]
      candidateId: number
      applied: boolean;
      started: boolean;
      startDate: Date;
      endDate: Date;
      semesterId: number;
      completed: boolean;
      quit: boolean;
      paymentAdded: PaymentAdded
    }

export type PaymentAdded = {
  payDate: Date
  amount: number
  balance: number
  payedInFull: boolean
};
  
export interface AppState {
  app: any;
  candidates: Candidate[];
  courses: Course[];
}

