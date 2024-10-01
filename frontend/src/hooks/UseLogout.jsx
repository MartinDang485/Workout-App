import { useAuthContext } from './useAuthContext'

export const UseLogout = () => {
    const { dispatch } = useAuthContext()

    const logout = () => {
        //Remove user from local storage
        localStorage.removeItem('user')
        //Change auth state
        dispatch({type: 'LOGOUT'})
    }
    return { logout }
}