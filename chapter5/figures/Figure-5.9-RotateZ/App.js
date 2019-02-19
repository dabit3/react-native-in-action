// ----------------------------------------------------
// Figure 5.9 rotateZ Example
// ----------------------------------------------------
import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class App extends Component<{}> {
    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.titleText}>RotateZ</Text>
            <View style={styles.squareContainer}>
                <Square label='0°'/>
                <Square label={rotationIncrement + '°'}
                        style={{transform: [{rotateZ: rotationIncrement + 'deg'}]}}/>
                <Square label={2*rotationIncrement + '°'}
                        style={{transform: [{rotateZ: 2*rotationIncrement + 'deg'}]}}/>
                <Square label={3*rotationIncrement + '°'}
                        style={{transform: [{rotateZ: 3*rotationIncrement + 'deg'}]}}/>
                <Square label={4*rotationIncrement + '°'}
                        style={{transform: [{rotateZ: 4*rotationIncrement + 'deg'}]}}/>
            </View>
          </View>
        );
    }
}

const Point = (props) => (
    <View style={[styles.point, props.style]}>
        {props.children}
    </View>
);


const Square = (props) => (
    <View>
        <View style={[styles.square, props.style]}>
            <Text style={[styles.squareText]}>
              ROTATION
            </Text>
            <Point/>
        </View>
        <Text style={styles.labelText}>{props.label}</Text>
    </View>
);

const pointSize = 10;
const squareSize = 100;
const rotationIncrement = 35;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    titleText: {
        color: 'red',
        position: 'absolute',
        marginLeft: 15,
        top: -30
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
        marginTop: 30
    },
    point: {
        width: pointSize,
        height: pointSize,
        position: 'absolute',
        top: ((squareSize - pointSize) / 2) - 3,  // halfway - half border widths of square and point
        left: (( squareSize - pointSize) / 2) - 3,
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: pointSize / 2,
        backgroundColor: 'red'
    },
});