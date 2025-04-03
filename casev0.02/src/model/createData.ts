import { Candidate, Course, handleFiles } from "./classes";

export default class dataFactory{
  Candidates: Array<Candidate> = [];
  Courses: Array<Course> = [];

  constructor() {   
  }
  CreateData(){
    let candidates = this.Candidates
    let courses = this.Courses
    candidates.push(new Candidate())
    candidates.push(new Candidate())
    candidates.push(new Candidate())
    candidates.push(new Candidate())
    candidates.push(new Candidate())
    courses.push(new Course())
    courses.push(new Course())
    courses.push(new Course())
    courses.push(new Course())

    return candidates && courses
  }
  Run(){
    handleFiles.writeFile
  }
}


