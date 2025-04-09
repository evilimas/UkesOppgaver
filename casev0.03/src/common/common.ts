export function getEventFromCourseCandidateEvent(id: string,) {
    const events = candidate.id;
     let eventFound = events.find((x) => x.candidateId == id);
     return /*HTML*/ `${eventFound?.courseId} ${eventFound?.eventType}`;
   }