import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { TextCom } from '../components/common/typo'

import { MainContainer, StyledText } from '../theme'
import { PopularMovieCard, UpcomingMovieCard } from '../components/custom/movie'

import { useSelector, useDispatch } from 'react-redux'

import { setPopularData } from '../store/reducer/popularSlice'
import { setUpcomingData } from '../store/reducer/upcomingSlice'

import axios from "axios";
import { routes } from '../controller/constant/routes'


const baseUrl = 'https://api.themoviedb.org/3/movie/'
export const client = axios.create()

client.interceptors.request.use(async (config) => {
  config.baseURL = baseUrl
  // console.log("Config", config)

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


const Home = _ => {
  const popular_data = useSelector(state => state.popular)
  const upcoming_data = useSelector(state => state.upcoming)

  const dispatch = useDispatch()

  const fetchPopularApi = async () => {
    let res = await client.get(routes.popular)
    dispatch(setPopularData(res))

    // console.log('res', res)
  }

  const fetchUpcomingApi = async () => {
    let res = await client.get(routes.upcoming)
    dispatch(setUpcomingData(res))

    // console.log('result ', res.data)
  }

  useEffect(() => {

    fetchPopularApi()
    fetchUpcomingApi()

  }, [])

 
  // console.log('Popular Data Here ', popular_data.popular_data?.results)
  // console.log('Upcoming Data Here ', upcoming_data)

  const DATA = [
    {
      id: '1',
      title: 'First Item',
    },
    {
      id: '2',
      title: 'Second Item',
    },
    {
      id: '3',
      title: 'Third Item',
    },
  ];

  const renderPopularItem = ({ item }) => (
    <PopularMovieCard title={item.title} />
  );

  const renderUpcomingItem = ({ item }) => (
    <UpcomingMovieCard title={item.title} />
  );
  return (

    <MainContainer>
      <TextCom>Popular Movies</TextCom>
      <FlatList
        horizontal
        data={popular_data?.popular_data?.results}
        renderItem={renderPopularItem}
        keyExtractor={item => item.id}
      />

      <TextCom>Upcoming Movies</TextCom>

      <FlatList
        data={upcoming_data?.upcoming_data?.results}
        renderItem={renderUpcomingItem}
        keyExtractor={item => item.id}
      />

      {/* <StyledText color='danger'>Test ThemeProvider</StyledText> */}

    </MainContainer>


  )
}

export default Home


