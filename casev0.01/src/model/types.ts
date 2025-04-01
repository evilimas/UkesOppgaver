interface ICandidate {
    id: number
    name: string
    emailPriv: string 
    emailGet?: string 
    phoneNumber?: string
    discordName?: string
    profilPicture?: string
    events: [{
        course: string,
        applied: Date
        started: Date
        completed: Date | boolean
        quit: boolean 
        paymentAdded: number
    }]
}
const defaults: Pick<ICandidate, 'emailGet'> = {
    emailGet: ''
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

export type { ICandidate, Course, AppState}