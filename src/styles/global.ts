import { StyleSheet } from 'react-native';


export const GLOBAL = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },


    textInput: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        width: '100%'
    },

    productCardImage: {
        maxWidth: 200,
        width: '100%',
        height: 200
    }
})