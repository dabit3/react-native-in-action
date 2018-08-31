// ----------------------------------------------------
// Figure 5.11 transform: [{translateY: 50}, {rotate: '45deg'}, {translateX: 150}]
// ----------------------------------------------------
import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>transform: [&#123;translateY: 50&#125;,&#123;rotate: '45deg'&#125;,&#123;translateX: 150&#125;]</Text>
        <View style={styles.row}>
          <View style={styles.stepContainer}>
            <Square style={styles.originalSquare}/>
            <Text style={styles.stepLabel}>Original Square</Text>
          </View>
          <View style={styles.stepContainer}>
            <Square style={[styles.originalSquare,styles.dotted]}/>
            <Square style={[styles.originalSquare,styles.step1]}/>
            <Text style={styles.stepLabel}>Step 1: &#123;translateY: 50&#125;</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.stepContainer}>
            <Square style={[styles.originalSquare,styles.step1,styles.dotted]}/>
            <Square style={[styles.originalSquare,styles.step2]}/>
            <Text style={styles.stepLabel}>Step 2: &#123;rotate: '45deg'&#125;</Text>
          </View>
          <View style={styles.stepContainer}>
            <Square style={[styles.originalSquare,styles.step2,styles.dotted]}/>
            <Square style={[styles.originalSquare,styles.step3]}/>
            <Text style={styles.stepLabel}>Step 3: &#123;translateX: 150&#125;</Text>
          </View>
        </View>
      </View>
    );
  }
}

const squareSize = 50;

const Square = (props) => (
  <View style={[styles.square, props.style]}/>
);

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column'
  },
  titleText: {
    color: 'red'
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  stepContainer: {
    borderColor: 'black',
    borderWidth: 1,
    height: 150,
    width: 300
  },
  stepLabel: {
    bottom: 5,
    color: 'red',
    left: 5,
    position: 'absolute'
  },
  square: {
    borderWidth: 2,
    backgroundColor: 'transparent',
    height: squareSize,
    width: squareSize,
  },
  originalSquare: {
    position: 'absolute',
    left: 20,
    top: 20
  },
  dotted: {
    borderStyle: 'dotted'
  },
  step1: {
    transform: [{translateY: 50}]
  },
  step2: {
    transform: [{translateY: 50}, {rotate: '45deg'}]
  },
  step3: {
    transform: [{translateY: 50}, {rotate: '45deg'}, {translateX: 150}]
  }

});
