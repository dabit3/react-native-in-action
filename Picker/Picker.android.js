import React from 'react'
import { View, AppRegistry, Text, Picker, StyleSheet, TouchableHighlight } from 'react-native'

class PickerComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      restaurant: {
        type: 'Italian',
        romantic: true
      }
    }
  }
  render () {
    const restaurants = [
      {type: 'Italian', romantic: true},
      {type: 'French', romantic: true},
      {type: 'Pizzaria', romantic: false},
      {type: 'Sandwich Shop', romantic: false},
      {type: 'Ice Cream', romantic: true},
    ]
    return (
      <View style={styles.container}>
        <Picker
          prompt='This is a dialog'
          selectedValue={this.state.restaurant.type}
          onValueChange={(value, position) => this.setState({restaurant: restaurants[position]})}>
          {
            restaurants.map((l, i) => {
              return <Picker.Item key={i} label={l.type} value={l.type} />
            })
          }
        </Picker>
        <Text style={{textAlign: 'center'}}>{this.state.restaurant.type}</Text>
        {this.state.restaurant.romantic && <Text style={{textAlign: 'center', marginTop: 10}}>ROMANTIC!</Text>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1
  }
})