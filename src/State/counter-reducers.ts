


type ActionsType = IncActionType


export const counterReducer = (state: number , action: ActionsType): number => {
    switch (action.type) {
        case'INC': {
             // let state = action.counter + 1
            return state + 1
        }
        default: return state
    }
}



export type IncActionType = ReturnType<typeof incAC>

export const incAC = (counter:number) => {
    return { type: 'INC', counter}
}