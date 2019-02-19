import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <FlexContainer style={[]}>
                    <Example align='auto'>auto</Example>
                    <Example align='stretch'>stretch</Example>
                    <Example align='center'>center</Example>
                    <Example align='flex-start'>flex-start</Example>
                    <Example align='flex-end'>flex-end</Example>
                    <Example>default</Example>
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
    <View style={[styles.example,
                  styles.lightgrey,
                  {alignSelf: props.align || 'auto'},
                  props.style
    ]}>
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
        backgroundColor: '#ededed',
        width: 120,
        height: 180,
        borderWidth: 1,
        margin: 10
    },
    example: {
        height: 25,
        marginBottom: 5,
        backgroundColor: '#666666'
    },
});
