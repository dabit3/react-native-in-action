// ----------------------------------------------------
// Figure 5.7 rotateX Example
// ----------------------------------------------------
import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class App extends Component<{}> {
    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.titleText}>RotateX</Text>
            <CenterLine/>
            <View style={styles.squareContainer}>
                <Square label='0°'/>
                <Square label={rotationIncrement + '°'}
                        style={{transform: [{rotateX: rotationIncrement + 'deg'}]}}/>
                <Square label={2*rotationIncrement + '°'}
                        style={{transform: [{rotateX: 2*rotationIncrement + 'deg'}]}}/>
                <Square label={3*rotationIncrement + '°'}
                        style={{transform: [{rotateX: 3*rotationIncrement + 'deg'}]}}/>
                <Square label={4*rotationIncrement + '°'}
                        style={{transform: [{rotateX: 4*rotationIncrement + 'deg'}]}}/>
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
        <View style={[styles.square, props.style]}>
            <Text style={[styles.squareText]}>
              ROTATION
            </Text>
        </View>
        <Text style={styles.labelText}>{props.label}</Text>
    </View>
);

const squareSize = 100;
const rotationIncrement = 35;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50
    },
    titleText: {
        color: 'red',
        position: 'absolute',
        marginLeft: 15,
        top: -30
    },
    centerLine: {
        borderColor: 'red',
        borderWidth: 1,
        height: 1,
        position: 'absolute',
        top: squareSize / 2,
        width: '100%'
    },
    squareContainer: {
        flexDirection: 'row',
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
    labelText: {
        alignSelf: 'center',
        marginTop: 10
    }

});
