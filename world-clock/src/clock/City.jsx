import styled from 'styled-components';

const CityStyle =  styled.div`
    width: ${(props)=>props.size}px;
    height: ${(props)=>props.size}px;
    padding: 1rem;
    font-size: ${(props)=>props.font_size}px;
`
CityStyle.defaultProps = {
    font_size:"30px"
}

const City = (props) => {
    return ( <CityStyle>{props.city}</CityStyle> );
}
 
export default City;