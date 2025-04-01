interface Candidate {
    id: number
    name: string
    event: {}
}

interface Course {
    id: number
    name: string
    event: {}

}

interface AppState {
    app: any
    candidates: Candidate[]
    courses: Course[]
}

export type { Candidate, Course, AppState}