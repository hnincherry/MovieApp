import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Iconicons from 'react-native-vector-icons/Ionicons'
import { StyledTextInput } from '../theme'

import axios from 'axios'
import { routes } from '../controller/constant/routes'
import { UpcomingMovieCard } from '../components/custom/movie'

const baseUrl = 'https://api.themoviedb.org/3/search/movie'
export const client = axios.create()

client.interceptors.request.use(async (config) => {
  config.baseURL = baseUrl

  return config
}, (error) => {
  return Promise.reject(error)
})

client.interceptors.response.use(async (response) => {
  if (!response.data) {
    return Promise.reject(error)
  }
  return response
}, async (error) => {
  return Promise.reject(error)
})


const Search = (props) => {

  const [movie, setMovie] = useState('')
  const [searchData, setSearchData] = useState([])

  const fetchSearchApi = async (movie) => {

    const searchUrl = routes.search + movie

    let res = await client.get(searchUrl)

    setSearchData(res.data.results)

    console.log('result ', res.data.results)
    console.log('SearchData ', searchData)

  }


  const renderUpcomingItem = ({ item }) => (
    <UpcomingMovieCard title={item.title} />
  );

  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <StyledTextInput
          placeholder='Search Movie Name'
          value={movie}
          onChangeText={movie => setMovie(movie)}
        />
        <TouchableOpacity onPress={() => fetchSearchApi(movie)}>
          <Iconicons
            name='search'
            color='purple'
            size={40}
            style={{ marginTop: 15, marginRight: 10 }} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={searchData}
        renderItem={renderUpcomingItem}
        keyExtractor={item => item.id}
      />

      {/* <UpcomingMovieCard title='res.'/> */}
      {/* <Text>{movie}</Text> */}
      {/* <Text>{JSON.stringify(res)}</Text> */}


    </View>
  )

}

export default Search