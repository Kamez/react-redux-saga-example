import { AGE_UP, AGE_DOWN } from "./types";

export const ageUp = (age) => {
    console.log(`up: ${age}`)
    return {
        type: AGE_UP,
        payload: age
    }
}

export const ageDown = (age) => {
    console.log(`down: ${age}`)
    return {
        type: AGE_DOWN,
        payload: age
    }
}