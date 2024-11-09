const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChangeThemeIdType): {themeId: number} => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
        return {...state, themeId: action.id}

        default:
            return state
    }
}

type ChangeThemeIdType = ReturnType<typeof changeThemeId>

export const changeThemeId = (id: number): { type: 'SET_THEME_ID'; id: number } => ({ type: 'SET_THEME_ID', id } ) // fix any
