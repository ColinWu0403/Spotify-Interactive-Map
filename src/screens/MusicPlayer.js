import React, { useEffect, useState, useRef } from 'react'
import TrackPlayer, {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents
} from 'react-native-track-player'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList,
  Animated
} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'
import Slider from '@react-native-community/slider'
import songs from '../../models/data'

// Install these react packages:
// npm install --save react-native-vector-icons
// npm install @react-native-community/slider --save
// npm install --save react-native-track-player

const { width, height } = Dimensions.get('window')

const setUpPlayer = (async = async () => {
  try {
    await TrackPlayer.setupPlayer()
    await TrackPlayer.add(songs)
  } catch (e) {
    console.log(e)
  }
})

const togglePlayBack = async (playBackState) => {
  const currentTrack = await TrackPlayer.getCurrentTrack()
  if (currentTrack != null) {
    if (playBackState == State.Paused) {
      await TrackPlayer.play()
    } else {
      await TrackPlayer.pause()
    }
  }
}

const MusicPlayer = () => {
  const [songIndex, setSongIndex] = useState(0)

  const scrollX = useRef(new Animated.Value(0)).current

  useEffect(() => {
    scrollX.addListener(({ value }) => {
      // console.log(`ScrollX: ${value} | DeviceWidth: ${width}`)
      const index = Math.round(value / width)
      setSongIndex(index)
      // console.log(`Index: ${index}`)
    })
  }, [])

  const renderSongs = ({ item, index }) => {
    return (
      <Animated.View style={style.mainImageWrapper}>
        <View style={style.imageWrapper}>
          <Image source={item.artwork} style={style.musicImage} />
        </View>
      </Animated.View>
    )
  }

  return (
    <SafeAreaView style={style.container}>
      <View style={style.mainContainter}>
        {/* Image */}
        <Animated.FlatList
          renderItem={renderSongs}
          data={songs}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: { x: scrollX }
                }
              }
            ],
            { useNativeDriver: true }
          )}
        />

        {/* Song Content */}
        <View style={[style.songContent, style.songWrapper]}>
          <Text style={[style.songContent, style.songTitle]}>
            {songs[songIndex].title}
          </Text>
          <Text style={[style.songContent, style.songArtist]}>
            {songs[songIndex].artist}
          </Text>
        </View>

        {/* Slider */}
        <View>
          <Slider
            style={style.progressBar}
            minimumValue={0}
            maximumValue={100}
            thumbTintColor="#00e520"
            minimumTrackTintColor="#00e520"
            maximumTrackTintColor="#fff"
            onSlidingComplete={() => {}}
          />
        </View>

        {/* Music Duration */}
        <View style={style.progressLevelDuration}>
          <Text style={style.progressLabelText}>0:00</Text>
          <Text style={style.progressLabelText}>0:00</Text>
        </View>

        {/* Music Controls */}
        <View style={style.musicControlContainer}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons
              name={'play-skip-back-outline'}
              size={30}
              color={'#00e520'}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name={'ios-pause-circle'} size={65} color={'#00e520'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons
              name={'play-skip-forward-outline'}
              size={30}
              color={'#00e520'}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Bar */}
      <View style={style.bottomContainer}>
        <View style={style.bottomItemWrapper}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name={'heart-outline'} size={30} color={'#fff'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name={'repeat'} size={30} color={'#fff'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name={'share-outline'} size={30} color={'#fff'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name={'ellipsis-horizontal'} size={30} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831'
  },
  mainContainter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomContainer: {
    width: width,
    alignItems: 'center',
    paddingVertical: 10
    // borderTopColor: '#393e46',
    // borderWidth: 1
  },
  bottomItemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%'
  },
  mainImageWrapper: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageWrapper: {
    width: 300,
    height: 300,
    marginBottom: 0
  },
  musicImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10
  },
  songContent: {
    textAlign: 'center',
    color: '#fff'
  },
  songWrapper: {
    marginBottom: 75
  },
  songTitle: {
    fontSize: 18,
    fontWeight: 600
  },
  songArtist: {
    fontSize: 18,
    fontWeight: 300
  },
  progressBar: {
    width: 300,
    height: 40,
    marginTop: 25,
    bottom: 60,
    flexDirection: 'row'
  },
  progressLevelDuration: {
    width: 340,
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 60
  },
  progressLabelText: {
    color: '#fff',
    fontWeight: 500
  },
  musicControlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 15,
    bottom: 50
  }
})
export default MusicPlayer
