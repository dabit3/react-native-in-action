// ----------------------------------------------------
// Figure 5.8 rotateY Example
// ----------------------------------------------------
import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>RotateY</Text>
        <CenterLine/>
        <View style={styles.squareContainer}>
          <Square label='0°'/>
          <Square label={rotationIncrement + '°'}
                  style={{transform: [{rotateY: rotationIncrement + 'deg'}]}}/>
          <Square label={2*rotationIncrement + '°'}
                  style={{transform: [{rotateY: 2*rotationIncrement + 'deg'}]}}/>
          <Square label={3*rotationIncrement + '°'}
                  style={{transform: [{rotateY: 3*rotationIncrement + 'deg'}]}}/>
          <Square label={4*rotationIncrement + '°'}
                  style={{transform: [{rotateY: 4*rotationIncrement + 'deg'}]}}/>
        </View>
      </View>
    );
  }
}

const CenterLine = () => (
  <View style={[styles.centerLine]}/>
);

const Square = (props) => (
  <View>
    <View style={styles.labelContainer}>
      <Text style={styles.labelText}>{props.label}</Text>
    </View>
    <View style={[styles.square, props.style]}>
      <Text style={[styles.squareText]}>
        ROTATION
      </Text>
    </View>
  </View>
);

const squareSize = 100;
const rotationIncrement = 35;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 50,
    marginTop: 50
  },
  titleText: {
    color: 'red',
    position: 'absolute',
    marginLeft: -40,
    top: -20
  },
  centerLine: {
    borderColor: 'red',
    borderWidth: 1,
    height: '100%',
    position: 'absolute',
    left: squareSize / 2,
    width: 1
  },
  squareContainer: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  square: {
    borderWidth: 2,
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    height: squareSize,
    width: squareSize,
  },
  squareText: {
    alignSelf: 'center',
  },
  labelContainer: {
    position: 'absolute',
    top: 30,
    left: -30
  },
  labelText: {
    backgroundColor: 'transparent',
  }

});