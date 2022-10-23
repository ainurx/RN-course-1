import { useState } from "react"
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native"

const GoalInput = ({ displayModal, onAddGoal, onCancel }) =>{
  const [enteredGoalText, setEnteredGoalText] = useState('')
  
  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText)
  }

  const onAddGoalHandler = () => {
    onAddGoal(enteredGoalText)
    setEnteredGoalText('')
  }

  return(
    <Modal visible={displayModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.Image  } source={require('../assets/images/goal.png')}/>
        <TextInput 
          style={styles.textInput} 
          placeholder='Your course goal!' 
          value={enteredGoalText}
          onChangeText={goalInputHandler}/>
        <View style={ styles.buttonContainer }>
          <View style={ styles.button }>
            <Button title='Cancel' onPress={onCancel} color="#F31282"/>
          </View>
          <View style={ styles.button }>
            <Button title='Add Goal' onPress={onAddGoalHandler} color="#B180F0"/>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#311B6B'
  },
  Image: {
    width: 100,
    height: 100,
    margin: 8
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#E4D0FF',
    backgroundColor: '#E4D0FF',
    color: '#120438',
    borderRadius: 6,
    padding: 16,
    width: '100%',
    padding: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8
  }
})

export default GoalInput