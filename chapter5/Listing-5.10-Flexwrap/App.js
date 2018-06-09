import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <NoWrapContainer>
                    <Example>A nowrap</Example>
                    <Example>1</Example>
                    <Example>2</Example>
                    <Example>3</Example>
                    <Example>4</Example>
                </NoWrapContainer>
                <WrapContainer>
                    <Example>B wrap</Example>
                    <Example>1</Example>
                    <Example>2</Example>
                    <Example>3</Example>
                    <Example>4</Example>
                </WrapContainer>
            </View>
        );
    }
}

const NoWrapContainer = (props) => (
    <View style={[styles.noWrapContainer,props.style]}>
        {props.children}
    </View>
);

const WrapContainer = (props) => (
    <View style={[styles.wrapContainer,props.style]}>
        {props.children}
    </View>
);

const Example = (props) => (
    <View style={[styles.example,props.style]}>
        <Text>
            {props.children}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginTop: 150,
        flex: 1
    },
    noWrapContainer: {
        backgroundColor: '#ededed',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        borderWidth: 1,
        margin: 10
    },
    wrapContainer: {
        backgroundColor: '#ededed',
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderWidth: 1,
        margin: 10
    },
    example: {
        width: 100,
        height: 100,
        margin: 5,
        backgroundColor: '#666666'
    },
});