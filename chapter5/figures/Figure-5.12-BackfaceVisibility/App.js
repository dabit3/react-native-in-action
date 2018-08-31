// ----------------------------------------------------
// Figure 5.12 backfaceVisibility Example
// ----------------------------------------------------
import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.exampleContainer}>
          <BackFace style={styles.back} label='2'/>
          <Face style={styles.left} label='4'/>
          <Face style={styles.right} label='3'/>
          <AltFace style={styles.bottom} label='6'/>
          <AltFace style={styles.top} label='5'/>
          <Face style={styles.front} label='1'/>
          <Text style={styles.label}>Cube: backfaceVisibility: 'visible'</Text>
        </View>
        <View style={[styles.exampleContainer]}>
          <BackFace style={[styles.back,styles.hidden]} label='2'/>
          <Face style={[styles.left,styles.hidden]} label='4'/>
          <Face style={[styles.right,styles.hidden]} label='3'/>
          <AltFace style={[styles.bottom,styles.hidden]} label='6'/>
          <AltFace style={[styles.top,styles.hidden]} label='5'/>
          <Face style={[styles.front,styles.hidden]} label='1'/>
          <Text style={styles.label}>Cube: backfaceVisibility: 'hidden'</Text>
        </View>
      </View>
    );
  }
}

const BackFace = (props) => (
  <View style={[styles.face, props.style]}>
    <Text style={[styles.text,{color: 'black'}]}>{props.label}</Text>
  </View>
);

const Face = (props) => (
  <View style={[styles.face, props.style]}>
    <Text style={styles.text}>{props.label}</Text>
  </View>
);

const AltFace = (props) => (
  <View style={[styles.face, props.style]}>
    <Text style={[styles.altText]}>{props.label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 300,
    marginLeft: 10,
    marginTop: 20
  },
  exampleContainer: {
    width: 300
  },
  face: {
    width: 100,
    height: 100,
  },
  hidden: {
    backfaceVisibility: 'hidden'
  },
  text: {
    lineHeight: 100,
    fontSize: 40,
    color: 'white',
    textAlign: 'center'
  },
  altText: {
    lineHeight: 50,
    fontSize: 30,
    color: 'white',
    textAlign: 'center'
  },
  front: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    top: 100,
    left: 100,
  },
  back: {
    backgroundColor: 'rgba(0,255,0,1)',
    position: 'absolute',
    top: 150,
    left: 150,
    transform: [{rotateY: '180deg'}]
  },
  left: {
    backgroundColor: 'rgba(0,0,196,0.7)',
    transform: [{rotateY: '-180deg'},{skewY: '-45deg'}],
    width: 50,
    position: 'absolute',
    top: 125,
    left: 100
  },
  right: {
    backgroundColor: 'rgba(196,0,0,0.7)',
    transform: [{skewY: '45deg'}],
    width: 50,
    position: 'absolute',
    top: 125,
    left: 200
  },
  bottom: {
    backgroundColor: 'rgba(196,0,196,0.7)',
    transform: [{skewX: '45deg'}],
    height: 50,
    width: 100,
    position: 'absolute',
    top: 200,
    left: 125
  },
  top: {
    backgroundColor: 'rgba(196,196,0,0.7)',
    transform: [{rotateX: '-180deg'},{skewX: '-45deg'}],
    height: 50,
    width: 100,
    position: 'absolute',
    top: 100,
    left: 125
  },
  label: {
    color: 'red',
    position: 'absolute',
    top: 275,
    left: 80
  }
});
