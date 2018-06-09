import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View} from 'react-native';

export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <CenteredText>
                        I am a monospaced font on both platforms
                    </CenteredText>
                    <BottomText>
                        {Platform.OS}
                    </BottomText>
                </View>
            </View>
        );
    }
}

const CenteredText = (props) => (
    <Text style={[styles.centeredText, props.style]}>
        {props.children}
    </Text>
);

const BottomText = (props) => (
    <CenteredText style={[{position: 'absolute', bottom: 0},
                          props.style]}>
        {props.children}
    </CenteredText>
);

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 300,
        margin: 40,
        marginTop: 100,
        borderWidth: 1
    },
    row: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    centeredText: {
        textAlign: 'center',
        margin: 10,
        fontSize: 24,
        ...Platform.select({
            ios: {
                fontFamily: 'American Typewriter'
            },
            android: {
                fontFamily: 'monospace'
            }
        })
    }
});