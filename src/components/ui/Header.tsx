import { View, Text, Image } from 'react-native';

import { GLOBAL } from '../../styles/global';

export const Header = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 }}>
            <View>
                <Text style={ GLOBAL.title }>Bienvenido</Text>
                <Text style={ GLOBAL.subTitle }>Innova Code</Text>
            </View>
            <Image
                source={require( '../../../assets/profile.png') }
                style={{ width:50, height: 50, borderWidth: 1, borderRadius: 100, borderColor:'rgba(0,0,0,0.15)' }}
            />
        </View>
    )
}
