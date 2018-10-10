import React, { Component } from 'react'
import { Text, View, TabBarIOS } from 'react-native'

const Item = TabBarIOS.Item

class TabBarIOSExample extends Component {

  constructor() {
    super()
    this.state = {
      selectedTab: 'history',
    }
    this.renderView = this.renderView.bind(this)
  }

  renderView(tab) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello from {tab}</Text>
      </View>
    )
  }

  render() {
    return (
      <TabBarIOS>
        <Item
          systemIcon="history"
          onPress={() => this.setState({ selectedTab: 'history' })}
          selected={this.state.selectedTab === 'history'}
        >
          {this.renderView('History')}
        </Item>
        <Item
          systemIcon='favorites'
          onPress={() => this.setState({ selectedTab: 'favorites' })}
          selected={this.state.selectedTab === 'favorites'}
        >
          {this.renderView('Favorites')}
        </Item>
      </TabBarIOS>
    )
  }
}

export default TabBarIOSExample
