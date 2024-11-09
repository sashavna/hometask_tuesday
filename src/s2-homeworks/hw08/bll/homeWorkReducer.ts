import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const newArr = [...state]
            return action.payload === 'up' ?  newArr.sort((a,b) => a.name.localeCompare(b.name)) : newArr.sort((a,b) => b.name.localeCompare(a.name))
                // need to fix
        }
        case 'check': {
            return state.filter(u => u.age > 18) // need to fix
        }
        default:
            return state
    }
}

