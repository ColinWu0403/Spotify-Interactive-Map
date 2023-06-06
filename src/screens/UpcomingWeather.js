import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  StatusBar
} from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import ListItem from '../components/ListItem'

const DATA = [
  {
    dt_txt: '2022-08-30 16:00:00',
    main: {
      temp_min: 296.34,
      temp_max: 298.24
    },
    weather: [
      {
        main: 'Rain'
      }
    ]
  },
  {
    dt_txt: '2023-02-30 6:00:00',
    main: {
      temp_min: 126.34,
      temp_max: 228.24
    },
    weather: [
      {
        main: 'Snow'
      }
    ]
  },
  {
    dt_txt: '2022-12-30 12:00:00',
    main: {
      temp_min: 111.34,
      temp_max: 142.24
    },
    weather: [
      {
        main: 'Sunny'
      }
    ]
  }
]

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )

  const { container, image } = styles
  return (
    <SafeAreaView style={container}>
      <Text>UpcomingWeather</Text>
      {/* <ImageBackground source={require('../../assets/bacon.png')} style={image}> */}
      <FlatList>
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt_txt}
      </FlatList>
      {/* </ImageBackground> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  image: {
    flex: 1,
    height: 395,
    width: 395
  }
})

export default UpcomingWeather
