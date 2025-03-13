type numberOrNull = number | null;

interface State {
    numbers: numberOrNull[];
    count: number;
}

export type {State, numberOrNull};