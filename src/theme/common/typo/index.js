import styled from "styled-components";
import {color} from '../../../theme/attribute'

export const StyledHeader = styled.Text `
    font-size: 18px;
    color: black;
    font-weight: ${props => props.font === 'big' ? 'bold' : 'regular'};
    
`

export const StyledTitle = styled.Text `
    font-size: 14px;
    font-weight: bold;
    color: black;
`

export const StyledText = styled.Text`
    font-weight: bold;
    font-size: 100px;
    color: ${color.danger}
`