import styled from 'styled-components';
import ClockBackground from './ClockBackground';
import ClockPointer from '../pointer/ClockPointer';
import { useEffect, useState } from 'react';
import City from './City';
import Time from './Time';

const Clock = (props) => {
    const [light,setLight] = useState(true)
    const [hourDeg,setHourDeg] = useState(0);
    const [MinuteDeg,setMinuteDeg] = useState(0);
    const [secondDeg,setSecondDeg] = useState(0);
    const [Day,setDay] = useState(0);
    const [Hour,setHour] = useState();

    const deg = 6

    const setTime = () => {
        let nowTime = new Date();
        let day = new Date(nowTime.getTime() + props.timezone * 3600000)
        let hour = day.getUTCHours() * deg * 5
        let minute = day.getUTCMinutes() * deg
        let second = day.getUTCSeconds() * deg
        let displayDay = new Date(day.getUTCFullYear(),day.getUTCMonth(),day.getUTCDate(),day.getUTCHours(),day.getUTCMinutes(),day.getUTCSeconds())

        setHourDeg(hour + minute / 12)
        setMinuteDeg(minute + second / 60)
        setSecondDeg(second)
        setHour(day.getUTCHours())
        setDay(displayDay.toString())
        
    }

    useEffect(() => {
        setTime()
        const interval = setInterval(() => {
            setTime()
        },100)
    },[])

    useEffect(() => {
        if (+Hour >= 19 || +Hour < 6){
            setLight(false)
        }
    },[Hour])

    return (
        <ClockBackground>
            <City city={props.city}/>
            <ClockPointer is_white={light}
            hourDeg = {hourDeg}
            minuteDeg = {MinuteDeg}
            secondDeg = {secondDeg}
            />
            <Time day = {Day} />
        </ClockBackground>
    );
};

export default Clock;