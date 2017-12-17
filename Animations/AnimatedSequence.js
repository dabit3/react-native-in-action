import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated
} from 'react-native';

export default class RNAnimations extends Component {
  componentDidMount() {
    this.animate();
  }
  AnimatedValue1 = new Animated.Value(-30);
  AnimatedValue2 = new Animated.Value(-30);
  AnimatedValue3 = new Animated.Value(-30);
  animate = () => {
    const createAnimation = (value) => {
      return Animated.timing(
        value, {
          toValue: 290,
          duration: 500
        })
    }
    Animated.sequence([
      createAnimation(this.AnimatedValue1),
      createAnimation(this.AnimatedValue2),
      createAnimation(this.AnimatedValue3)
    ]).start()
  }
  render() {
    return (
      <View style={styles.container}>
        <Animated.Text style={[styles.text, { marginTop: this.AnimatedValue1}]}>
          1
        </Animated.Text>
        <Animated.Text style={[styles.text, { marginTop: this.AnimatedValue2}]}>
          2
        </Animated.Text>
        <Animated.Text style={[styles.text, { marginTop: this.AnimatedValue3}]}>
          3
        </Animated.Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    marginHorizontal: 20,
    fontSize: 26
  }
});
