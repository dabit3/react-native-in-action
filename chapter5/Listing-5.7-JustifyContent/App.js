import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <FlexContainer style={[{justifyContent: 'center'}]}>
                    <Example>center</Example>
                    <Example>center</Example>
                </FlexContainer>
                <FlexContainer style={[{justifyContent: 'flex-start'}]}>
                    <Example>flex-start</Example>
                    <Example>flex-start</Example>
                </FlexContainer>
                <FlexContainer style={[{justifyContent: 'flex-end'}]}>
                    <Example>flex-end</Example>
                    <Example>flex-end</Example>
                </FlexContainer>
                <FlexContainer style={[{justifyContent: 'space-around'}]}>
                    <Example>space-around</Example>
                    <Example>space-around</Example>
                </FlexContainer>
                <FlexContainer style={[{justifyContent: 'space-between'}]}>
                    <Example>space-between</Example>
                    <Example>space-between</Example>
                </FlexContainer>
            </View>
        );
    }
}

const FlexContainer = (props) => (
    <View style={[styles.flexContainer,props.style]}>
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
        marginTop: 50,
        alignItems: 'center',
        flex: 1
    },
    flexContainer: {
        alignItems: 'stretch',
        backgroundColor: '#ededed',
        width: 120,
        height: 100,
        borderWidth: 1,
        margin: 10
    },
    example: {
        width: 120,
        height: 15,
        backgroundColor: '#666666'
    },
});