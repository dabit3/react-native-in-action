import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <Example style={{shadowColor: 'black',
                                 shadowOffset: {width: 10, height: 10}
                }}>
                    <CenteredText>Example 1</CenteredText>
                </Example>
                <Example style={{shadowColor: 'black',
                                 shadowOffset: {width: 10, height: 10},
                                 shadowOpacity: 1
                }}>
                    <CenteredText>Example 2</CenteredText>
                </Example>
                <Example style={{shadowColor: 'black',
                                 shadowOffset: {width: 20, height: 20},
                                 shadowOpacity: 1
                }}>
                    <CenteredText>Example 3</CenteredText>
                </Example>
                <Example style={{shadowColor: 'black',
                                 shadowOffset: {width: 20, height: 20},
                                 shadowOpacity: 1,
                                 shadowRadius: 20
                }}>
                    <CenteredText>Example 4</CenteredText>
                </Example>
                <Example style={{shadowColor: 'black',
                                 shadowOffset: {width: 20, height: 20},
                                 shadowOpacity: 0.2
                }}>
                    <CenteredText>Example 5</CenteredText>
                </Example>
                <Example style={{shadowColor: 'red',
                                 shadowOffset: {width: 20, height: 20},
                                 shadowOpacity: 1
                }}>
                    <CenteredText>Example 6</CenteredText>
                </Example>
                <Example style={{shadowColor: 'black',
                    shadowOffset: {height: 20},
                    shadowOpacity: 1
                }}>
                    <CenteredText>Example 7</CenteredText>
                </Example>
                <Example style={{shadowColor: 'black',
                    shadowOffset: {width: -5, height: -5},
                    shadowOpacity: 1
                }}>
                    <CenteredText>Example 8</CenteredText>
                </Example>
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
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 75
    },
    example: {
        width: 120,
        height: 120,
        marginLeft: 20,
        marginBottom: 20,
        backgroundColor: 'grey',
        borderRadius: 20,
        borderWidth: 2,
        justifyContent: 'center'
    },
    centeredText: {
        textAlign: 'center',
        margin: 10
    }
});
