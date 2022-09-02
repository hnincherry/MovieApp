import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StyledUpcomingCard } from '../../../theme'
import { ButtonCom, ImageCom, TextCom } from '../../common'


export const UpcomingMovieCard = (props) => {
    return(
        <StyledUpcomingCard>
            <View style={styles.container}>
                <View style={{padding: 8}}>
                    <ImageCom/>
                </View>
                <View style={{paddingTop: 5,flex:1}}>
                    <TextCom font='big'>{props.title}</TextCom>
                    <View style={{ width: 210,flex:1}}>
                        <Text style={{flex:1}}>In this second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his...  </Text>
                        
                    </View>
                    <ButtonCom/>
                    
                </View>
                
            </View>
        </StyledUpcomingCard>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    }
})