
import { GLOBAL } from '../../styles/global';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, TouchableOpacity } from 'react-native';

export const FloatingActionButton = () => {
    return (
        <View style={ GLOBAL.floatingActionButton }>
            <TouchableOpacity >
                <Ionicons name='add' color='#ffffff' size={25}/>
            </TouchableOpacity>
        </View>
    )
}

