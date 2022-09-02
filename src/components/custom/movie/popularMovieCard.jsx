import React, { useState } from 'react'
import { StyledTitle } from '../../../theme'
import { ButtonCom, CardCom, ImageCom} from '../../common'


export const PopularMovieCard = (props) => {

    return(
        <CardCom>
            <ImageCom imgHeight='sm' imgWidth='lg'/>
            <StyledTitle>{props.title}</StyledTitle>
            <ButtonCom/>
        </CardCom>
    )
}