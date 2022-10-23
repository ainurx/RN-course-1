import { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem'

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([])

  const startAddGoalHandler = () => setModalIsVisible(true)

  const endAddGoalHandler = () => setModalIsVisible(false)

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      { text: enteredGoalText, id: Math.random().toString()}
    ])
    setModalIsVisible(false)
  }

  const deleteGoalHandler = (id) => {
    setCourseGoals(currentGoals => currentGoals.filter((goal)=> goal.id !== id))
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button 
          title="Add New Goal"
          color="#A065AC"
          onPress={startAddGoalHandler}
        />
        <GoalInput 
          displayModal={modalIsVisible} 
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}/>
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            keyExtractor={(item)=> item.id}
            renderItem={(itemData)=> <GoalItem id={itemData.item.id} text={itemData.item.text} onDeleteItem={deleteGoalHandler}/>}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5
  }
});
