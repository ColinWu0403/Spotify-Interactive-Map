import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const RowText = (props) => {
  const {
    messageOne,
    messageTwo,
    containerStyles,
    messageOneStyles,
    messageTwoStyles
  } = props

  return (
    <View style={containerStyles}>
      <Text style={styles.messStyle}>{messageOne}</Text>
      <Text style={styles.messStyle}>{messageTwo}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  messStyle: {
    fontSize: 20,
    color: '#fff',
    marginTop: 10
  }
})
export default RowText
