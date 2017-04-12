import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableHighlight
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Container from './Container'
import People from './People'

const links = [
  { title: 'People', url: 'people' },
  { title: 'Films', url: 'films' },
  { title: 'StarShips', url: 'starships' },
  { title: 'Vehicles', url: 'vehicles' },
  { title: 'Species', url: 'species' },
  { title: 'Planets', url: 'planets' }
]

export default class StarWars extends Component {
  static navigationOptions = {
    header: {
      title: <Image style={{ width: 110, height: 64 }} source={{ uri: 'https://raw.githubusercontent.com/dabit3/react-native-in-action/chapter6/sw.jpg' }} />,
      style: { backgroundColor: 'black', height: 110 }
    }
  }
  navigate = (link) => {
    console.log('link:', link)
    const { navigate } = this.props.navigation
    navigate(link)
  }
  renderItem = (item) => {
    return (
      <TouchableHighlight
        onPress={() => this.navigate(item.item.title)}
        style={[ styles.item, { borderTopWidth: item.index === 0 ? 1 : null} ]}>
        <Text style={styles.text}>{item.item.title}</Text>
      </TouchableHighlight>
    )
  }
  render() {
    return (
      <Container>
        <FlatList
          data={links}
          keyExtractor={(item) => item.title}
          renderItem={this.renderItem}
        />
      </Container>
    );
  }
}

const Navigation = StackNavigator({
  Home: {
    screen: StarWars,
  },
  People: {
    screen: People
  }
});


const styles = StyleSheet.create({
  item: {
    padding: 20,
    justifyContent: 'center',
    borderColor: 'rgba(255,232,31, .2)',
    borderBottomWidth: 1
  },
  text: {
    color: '#ffe81f',
    fontSize: 18
  }
});

AppRegistry.registerComponent('StarWars', () => Navigation);
