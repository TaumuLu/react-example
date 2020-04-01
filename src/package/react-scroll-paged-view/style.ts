import { StyleSheet, Dimensions, Platform, NativeModules } from 'react-native'

let { height } = Dimensions.get('window')
const { width } = Dimensions.get('window')

if (Platform.OS === 'android') {
  height -= NativeModules.StatusBarManager.HEIGHT
}

export default StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  pageView: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 40,
    color: 'white',
  },
  textIndex: {
    fontSize: 80,
    color: 'white',
  },

  pageItem0: {
    backgroundColor: 'blue',
    height: height * 1.5,
    width,
  },
  pageItem1: {
    backgroundColor: 'green',
    height: height * 2,
    width,
  },
  pageItem2: {
    backgroundColor: 'red',
    height,
    width: width * 2,
  },

  tabBarContainer: {
    minWidth: 50,
    minHeight: 50,
    backgroundColor: 'white',
    borderColor: '#000',
    flexDirection: 'row',
  },
  tabBarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 4,
    borderColor: 'transparent',
  },
  tabBarItemText: {
    fontSize: 18,
    color: 'gray',
  },

  dotContainer: {
    position: 'absolute',
    bottom: 80,
    left: 100,
    right: 100,
    height: 10,
    flexDirection: 'row',
  },
  dotItemView: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
})
