import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'

let todoIndex = 0

import Heading from './Heading'
import Input from './Input'
import Button from './Button'
import TodoList from './TodoList'
import TabBar from './TabBar'

class App extends Component {

  constructor () {
    super()
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All'
    }
  }

  inputChange (inputValue) {
    this.setState({ inputValue })
  }

  submitTodo () {
    if (this.state.inputValue.match(/^\s*$/)) return
    let todo = { title: this.state.inputValue, todoIndex: todoIndex, complete: false }
    todoIndex++
    this.state.todos.push(todo)
    this.setState({ todos: this.state.todos, inputValue: '' })
  }

  deleteTodo (todoIndex) {
    let { todos } = this.state
    todos = this.state.todos.filter((todo) => {
      return todo.todoIndex !== todoIndex
    })
    this.setState({ todos })
  }

  toggleComplete (todoIndex) {
    let { todos } = this.state
    todos.forEach((todo) => {
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete
      }
    })
    this.setState({ todos })
  }

  setType (type) {
    this.setState({ type })
  }

  render () {
    const { todos, inputValue, type } = this.state
    return (
      <View style={styles.container}>
        <ScrollView style={styles.content}>
          <Heading />
          <Input inputValue={inputValue} inputChange={(text) => this.inputChange(text)} />
          <TodoList
            type={type}
            toggleComplete={this.toggleComplete.bind(this)}
            deleteTodo={this.deleteTodo.bind(this)}
            todos={todos} />
          <Button submitTodo={() => this.submitTodo()} />
        </ScrollView>
        <TabBar type={type} setType={this.setType.bind(this)} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1
  },
  content: {
    flex: 1
  }
})

export default App
