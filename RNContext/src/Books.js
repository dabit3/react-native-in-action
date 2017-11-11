import React from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'

import { connect } from 'react-redux'

class Books extends React.Component<{}> {
  render() {
    const { books } = this.props
    console.log('books:', books)
    return (
      <View>
        <Text style={styles.title}>Books</Text>
        <View style={styles.booksContainer}>
          {
            books.map((book, index) => (
              <View style={styles.book}>
                <Text style={styles.name}>{book.name}</Text>
                <Text style={styles.author}>{book.author}</Text>
              </View>
            ))
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  booksContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
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

const mapStateToProps = (state) => ({
  books: state.bookReducer.books
})

export default connect(mapStateToProps)(Books)

