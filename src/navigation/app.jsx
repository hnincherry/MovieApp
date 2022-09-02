import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons';

import Icon from '../asset/icon'

import Home from '../screen/Home'
import Search from '../screen/Search'
// import { FooterCom } from '../components/common/layout/footer'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const AppScreens = {
    Home,
    Search
}

const AppStackNavigator = () => {
    return(
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false,
                animation: 'fade',
            }}
        >
            {Object.entries({
                ...AppScreens
            }).map(([name, component]) =>(
                <Stack.Screen
                    name={name}
                    component={component}
                    options={props => ({
                        title: name,
                        headerTransparent: true,
                    })}
                />
            ))}
        </Stack.Navigator>
    )
}

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            initialRouteName='HomeTab'
            
            screenOptions={({ route }) => ({
                tabBarIcon: ({color,size}) => {
                    const icons = {
                        HomeTab: 'home-outline',
                        SearchTab: 'search'
                    }
                    return <Ionicons name={icons[route.name]} color={color} size={size} />
                },
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: '#e91e63'
            })}
            // tabBar={props => <FooterCom {...props}/>}
            
            
        >
            <Tab.Screen
                name='HomeTab'
                component={AppStackNavigator}
                options={{
                    tabBarLabel: 'Home',
                    // tabBarIcon: <Icon.HomeSvg/>,
                    // tabBarActiveIcon: <Icon.Home1Svg/>
                }}
                listeners={({navigation}) => ({
                    tabPress:(e) => {
                        e.preventDefault()
                        navigation.navigate('HomeTab', {screen: 'Home'})
                    }
                })}
            />
            <Tab.Screen
                name='SearchTab'
                component={AppStackNavigator}
                options={{
                    tabBarLabel: 'Search'
                }}
                listeners={({navigation}) => ({
                    tabPress: (e) => {
                        e.preventDefault()
                        navigation.navigate('SearchTab',{screen: 'Search'})
                    }
                })}
            />

        </Tab.Navigator>
    )
}

export default () => (
    BottomTabNavigator()
)