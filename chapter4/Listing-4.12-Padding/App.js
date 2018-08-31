import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.exampleContainer}>
                    <Example style={{}}>
                        <CenteredText>A</CenteredText>
                    </Example>
                </View>
                <View style={styles.exampleContainer}>
                    <Example style={{paddingTop: 50}}>
                        <CenteredText>B</CenteredText>
                    </Example>
                </View>
                <View style={styles.exampleContainer}>
                    <Example style={{paddingTop: 50, paddingLeft: 10}}>
                        <CenteredText>C</CenteredText>
                    </Example>
                </View>
                <View style={styles.exampleContainer}>
                    <Example style={{paddingLeft: -10, paddingTop: -10}}>
                        <CenteredText>D</CenteredText>
                    </Example>
                </View>
            </View>
        );
    }
}

const Example = (props) => (
    <View style={[styles.example,props.style]}>
        {props.children}
    </View>
);

const CenteredText = (props) => (
    <Text style={[styles.centeredText, props.style]}>
        {props.children}
    </Text>
);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 75
    },
    exampleContainer: {
        borderWidth: 1,
        width: 120,
        height: 120,
        marginLeft: 20,
        marginBottom: 20,
    },
    example: {
        width: 50,
        height: 50,
        backgroundColor: 'grey',
        borderWidth: 1,
        justifyContent: 'center'
    },
    centeredText: {
        textAlign: 'center',
        margin: 10,
        borderWidth: 1,
        backgroundColor: 'lightgrey'
    }
});