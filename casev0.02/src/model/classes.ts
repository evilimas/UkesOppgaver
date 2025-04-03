import { ICandidate, ICourse, ICourseCandidate } from "./types";

class Candidate implements ICandidate {
  id!: number;
  name!: string;
  emailPriv!: string;
  emailGet?: string;
  phoneNumber?: string;
  discordName?: string;
  profilPicture?: string;

  constructor() {}
  addCandidateToCourse(): CourseCandidate{
    if (this.id){

    }
    return courseCandidate
    

  }
  generateCandidateId() {
    // check ids in use + 1
  }
}

class Course implements ICourse {
  id!: number;
  name!: string;
  startDate!: string;
  endDate!: string;
  price!: number;
  semester!: { name: string; fromDate: string; toDate: string };
}
class CourseCandidate implements ICourseCandidate {
  paymentAdded!: {
    payDate: Date;
    amount: number;
    balance: number;
    payedInFull: boolean;
  };
  courseId!: number[];
  candidateId!: number;
  course!: string;
  applied!: boolean;
  started!: boolean;
  startDate!: Date;
  endDate!: Date;
  semesterId!: number;
  completed!: boolean;
  quit!: boolean;
}

class handleFiles {
  
  checkIfFileExists(file: string){
    if(file){
      this.loadJSONData(file)
  } else {
    createData()
  }
}
loadJSONData(filename: string) {
  const data = import(filename, {
    with: { type: "json" },
  });
  this.checkIfFileExists(json)
  data.Parse()
  return data;
}

 static writeFile(parsedJSON){
    
  }
}

export { Candidate, Course, handleFiles }
