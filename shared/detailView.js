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


  removeHtml(input){
    return input;
  }



  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>{this.props.data.name}</Text>
        <Text>{this.removeHtml(this.props.data.description)}</Text>
        <TouchableHighlight onPress={()=>{alert("SEND ...")}}>
          <Text>
                        RSVP
          </Text>
        </TouchableHighlight>
      </View>

    )
  }
}

var styles = StyleSheet.create({
  container: {
    marginTop: 40+40,
    flex: 1,
    alignItems: 'center'
  },
  heading: {
    fontSize: 30
  }
})

export default DetailView;
