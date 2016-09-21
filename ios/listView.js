import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  TouchableHighlight,
  View
} from 'react-native';

import {Actions} from 'react-native-router-flux'
import myApi from '../api';



class MyListView extends Component{
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2'])
    };
    this.myData=this.myData.bind(this);
    this.myData();
  }

  myData() {
    myApi.then(res => {
      console.log({test:res});

      console.log(this.state);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(res)
      })
      return res;
    })
  }



  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) =><TouchableHighlight onPress={()=>{Actions.detailEvent({data: rowData})}} >
            <Text style={styles.meetText}>{rowData.name}</Text></TouchableHighlight>}
        />

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
  meetText: {
    fontSize: 15
  }
})

export default MyListView;
