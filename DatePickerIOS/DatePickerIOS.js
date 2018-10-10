import React, { Component } from 'react'
import { Text, View, DatePickerIOS } from 'react-native'

class DatePickerIOSExample extends Component {
  
  constructor() {
    super()
    this.state = {
      date: new Date(),
    }
    this.onDateChange = this.onDateChange.bind(this)
  }

  onDateChange(date) {
    this.setState({date: date});
  };

  render() {
    return (
      <View style={{ marginTop: 50 }}>
        <DatePickerIOS // D
          date={this.state.date}
          onDateChange={this.onDateChange}
        />
        <Text style={{ marginTop: 40, textAlign: 'center' }}>
          { this.state.date.toLocaleDateString() } { this.state.date.toLocaleTimeString() }
        </Text>
      </View>)
  }
}

export default DatePickerIOSExample
