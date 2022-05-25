import styled from 'styled-components';
import { useEffect, useState } from 'react';

const TimeStyle = styled.div`
    width: ${(props)=>props.size}px;
    height: ${(props)=>props.size}px;
    padding: 1rem;
    font-size: ${(props)=>props.font_size}px;
`
TimeStyle.defaultProps = {
    font_size:"10px"
}
const Time = (props) => {
    // const [currentTime,setCurrentTime] = useState();
     
    // const setTime = () => {
        // let nowTime = new Date();
        // console.log(nowTime);
    // }
    // useEffect(() => {
    //     setTime()
    //     const interval = setInterval(() => {
    //         setTime()
    //     },100)
    // },[])
    return ( <TimeStyle>{props.day}</TimeStyle> );
}
 
export default Time;
