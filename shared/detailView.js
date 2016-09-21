import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  TouchableHighlight,
  View,
  Alert,
  Switch
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import myKey from '../MEETUPAPIKEY.js'


class DetailView extends Component{
  constructor(props) {
    super(props);
       

    // The default state for the Switch UI element
    this.state = {
      falseSwitchIsOn: false
    }
  }

  async componentDidMount() {
   await this.updateTitle();
     
  }

  updateMyRSVP(){
    const urlForfetchRSVSP = `https://api.meetup.com/${this.props.navigationState.data.group.urlname}/events/${this.props.navigationState.data.id}/rsvps?sign=true&key=${myKey}&response=yes`
    console.log(urlForfetchRSVSP);
    this.setState({falseSwitchIsOn: true})
    return fetch(urlForfetchRSVSP).then(res => res.json());
  }

  updateTitle() {
    // Updating the "Title" of the View. 
    // "Title" is the text on the Top Bar.
    Actions.refresh({title: this.props.navigationState.data.name});
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

        <View>
        <Text>My current RSVP:</Text>
        <Switch
          onValueChange={(value) => this.updateMyRSVP() }
          style={{marginBottom: 10}}
          value={this.state.falseSwitchIsOn} />
        
        </View>
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
