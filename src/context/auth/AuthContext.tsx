import { createContext } from 'react'
import { IUser } from '../../interfaces/user';

interface ContextProps {
    status: 'ckecking' | 'authenticated' | 'not-authenticated',
    user?: IUser | null,
    token?: string | null,

    login: (email: string, password: string) => Promise<void>
    logout: (email: string, password: string) => Promise<void>
}

export const AuthContext = createContext( {} as ContextProps );