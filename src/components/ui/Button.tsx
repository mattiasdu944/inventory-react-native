import { Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ReactNode } from 'react';

interface Props {
    children: string;
    onPress: () => void;
}

export const Button = ({ children, onPress }: Props) => {
    
    return (
        <TouchableOpacity onPress={ onPress } activeOpacity={0.9}>
            <LinearGradient
                style={ styles.button }
                colors={['#603afa', '#746ffe']}
                start={{ x: 0.1, y: 0.2 }}
            >
                <Text style={ styles.text }>{ children }</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        color: '#fff',
    },
    button: {
        padding: 10,
        borderRadius: 10,
    }

});