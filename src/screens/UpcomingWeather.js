import React from 'react'
import {
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
  ImageBackground,
  StatusBar
} from 'react-native'
import ListItem from '../components/ListItem'

// This shits broke >:|

const UpcomingWeather = ({ weatherData }) => {
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
      <ImageBackground source={require('../../assets/bacon.png')} style={image}>
        <FlatList>
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        </FlatList>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#fff'
  },
  image: {
    flex: 1
    // height: 395,
    // width: 395
  }
})

export default UpcomingWeather
