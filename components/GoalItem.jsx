import { StyleSheet, View, Text, Pressable } from "react-native"

const GoalItem = ({ id, text, onDeleteItem }) =>{
  return(
    <View style={styles.goalItem}>
      <Pressable 
        android_ripple={{ color: '#210644' }}
        onPress={onDeleteItem.bind(this, id)} 
        style={({pressed})=> { pressed && styles.pressedItem}}>
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 4,
    backgroundColor: '#5E0ACC',
  },
  goalText: {
    padding: 8,
    color: 'white'
  },
  pressedItem: {
    opacity: 0.5
  }
})

export default GoalItem