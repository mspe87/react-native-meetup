import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  TouchableHighlight,
  View
} from 'react-native';





class DetailView extends Component{
  constructor(props) {
    super(props);
    console.log(props);
  }






  render() {
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(this.props.data)}</Text>
      </View>

    )
  }
}

var styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    alignItems: 'center'
  },
})

export default DetailView;
