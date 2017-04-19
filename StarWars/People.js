import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ActivityIndicator,
  FlatList,
  Modal,
  Picker
} from 'react-native'

import Container from './Container'
import HomeWorld from './Homeworld'

export default class People extends Component {
  static navigationOptions = {
    header: {
      title: 'People',
      style: {
        borderBottomWidth: 1,
        borderBottomColor: '#ffe81f',
        backgroundColor: 'black'
      },
      titleStyle: {
        color: '#ffe81f',
      },
      pressColorAndroid: 'white'
    }
  }
  state = {
    data: [],
    loading: true,
    modalVisible: false,
    gender: 'all',
    pickerVisible: false
  }
  componentDidMount() {
    fetch('https://swapi.co/api/people/')
      .then(res => res.json())
      .then(json => this.setState({ data: json.results, loading: false }))
      .catch((err) => console.log('err:', err))
  }

  openHomeWorld = (url) => {
    this.setState({
      url,
      modalVisible: true
    })
  }

  closeModal = () => {
    this.setState({ modalVisible: false })
  }

  togglePicker = () => {
    this.setState({ pickerVisible: !this.state.pickerVisible })
  }

  renderItem = (item) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.name}>{item.item.name}</Text>
        <Text style={styles.info}>Height: {item.item.height}</Text>
        <Text style={styles.info}>Birth Year: {item.item.birth_year}</Text>
        <Text style={styles.info}>Gender: {item.item.gender}</Text>
        <TouchableHighlight style={styles.button} onPress={() => this.openHomeWorld(item.item.homeworld)}>
          <Text style={styles.info}>View Homeworld</Text>
        </TouchableHighlight>
      </View>
    )
  }
  filter = (gender) => {
    this.setState({ gender })
  }
  render() {
    let { data } = this.state
    if (this.state.gender !== 'all') {
      data = data.filter(f => f.gender === this.state.gender)
    }

    return (
      <Container>
        <TouchableHighlight style={styles.pickerToggleContainer} onPress={this.togglePicker}>
          <Text style={styles.pickerToggle}>{this.state.pickerVisible ? 'Close Filter' : 'Open Filter'}</Text>
        </TouchableHighlight>
        {
          this.state.loading ? <ActivityIndicator color='#ffe81f' /> : (
            <FlatList
              data={data}
              keyExtractor={(item) => Math.random()}
              renderItem={this.renderItem}
            />
          )
        }
        <Modal
          onRequestClose={() => console.log('onrequest close called')}
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}>
          <HomeWorld closeModal={this.closeModal} url={this.state.url} />
        </Modal>
        {
          this.state.pickerVisible && (
            <View style={styles.pickerContainer}>
              <Picker
                style={{ backgroundColor: '#ffe81f' }}
                selectedValue={this.state.gender}
                onValueChange={(item) => this.filter(item)}>

                <Picker.Item itemStyle={{ color: 'yellow' }} label="All" value="all" />
                <Picker.Item label="Males" value="male" />
                <Picker.Item label="Females" value="female" />
                <Picker.Item label="Other" value="n/a" />
              </Picker>
            </View>
          )
        }
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  pickerToggleContainer: {
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pickerToggle: {
    color: '#ffe81f'
  },
  pickerContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0
  },
  itemContainer: {
    padding: 15,
    borderBottomWidth: 1, borderBottomColor: '#ffe81f'
  },
  name: {
    color: '#ffe81f',
    fontSize: 18
  },
  info: {
    color: '#ffe81f',
    fontSize: 14,
    marginTop: 5
  }
});
