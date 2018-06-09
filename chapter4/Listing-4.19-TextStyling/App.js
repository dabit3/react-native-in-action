import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View} from 'react-native';

export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <LeftText style={{fontStyle: 'italic'}}>
                    A) Italic
                </LeftText>
                <LeftText style={{textDecorationLine: 'underline line-through'}}>
                    B) Underline and Line Through
                </LeftText>
                <LeftText style={{textDecorationLine: 'underline line-through',
                                  textDecorationColor: 'red',
                                  textDecorationStyle: 'dotted'}}>
                    C) Underline and Line Through
                </LeftText>
                <LeftText style={{textShadowColor: 'red',
                                  textShadowOffset: {width: -2, height: -2},
                                  textShadowRadius: 4}}>
                    D) Text Shadow
                </LeftText>
                <LeftText style={{letterSpacing: 5}}>
                    E) Letter Spacing
                </LeftText>
                <LeftText style={{textAlign: 'center', fontWeight: 'bold'}}>
                    {Platform.OS}
                </LeftText>
            </View>
        );
    }
}

const LeftText = (props) => (
    <Text style={[styles.leftText, props.style]}>
        {props.children}
    </Text>
);

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 300,
        margin: 40,
        marginTop: 100
    },
    leftText: {
        fontSize: 20,
        paddingBottom: 10
    }
});