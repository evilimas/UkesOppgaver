import { Candidate, Course } from "./types";

// class Candidate implements Candidate {
//   id!: number;
//   name!: string;
//   emailPriv!: string;
//   emailGet?: string;
//   phoneNumber?: string;
//   discordName?: string;
//   profilPicture?: string;

//   constructor() {}
//   addCandidateToCourse(): CourseCandidate{
//     if (this.id){

//     }
//     return courseCandidate

//   }
//   generateCandidateId() {
//     // check ids in use + 1
//   }
// }

// class Course implements Course {
//   id!: number;
//   name!: string;
//   startDate!: string;
//   endDate!: string;
//   price!: number;
//   semester!: { name: string; fromDate: string; toDate: string };
// }
// class CourseCandidate implements CourseCandidate {
//   paymentAdded!: {
//     payDate: Date;
//     amount: number;
//     balance: number;
//     payedInFull: boolean;
//   };
//   courseId!: number[];
//   candidateId!: number;
//   course!: string;
//   applied!: boolean;
//   started!: boolean;
//   startDate!: Date;
//   endDate!: Date;
//   semesterId!: number;
//   completed!: boolean;
//   quit!: boolean;
// }

export default (filename: string) => {
  if (filename) {
    const data = import(filename, {
      with: { type: "json" },
    });
    // data.Parse();
    return data;
  } else {
    // createData();
  }
};
