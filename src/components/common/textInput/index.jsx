import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StyledTextInput } from '../../../theme'


const TextinputCom = (props) => {

  return (
    <View>
      
        <StyledTextInput {...props}/>
        

      
      {/* <Text>Movie {movie}</Text> */}
    </View>

  )
}

export default TextinputCom