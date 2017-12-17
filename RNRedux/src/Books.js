import React from 'react'
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TextInput, 
  TouchableOpacity
} from 'react-native'
import { addBook, removeBook } from './actions'

import { connect } from 'react-redux'

const initialState = {
  name: '',
  author: ''
}

class Books extends React.Component<{}> {
  state = initialState
  
  updateInput = (key, value) => {
    this.setState({
      ...this.state,
      [key]: value
    })
  }
  
  addBook = () => {
    this.props.dispatchAddBook(this.state)
    this.setState(initialState)
  }
  
  removeBook = (book) => {
    this.props.dispatchRemoveBook(book)
  }
  

  render() {
    const { books } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Books</Text>
        <ScrollView style={styles.booksContainer}>
          {
            books.map((book, index) => (
              <View style={styles.book} key={index}>
                <Text style={styles.name}>{book.name}</Text>
                <Text style={styles.author}>{book.author}</Text>
                <Text onPress={() => this.removeBook(book)}>Remove</Text>
              </View>
            ))
          }
        </ScrollView>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              value={this.state.name}
              onChangeText={value => this.updateInput('name', value)}
              style={styles.input}
              placeholder='Book name'
            />
            <TextInput
              value={this.state.author}
              onChangeText={value => this.updateInput('author', value)}
              style={styles.input}
              placeholder='Author Name'
            />
          </View>
          <TouchableOpacity onPress={this.addBook}>
            <View style={styles.addButtonContainer}>
              <Text style={styles.addButton}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderTopColor: '#ededed',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100
  },
  inputWrapper: {
    flex: 1
  },
  input: {
    height: 44,
    padding: 7,
    backgroundColor: '#ededed',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
    marginBottom: 5
  },
  addButton: {
    fontSize: 28,
    lineHeight: 28
  },
  addButtonContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#ededed',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  container: {
    flex: 1
  },
  booksContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    flex: 1
  },
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: 'center'
  },
  book: {
    padding: 20
  },
  name: {
    fontSize: 18
  },
  author: {
    fontSize: 14,
    color: '#999'
  }
})

const mapDispatchToProps = {
  dispatchAddBook: (book) => addBook(book),
  dispatchRemoveBook: (book) => removeBook(book)
}

const mapStateToProps = (state) => ({
  books: state.bookReducer.books
})


export default connect(mapStateToProps, mapDispatchToProps)(Books)

