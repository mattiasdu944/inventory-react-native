import { StyleSheet } from 'react-native';
import { FONT, SIZES } from "../constants/typography";

export const GLOBAL = StyleSheet.create({
    // REUSABLES
    container: {
        paddingHorizontal: 20,
        paddingBottom: 10
    },

    title: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge
    },

    subTitle: {
        fontFamily: FONT.medium,
        fontSize: SIZES.medium
    },

    subTitle2: {
        fontFamily: FONT.medium,
        fontSize: SIZES.small
    },

    text: {
        fontFamily: FONT.regular,
        fontSize: SIZES.small
    },

    textInput: {
        fontFamily: FONT.regular,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        width: '100%'
    },

    // AUTHENTICATION
    loginForm: {
        backgroundColor: '#fff',
        width: '100%',
        paddingVertical: 30,
        borderRadius: 8,
        paddingHorizontal: 20,
        shadowColor: "rgba(70,79,229, 0.5)",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity:  0.20,
        shadowRadius: 5.62,
        elevation: 8,
    },

    // PRODUCTS
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
    },

    productCardImage: {
        maxWidth: 125,
        width: '100%',
        height: 125,
        marginBottom: 20,
        marginHorizontal: 'auto'
    },

    // CATEGORIES
    categoryCard: {
        alignItems: 'center',
        flexDirection: 'row',
        columnGap: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 30,
        marginBottom: 20,
        shadowColor: "rgba(70,79,229, 0.5)",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity:  0.20,
        shadowRadius: 5.62,
        elevation: 8,
    },
    categoryCardImage: {
        maxWidth: 80,
        width: '100%',
        height: 80,
    },
})