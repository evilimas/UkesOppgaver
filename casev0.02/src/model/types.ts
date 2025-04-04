// export type Semester = {
//   name: string;
//   fromDate: string;
//   toDate: string;
// };

// export type PaymentAdded = {
//   payDate: Date;
//   amount: number;
//   balance: number;
//   payedInFull: boolean;
// };

export interface AppState {
  candidateUpdateEvents: CandidateUpdateEvent[];
  courseAddedEvents: CourseUpdateEvent[];
  courseCandidateUpdateEvents: CourseCandidateEvent[];
}

export type CandidateUpdateEvent = {
  id: string;
  name: string;
  emailPriv: string;
  emailGet?: string;
  phoneNumber?: string;
  discordName?: string;
};

export type CourseUpdateEvent = {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  price: number;
};
export type CourseCandidateEventType =
  | "applied"
  | "approved"
  | "started"
  | "droppedOut"
  | "completed"
  | PartialPayment;
type PartialPayment = number;

export interface CourseCandidateEvent {
  courseId: string;
  candidateId: string;
  date: Date;
  eventType: CourseCandidateEventType;
  amountPayed?: number;
}
