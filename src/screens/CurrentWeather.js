import React from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'

const currentWeather = () => {
  const {
    container,
    wrapper,
    temp,
    feels,
    highLow,
    highLowWrapper,
    bodyWrapper,
    description,
    message
  } = styles
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels Like 5</Text>
        <RowText
          messageOne={'High: 8'}
          messageTwo={'Low: 6'}
          containerStyles={highLowWrapper}
          messageOneSyles={highLow}
          messageTwoSyles={highLow}
        />
      </View>
      <RowText
        messageOne={'Its Sunny'}
        messageTwo={'Its Perfect T-shirt Weather'}
        containerStyles={bodyWrapper}
        messageOneSyles={description}
        messageTwoSyles={message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#ffe'
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    color: 'black',
    fontSize: 30
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: { fontSize: 30 }
})
export default currentWeather
