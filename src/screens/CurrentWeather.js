import React from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { WeatherType } from '../utilities/WeatherType'

// Shows the current weather

const CurrentWeather = ({ weatherData }) => {
  const {
    container,
    wrapper,
    tempStyles,
    feels,
    highLow,
    highLowWrapper,
    bodyWrapper,
    description,
    message
  } = styles
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = weatherData

  const weatherCondition = weather[0].main

  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: WeatherType[weatherCondition].backgroundColor }
      ]}
    >
      <View style={container}>
        <Feather
          name={WeatherType[weatherCondition].icon}
          size={100}
          color="white"
        />
        <Text style={tempStyles}>{`${temp}°`}</Text>
        <Text style={feels}>{`Feels like ${feels_like}°`}</Text>
        <RowText
          messageOne={`High: ${temp_max}° `}
          messageTwo={`Low: ${temp_min}°`}
          containerStyles={highLowWrapper}
          messageOneSyles={highLow}
          messageTwoSyles={highLow}
        />
      </View>
      <RowText
        messageOne={weather[0].description}
        messageTwo={WeatherType[weatherCondition].message}
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
  tempStyles: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 48
  },
  feels: {
    color: '#fff',
    fontSize: 30
  },
  highLow: {
    color: '#fff',
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
  message: {
    fontSize: 30,
    fontWeight: 'bold'
  }
})

export default CurrentWeather
