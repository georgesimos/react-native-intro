import React, {useState} from 'react';
import {Alert, View, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
import {uuid} from 'uuidv4';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'milk'},
    {id: uuid(), text: 'eggs'},
    {id: uuid(), text: 'bread'},
    {id: uuid(), text: 'juice'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const addItem = text => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', {text: 'OK'});
    } else {
      setItems(prevItems => [...prevItems, {id: uuid(), text}]);
    }
  };
  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});
export default App;
