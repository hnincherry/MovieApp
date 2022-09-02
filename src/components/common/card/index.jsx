import React from 'react'
import { StyledCard, StyledImage} from '../../../theme'


export const CardCom = props => {
    return(
        <StyledCard {...props} onPress={_ => alert("Card")}>
            
        </StyledCard> 
    )
}