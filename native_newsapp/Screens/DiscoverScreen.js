import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const DiscoverScreen = () => {
  return (
    <View styles={{ ...styles.discover }}>
      {/* search */}
      <Text style={{...styles.subtitle, color: 'white'}}>
        Categories
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  discover: {
    padding: 10,
    alignItems: 'center'
  },
  subtitle: {
    paddingBottom: 8,
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 5,
    borderBottomColor: '#007FFF',
    borderBottomWidth: 5,
    alignSelf: 'flex-start',
    borderRadius: 10
  }
})

export default DiscoverScreen