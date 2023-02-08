import {  FriendName, FriendItem, DataFriendCont, FriendImg, ItemData, Button, FriendsText, TimeList, TimeItem, Span} from './FriendsItem.styled'
import { useState } from 'react';

export const FiendsItem = ({photo, name,email,time,adress,phone}) => {
    const [timeSchedule, setTimeSchedule] = useState(false);
// console.log(key)
    const handleToggle = () => {
        setTimeSchedule(state => !state)
    };
    return (
        <>
            <FriendItem>
                <FriendName>{name}</FriendName>
                <DataFriendCont>
                    <div style={{width: '110px', height: '78'}}>
                        <FriendImg src={photo} alt={name}></FriendImg>
                    </div>
                    <div>
                        <ul>
                            <ItemData>
                                Time:
                                <Button onClick={handleToggle}>{time}</Button>
                            </ItemData>
                            <ItemData>
                                Adress:
                                {!adress ?<FriendsText>---------------------------------</FriendsText> :<FriendsText>{adress}</FriendsText> }
                                {/* <FriendsText>{adress}</FriendsText> */}
                            </ItemData>
                            <ItemData>
                                Email:
                                <FriendsText>{email}</FriendsText>
                            </ItemData>
                            <ItemData>
                                Phone:
                                <FriendsText>{phone}</FriendsText>
                            </ItemData>
                        </ul>
                    </div>
                </DataFriendCont>
                {
                    timeSchedule && <TimeList>
                        <TimeItem>MN<Span>8:00-19:00</Span></TimeItem>
                        <TimeItem>MN<Span>8:00-19:00</Span></TimeItem>
                        <TimeItem>MN<Span>8:00-19:00</Span></TimeItem>
                        <TimeItem>MN<Span>8:00-19:00</Span></TimeItem>
                        <TimeItem>MN<Span>8:00-19:00</Span></TimeItem>
                        <TimeItem>MN<Span>8:00-19:00</Span></TimeItem>
                        <TimeItem>MN<Span>8:00-19:00</Span></TimeItem>
                    </TimeList>
                }           
            
            </FriendItem>
            
        </>
    )
}