import { ReactNode, useEffect, useReducer, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthContext } from './AuthContext';
import { AuthState, authReducer } from './authReducer';
import storeApi from '../../api/storeApi';
import axios from 'axios';


export const AuthProvider = ({ children }:{ children:  ReactNode}) => {

    const [isLoading, setIsLoading] = useState(false);

    const AUTH_INITIAL_STATE: AuthState = {
        status:'ckecking',
        user: null,
        token: null
    }

    const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

    const checkToken = async ( ) => {
        const token = await AsyncStorage.getItem('AUTH_TOKEN');

        if( !token ){
            dispatch({ type:'Logout' });
        }

        try {
            const { data } = await storeApi.get('/auth/user',{
                headers: {
                    Authorization: `Bearer ${ token }`
                }
            });
            
            dispatch({ type:'Login', payload: { user: data.user, token: token! } });
            
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        checkToken();
    }, [])
    
    const login = async (email: string, password: string) => {
        try {
            setIsLoading( true );
            const { data } = await storeApi.post('/auth/login', { email, password });
            
            const token = JSON.stringify(data.token);
            await AsyncStorage.setItem('AUTH_TOKEN', token);
            dispatch({ type: 'Login', payload: { token: data.token, user: data.user } });

            setIsLoading( false )

        } catch (error) {
            if ( axios.isAxiosError(error) ){
                // showToast( 'error', 'Credenciales incorrectas' )
            }
        } finally {
            setIsLoading( false )
        }
    }

    const logout = async (email: string, password: string) => {
        
    }

    return (
        <AuthContext.Provider
            value={{
                ...state,

                // METHODS
                login,
                logout
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}