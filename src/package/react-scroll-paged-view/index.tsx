import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import ScrollPagedView, { ViewPaged } from 'react-scroll-paged-view'
import Style from './style'
import InsideScrollView from './scrollView'

export default class App extends Component {
  state = {
    pageLists: ['blue', 'green', 'red'],
  }

  _renderTabBar = ({ activeTab, goToPage }) => {
    const { pageLists } = this.state
    return (
      <View style={Style.tabBarContainer}>
        {pageLists.map((value, index) => {
          return (
            <TouchableOpacity
              key={value}
              style={{ flex: 1 }}
              onPress={() => goToPage(index)}
            >
              <View
                style={[
                  Style.tabBarItem,
                  activeTab === index ? { borderColor: value } : {},
                ]}
              >
                <Text
                  style={[
                    Style.tabBarItemText,
                    activeTab === index ? { color: value } : {},
                  ]}
                >
                  {value}
                </Text>
              </View>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }

  _renderDot = ({ activeTab, goToPage }) => {
    const { pageLists } = this.state
    return (
      <View style={Style.dotContainer}>
        {pageLists.map((value, index) => {
          return (
            <TouchableOpacity
              key={value}
              style={{ flex: 1 }}
              onPress={() => goToPage(index)}
            >
              <View style={Style.tabBarItem}>
                <View
                  style={[
                    Style.dotItemView,
                    activeTab === index ? { backgroundColor: 'white' } : {},
                  ]}
                />
              </View>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }

  _onChange = (currentPage, prevPage) => {
    const { pageLists } = this.state
    const { length } = pageLists

    if (currentPage + 1 === length) {
      this.setState((prevState) => {
        return {
          pageLists: prevState.pageLists.concat([currentPage]),
        }
      })
    }
  }

  render() {
    const { pageLists } = this.state
    const WrapView = ScrollPagedView
    // const WrapView = ViewPaged

    return (
      <View style={Style.container}>
        <WrapView
          // onChange={this._onChange}
          // onResponder={this._onResponder}
          // renderHeader={this._renderTabBar}
          // renderFooter={this._renderDot}
          // tabBarPosition='top'
          // hasAnimation={false}
          // initialPage={0}
          isMovingRender
          // vertical={false}
          // initialPage={1}
          // infinite
          // locked
          // autoPlay
        >
          {/* <View style={[Style.pageView, { backgroundColor: 'black' }]}>
            <Text style={Style.text}>head</Text>
            <Text style={Style.textIndex}>page {0}</Text>
            <Text style={Style.text}>foot</Text>
          </View> */}
          {pageLists.map((_val, ind) => {
            const styleInd = ind % 3
            return (
              <InsideScrollView
                key={ind}
                text={ind + 1}
                style={Style[`pageItem${styleInd}`]}
              />
            )
          })}
        </WrapView>
      </View>
    )
  }
}
