import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Icon } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'grey'


  },
  text: {
    width: 200,
    borderWidth: 1,
    borderColor: 'gray',


  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between'


  },

  textbig: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'blue'
  }

})



export default class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      text: '',
      shoplist: []
    }

  };

  historySaved = (x) => {
    this.setState({shoplist: [...this.state.shoplist, {key: this.state.text}], text: ''});
  }

  

  render() {
    return (
      <View style={styles.container}>
     
      <View>
          <TextInput style={styles.text} onChangeText={(text) => this.setState({text})} />
        </View>
        <View style={styles.button}>
          <Button onPress={() => {
            const x = this.state.text;
            this.historySaved(x);

          }} title="Add" />
          </View>

          <View style={styles.button}>
          <Button onPress={() => {
         this.setState({shoplist: []})

          }} title="Clear All" />
          </View>
        
        <View>
          <Text style={styles.textbig}>Shopping List</Text>
          <FlatList data={this.state.shoplist} renderItem={({ item }) =>
            <Text>{item.key}</Text>} />
        </View>
   </View>
    );
  }


}
