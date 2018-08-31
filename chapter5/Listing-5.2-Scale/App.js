import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <Example style={{}}>A,1</Example>
                <Example style={{transform: [{scale: 0.5}]}}>B,0.5</Example>
                <Example style={{transform: [{scale: 2}]}}>C,2</Example>
                <Example style={{transform: [{scaleX: 3}]}}>D,X3</Example>
                <Example style={{transform: [{scaleY: 1.5}]}}>E,Y1.5</Example>
            </View>
        );
    }
}

const Example = (props) => (
    <View style={[styles.example,props.style]}>
        <Text>
            {props.children}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginTop: 75,
        alignItems: 'center',
        flex: 1
    },
    example: {
        width: 50,
        height: 50,
        borderWidth: 2,
        margin: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
});