import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { IScreen } from '../types/navigation'
// import { createScreen } from '../navigation'

export default (props: IScreen) => {
  const { navigation } = props

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ textAlign: 'center', fontSize: 18, marginBottom: 20 }}>
        Home Screen
      </Text>
      <TouchableOpacity onPress={() => navigation.push('Sccond')}>
        <Text>go to second</Text>
      </TouchableOpacity>
    </View>
  )
}
