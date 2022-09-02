import React from 'react'
import { StyleSheet, View } from 'react-native'
import { StyledImage } from '../../../theme'


export const ImageCom = (props) => {
    return (
        <View>
            <StyledImage source=
                {{
                    uri: 'https://image.tmdb.org/t/p/w500/r7XifzvtezNt31ypvsmb6Oqxw49.jpg'
                }}
                {...props}
            />
        </View>

    )
}

