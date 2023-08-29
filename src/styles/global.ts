import { StyleSheet } from 'react-native';
import { FONT, SIZES } from "../constants/typography";

export const GLOBAL = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },

    title: {
        fontFamily: FONT.bold,
        fontSize: SIZES.large
    },

    subTitle: {
        fontFamily: FONT.medium,
        fontSize: SIZES.medium
    },

    text: {
        fontFamily: FONT.regular,
        fontSize: SIZES.small
    },

    textInput: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        width: '100%'
    },

    productList:{
        flexDirection:'row',
        marginTop: 40,
        flexWrap: 'wrap',
        gap: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    cardContainer: {
        shadowColor: "rgba(70,79,229, 0.5)",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity:  0.20,
        shadowRadius: 5.62,
        elevation: 8,
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        width: '45%',
        // alignItems: 'center'
    },

    productCardImage: {
        maxWidth: 125,
        width: '100%',
        height: 125,
        marginBottom: 20,
        marginHorizontal: 'auto'
    }
})