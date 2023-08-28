import { View, TextInput, StyleSheet } from 'react-native';

import { GLOBAL } from '../../styles/global';
import { COLORS } from '../../constants/colors';

import Ionicons from '@expo/vector-icons/Ionicons';


export const SearchProductInput = () => {
    return (
        <View style={ GLOBAL.container }>
            <View style={[ GLOBAL.textInput, , styles.searchContainer ]}>
                <TextInput
                    style={{ maxWidth:'100%' }}
                    placeholder='Buscar producto'
                    cursorColor={ COLORS.primary }
                    selectionColor={ COLORS.primary }
                    
                />
                <Ionicons name='search-outline' size={20}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        maxWidth: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
})