import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View} from 'react-native';

export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <Point/>
                <Square style={{transform: [{translateX: -1.5 * squareSize},
                    {translateY: -1.5 * squareSize}]
                }}>
                    <SquareText>&#8598; upper left</SquareText>
                </Square>
                <Square style={{transform: [{translateY: -1.5 * squareSize}]}}>
                    <SquareText>&uarr; top</SquareText>
                </Square>
                <Square style={{transform: [{translateX:  1.5 * squareSize},
                    {translateY: -1.5 * squareSize}]
                }}>
                    <SquareText>upper right &#8599;</SquareText>
                </Square>
                <Square style={{transform: [{translateX: -1.5 * squareSize}]}}>
                    <SquareText>&larr; left</SquareText>
                </Square>
                <Square>
                    <SquareText>center</SquareText>
                </Square>
                <Square style={{transform: [{translateX: 1.5 * squareSize}]}}>
                    <SquareText>right &rarr;</SquareText>
                </Square>
                <Square style={{transform: [{translateX: -1.5 * squareSize},
                    {translateY:  1.5 * squareSize}]
                }}>
                    <SquareText>&#8601; bottom left</SquareText>
                </Square>
                <Square style={{transform: [{translateY: 1.5 * squareSize}]}}>
                    <SquareText>bottom &darr;</SquareText>
                </Square>
                <Square style={{transform: [{translateX:  1.5 * squareSize},
                                            {translateY:  1.5 * squareSize}]
                }}>
                    <SquareText>bottom right &#8600;</SquareText>
                </Square>
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
    <View style={[styles.square, props.style]}>
        {props.children}
    </View>
);

const SquareText = (props) => (
    <Text style={[{textAlign: 'center'}, props.style]}>
        {props.children}
    </Text>
);

const centerY = (Dimensions.get('window').height / 2);
const centerX = (Dimensions.get('window').width / 2);
const squareSize = 80;
const pointSize = 10;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    point: {
        width: pointSize,
        height: pointSize,
        position: 'absolute',
        top: centerY - (pointSize / 2),
        left: centerX - (pointSize / 2),
        borderWidth: 1,
        borderRadius: pointSize / 2,
        backgroundColor: 'black'
    },
    square: {
        width: squareSize,
        height: squareSize,
        alignItems: 'center',
        position: 'absolute',
        top: centerY - (squareSize / 2),
        left: centerX - (squareSize / 2),
        borderWidth: 2,
        backgroundColor: 'transparent'
    }
});
