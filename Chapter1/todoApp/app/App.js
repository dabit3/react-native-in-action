/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  View,
  Text,
  ScrollView,
  Component,
  StyleSheet,
  TextInput,
  TouchableHighlight
} from 'react-native';

let todoIndex = 0

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			inputValue: '',
			todos: []
		}
	}

	_inputChange(inputValue) {
		this.setState({ inputValue })
	}

	_submitTodo() {
		if(this.state.inputValue == '') return
		let todo = { title: this.state.inputValue, id: todoIndex }
		todoIndex ++
		this.state.todos.push(todo)
		this.setState({ todos: this.state.todos, inputValue: '' })
	}

  render() {
    return (
      <View style={ styles.container }>
	      <Header />
	      <Input inputValue={ this.state.inputValue } _inputChange={ (text) => this._inputChange(text) } />
        <Todos todos={ this.state.todos } />
        <Button _submitTodo={ () => this._submitTodo() } />
      </View>
    );
  }
}

let Todos = ({ todos }) => (
  <View>
    {
      todos.map((t, i) => {
        return <View style={ styles.todoContainer } key={ i }>
                 <Text style={ styles.todoText }>{ t.title }</Text>
               </View>
      })
    }
  </View>
)

let Header = () => (
	<View style={ styles.header }>
		<Text style={ styles.headerText }>todos</Text>
	</View>
)

let Input = ({ _inputChange, inputValue }) => (
	<View style={ styles.inputContainer }>
		<TextInput
			value={ inputValue }
			style={ styles.input }
			placeholder='What needs to be done?'
			placeholderTextColor='CACACA'
			selectionColor='666666'
			onChangeText={ _inputChange } />
	</View>
)

let Button = ({ _submitTodo }) => (
	<View style={ styles.buttonContainer }>
		<TouchableHighlight underlayColor='efefef' style={ styles.button } onPress={ _submitTodo }>
			<Text style={ styles.submit }>Submit</Text>
		</TouchableHighlight>
	</View>
)

export default App

let styles = StyleSheet.create({
	container: {
		backgroundColor: 'f5f5f5',
		flex:1
	},
	header: {
		marginTop:80
	},
	headerText: {
		textAlign: 'center',
		fontSize:72,
		color: 'rgba(175, 47, 47, 0.25)',
		fontWeight: '100'
	},
	inputContainer: {
		marginLeft:20,
		marginRight:20,
		shadowOpacity: .2,
		shadowRadius: 3,
		shadowColor: '000000',
		shadowOffset: { width: 2, height: 2 }
	},
	input: {
		height:60,
		backgroundColor: 'ffffff',
		paddingLeft:10,
		paddingRight:10
	},
	buttonContainer: {
		alignItems: 'flex-end'
	},
	button: {
		height:50,
		paddingLeft:20,
		paddingRight:20,
		backgroundColor: 'ffffff',
		width:200,
		marginRight:20,
		marginTop:15,
		borderWidth:1,
		borderColor: 'rgba(0,0,0,.1)',
		justifyContent: 'center',
		alignItems: 'center'
	},
	submit: {
		color: '666666'
	},
  todoContainer: {
		marginLeft:20,
		marginRight:20,
  	backgroundColor: 'ffffff',
    borderTopWidth: 1,
    borderRightWidth:1,
    borderLeftWidth:1,
    borderColor: 'ededed',
    paddingLeft:14,
    paddingTop:14,
    paddingBottom:14
	},
  todoText: {
    fontSize:17
  }
})
