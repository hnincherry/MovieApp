import styled from "styled-components";
import { height } from "../../attribute";

export const StyledCard = styled.TouchableOpacity `
    background-color: white;
    width: 100px;
    margin: 10px;
    height: 190px;
    border-radius: 10px;
    elevation: 2;
`

export const StyledUpcomingCard = styled.TouchableOpacity `
    background-color: white;
    margin-top: 10px;
    margin-right: 20px;
    margin-left: 5px;
    border-radius: 10px;
    height: 160px;
    elevation: 2;
  
`

export const StyledImage = styled.Image `
    width: ${props => props.imgWidth === 'lg' ? '100px' : '90px'};
    height: ${props => props.imgHeight === 'sm' ? '120px' : '145px'};
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    
`
