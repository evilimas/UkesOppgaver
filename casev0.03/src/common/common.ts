import { CandidateUpdateEvent, CourseCandidateEvent } from "../model/types";

export default (event: CourseCandidateEvent, candidates: CandidateUpdateEvent[]) => {
    const candidateFound = candidates.find((x) => x.id == event.candidateId)
    return `${candidateFound?.name}`
}