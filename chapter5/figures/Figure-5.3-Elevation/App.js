import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Example style={[styles.exampleA,{elevation: 1}]}>A</Example>
                    <Example style={[styles.exampleB,{elevation: 2}]}>B</Example>
                    <Example style={[styles.exampleC,{elevation: 3}]}>C</Example>
                </View>
                <View style={styles.offsetContainer}>
                    <Example style={[styles.exampleA,{elevation: 3}]}>A</Example>
                    <Example style={[styles.exampleB,{elevation: 2}]}>B</Example>
                    <Example style={[styles.exampleC,{elevation: 1}]}>C</Example>
                </View>
            </View>
        );
    }
}

const Example = (props) => (
    <View style={[styles.example,props.style]}>
        <Text style={styles.cornerText}>
        {props.children}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginTop: 75,
        marginLeft: 20,
        flex: 1
    },
    offsetContainer: {
        marginLeft: 175
    },
    example: {
        width: 120,
        height: 120,
        borderWidth: 2,
        position: 'absolute'
    },
    exampleA: {
        backgroundColor: 'red',
        top: 0,
        left: 0
    },
    exampleB: {
        backgroundColor: 'orange',
        top: 20,
        left: 20
    },
    exampleC: {
        backgroundColor: 'blue',
        top: 40,
        left: 40
    },
    cornerText: {
        position: 'absolute',
        top: 0,
        left: 0
    }
});
