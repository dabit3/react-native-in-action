import React from 'react'
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native'

class HomeWorld extends React.Component {
  state = {
    data: {},
    loading: true
  }
  
  componentDidMount() {
    if (!this.props.url) return
    const url = this.props.url.replace(/^http:\/\//i, 'https://')
    fetch(url)
      .then(res => res.json())
      .then(json => {
        this.setState({ data: json, loading: false })
      })
      .catch((err) => console.log('err:', err))
  }

  render() {
    const { data } = this.state
    return (
      <View style={styles.container}>
        {
          this.state.loading ? (
            <ActivityIndicator color='#ffe81f' />
          ) : (
            <View style={styles.HomeworldInfoContainer}>
              <TextContainer label="Name" info={data.name} />
              <TextContainer label="Population" info={data.population} />
              <TextContainer label="Climate" info={data.climate} />
              <TextContainer label="Gravity" info={data.gravity} />
              <TextContainer label="Terrain" info={data.terrain} />
              <TextContainer label="Diameter" info={data.diameter} />
              <Text style={styles.closeButton} onPress={this.props.closeModal}>
                Close Modal
              </Text>
            </View>
          )
        }
      </View>
    )
  }
}

const TextContainer = ({ label, info }) => <Text style={styles.text}>{label}: {info}</Text>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingTop: 20
  },
  HomeworldInfoContainer: {
    padding: 20
  },
  text: {
    color: '#ffe81f',
  },
  closeButton: {
    paddingTop: 20,
    color: 'white',
    fontSize: 14
  }
})

export default HomeWorld
