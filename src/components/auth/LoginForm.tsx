import React from 'react'
import { View, TextInput, Text } from 'react-native';
import { GLOBAL } from '../../styles/global';
import { Button } from '../ui/Button';
import { useState } from 'react';
import { COLORS } from '../../constants/colors';

export const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        console.log({email, password });
    };

    return (
        <View style={ GLOBAL.loginForm }>
            
            <Text style={{...GLOBAL.subTitle2, marginBottom:5 }}>Correo: </Text>
            <TextInput
                onChangeText={newText => setEmail(newText)}
                placeholder='correo@gmail.com'
                style={{...GLOBAL.textInput, marginBottom: 20 }}
            />

            <Text style={{...GLOBAL.subTitle2, marginBottom:5 }}>Contraseña: </Text>
            <TextInput
                onChangeText={newText => setPassword(newText)}
                placeholder='********'
                style={{...GLOBAL.textInput, marginBottom: 30 }}
            
                secureTextEntry
            />

            <Button onPress={ handleSubmit }>Iniciar sesion</Button>
            <Text style={{ color: COLORS.primary, marginTop: 20, textAlign:'center' }}>Contactar con soporte</Text>

        </View>
    )
}
