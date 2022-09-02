import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export const ButtonCom = (props) => {


    const [favorite, setFavorite] = useState(false)

    const handleChange = () => {
        setFavorite(!favorite)
    }
    return (
        <TouchableOpacity style={{ flex: 1, marginTop: 8 }}
            onPress={_ => handleChange()}>
            <Ionicons
                name={favorite ? 'heart' : 'heart-outline'}
                color='#e91e63'
                size={20}

            />
        </TouchableOpacity>

    )
}