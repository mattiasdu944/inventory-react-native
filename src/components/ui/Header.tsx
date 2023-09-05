import { View, Text, Image } from 'react-native';

import { GLOBAL } from '../../styles/global';
import { useAuth } from '../../hooks';

export const Header = () => {

    const { user } = useAuth();
    console.log({user});
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 }}>
            <View>
                <Text style={ GLOBAL.title }>Bienvenido</Text>
                <Text style={ GLOBAL.subTitle }>{ user?.name }</Text>
            </View>
            <Image
                source={{ uri: user?.image }}
                style={{ width:50, height: 50, borderWidth: 1, borderRadius: 100, borderColor:'rgba(0,0,0,0.15)' }}
            />
        </View>
    )
}
