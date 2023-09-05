import React from 'react'
import { View, ActivityIndicator } from 'react-native';
import { COLORS } from '../../constants/colors';

export const LoadingView = () => {
  return (
    <View style={{ flex: 1, justifyContent:'center' }}>
        <ActivityIndicator size={ 60 } color={ COLORS.primary }/>
    </View>
  )
}
