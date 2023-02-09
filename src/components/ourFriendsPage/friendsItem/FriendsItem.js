import {  FriendName, FriendItem, DataFriendCont, ContImg, FriendImg, ContData, ItemData, Button, FriendsText, TimeList, TimeItem, Span} from './FriendsItem.styled'
import { useState } from 'react';


export const FiendsItem = ({image, name,email,time,adress,phone}) => {
    const [timeSchedule, setTimeSchedule] = useState(false);

    const handleToggle = () => {
        setTimeSchedule(state => !state)
    };
    return (
        <>
            <FriendItem>
                <FriendName>{name}</FriendName>
                <DataFriendCont>
                    <ContImg>
                        <FriendImg src={image} alt={name}></FriendImg>
                    </ContImg>
                    <ContData>
                        <ul>
                            <ItemData>
                                Time:
                                {!time ? <Button onClick={handleToggle}>---------------------------------</Button> : <Button onClick={handleToggle}>{time[0].monday}</Button>}
                                
                            </ItemData>
                            <ItemData>
                                Adress:
                                {!adress ?<FriendsText>---------------------------------</FriendsText> :<FriendsText>{adress}</FriendsText> }
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
                    </ContData>
                </DataFriendCont>
                {
                    timeSchedule && 
                    <TimeList>
                        <TimeItem>MN<Span>{time[0].monday}</Span></TimeItem>
                        <TimeItem>TU<Span>{time[0].tuesday}</Span></TimeItem>
                        <TimeItem>WE<Span>{time[0].wednesday}</Span></TimeItem>
                        <TimeItem>TH<Span>{time[0].thursday}</Span></TimeItem>
                        <TimeItem>FR<Span>{time[0].friday}</Span></TimeItem>
                        <TimeItem>SA<Span>{time[0].saturday}</Span></TimeItem>
                        <TimeItem>SU<Span>{time[0].sunday}</Span></TimeItem>
                    </TimeList>
                }           
            
            </FriendItem>
        </>
    )
}