import React, { PureComponent } from 'react'
import { ScrollView, View, Text } from 'react-native'
import PropTypes from 'prop-types'

import Style from './style'

export default class InsideScrollView extends PureComponent {
  static contextTypes = {
    ScrollView: PropTypes.func,
  }

  render() {
    const WrapView = this.context.ScrollView || ScrollView
    const { text, style } = this.props

    return (
      <View style={{ flex: 1 }}>
        <WrapView style={{ flex: 1 }}>
          <View style={[Style.pageView, style]}>
            <Text style={Style.text}>head</Text>
            <Text style={Style.textIndex}>page {text}</Text>
            <Text style={Style.text}>foot</Text>
          </View>
        </WrapView>
      </View>
    )
  }
}
