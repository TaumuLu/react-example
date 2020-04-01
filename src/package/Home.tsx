import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { IScreen, IRouter } from '../types/navigation'

interface IPackageList {
  name: string
  router?: string
}

export const packageList: IPackageList[] = []

export const register = (router: IRouter) => {
  packageList.push(router)
}

export default (props: IScreen) => {
  const { navigation } = props
  navigation.setOptions({ headerTitle: 'Package List' })

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}
    >
      <ScrollView style={{ padding: 20 }}>
        {packageList.map(({ name }) => {
          return (
            <TouchableOpacity
              key={name}
              style={{ paddingVertical: 12 }}
              onPress={() => navigation.push(name)}
            >
              <Text
                style={{
                  fontSize: 22,
                  textAlign: 'center',
                  color: '#0366d6',
                  fontWeight: 'bold',
                }}
              >
                {name}
              </Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </View>
  )
}
