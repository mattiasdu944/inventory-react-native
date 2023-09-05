import React from 'react'
import { View, ActivityIndicator } from 'react-native';
import { COLORS } from '../../constants/colors';

export const LoadingView = () => {
  return (
    <View>
        <ActivityIndicator color={COLORS.primary} size={ 30 }/>
    </View>
  )
}
