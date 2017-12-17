import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Button,
} from 'react-native';

export default class RNAnimations extends Component {
  marginTop = new Animated.Value(20);
  animate = () => {
    Animated.timing(
      this.marginTop,
      {
        toValue: 200,
        duration: 500,
      }
    ).start();
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          title='Animate Box'
          onPress={this.animate}
        />
        <Animated.View style={[styles.box, { marginTop: this.marginTop } ]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 50,
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'red'
  }
});
