import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export const Blob = () => {
    return (
        <View>
            <LinearGradient
                style={ styles.blob }
                colors={['#603afa', '#746ffe']}
                start={{ x: 0.1, y: 0.2 }}
            >
            </LinearGradient>
        </View>
    )
}


const styles = StyleSheet.create({
    blob: {
        height: 600,
        top: -100,
        position: 'absolute',
        width: '100%',
        borderRadius: 50,
        shadowColor: "rgba(70,79,229, 1)",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity:  0.20,
        shadowRadius: 5.62,
        elevation: 8,
        zIndex: 0
    }
});