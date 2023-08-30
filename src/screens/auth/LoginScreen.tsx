import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { GLOBAL } from '../../styles/global';
import { Blob, LoginForm } from '../../components';

export const LoginScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, position:'relative' }}>
            <Blob/>
            <View style={{...GLOBAL.container, flex:1, justifyContent: 'center', alignItems:'center' }}>
                <Text style={{...GLOBAL.title, color:'#fff', fontSize: 32 }}>
                    Innova Inventory
                </Text>
                <Text style={{...GLOBAL.text, color:'#fff', marginBottom: 50 }}>
                    Gestiona y controla tus productos 
                </Text>
                
                <LoginForm/>
            </View>


        </SafeAreaView>
    )
}


