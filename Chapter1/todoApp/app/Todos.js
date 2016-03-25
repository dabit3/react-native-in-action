import React, { View, Text, StyleSheet } from 'react-native'
import Done from './Done'
import Delete from './Delete'

let Todos = ({ type, todos, _deleteTodo, _toggleComplete }) => {

  const getVisibleTodos = (
    todos,
    type
  ) => {
    switch (type) {
      case 'All':
        return todos;
      case 'Complete':
        return todos.filter(
          t => t.complete
        );
      case 'Active':
        return todos.filter(
          t => !t.complete
        );
    }
  }

  todos = getVisibleTodos(todos, type)

  console.log('todos' , todos)

  todos = todos.map((t, i) => {
          return (
            <View style={ styles.todoContainer } key={ i }>
               <Text style={ styles.todoText }>{ t.title }</Text>
               <View style={styles.buttons}>
                 <Done complete={t.complete}  _toggleComplete={_toggleComplete.bind(this, t.todoIndex)} />
                 <Delete _deleteTodo={_deleteTodo.bind(this, t.todoIndex)} />
               </View>
             </View>
          )
        })

  return (
    <View>
      {todos}
    </View>
  )
}

let styles = StyleSheet.create({
	todoContainer: {
		marginLeft: 20,
		marginRight: 20,
  	backgroundColor: 'ffffff',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: 'ededed',
    paddingLeft: 14,
    paddingTop: 7,
    paddingBottom: 7,
    shadowOpacity: .2,
    shadowRadius: 3,
    shadowColor: '000000',
    shadowOffset: { width: 2, height: 2 },
    flexDirection: 'row',
    alignItems: 'center'
	},
  todoText: {
    fontSize:17
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
})

export default Todos