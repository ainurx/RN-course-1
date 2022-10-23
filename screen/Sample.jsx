import { StyleSheet, View, Text } from 'react-native'

function Sample() {

  return (
    <View style={{flexDirection: 'row', backgroundColor: '#ededed', width: '80%', height: 300, justifyContent: 'space-between', alignItems: 'stretch'}}>
      <View style={[styles.boxContainer, styles.bgRed]}>
        <Text>1</Text>
      </View>
      <View style={[styles.boxContainer, styles.bgBlue]}>
        <Text>2</Text>
      </View>
      <View style={[styles.boxContainer, styles.bgGreen]}>
        <Text>3</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  bgRed: {
    backgroundColor: 'red'
  }, 
  bgBlue: {
    backgroundColor: 'blue'
  },
  bgGreen: {
    backgroundColor: 'green'
  },
  boxContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Sample