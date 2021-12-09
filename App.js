import React, {useState} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard} from 'react-native';
import Item from './components/Item';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems,task])
    setTask(null);
  }

  const completeItem = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }


  return (
    <View style={styles.container}>
      <View style={styles.tasks}>
        <Text style={styles.title}>My Tasks</Text>
        <View style={styles.items}>
          {/* items here */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={()=> completeItem(index)}>
                  <Item text={item} />
                </TouchableOpacity>
              )              
            })
          }
        </View>
      </View>

      {/* Add a task */}
      <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "height" : "padding"}
        style={styles.writeTaskWraper}>
        <TextInput style={styles.input} placeholder={'Add a task'} value={task} onChangeText={text => setTask(text)}/>

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cee0df',
  },

  tasks: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },

  items: {
    marginTop: 20,
  },

  writeTaskWraper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    
  },

  input: {
    padddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#e3f3ff',
    borderWidth: 1,
    width: 250,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,  
    shadowRadius: 4.65,
    elevation: 10,
  },

  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#e3f3ff',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 10,
  },
});
