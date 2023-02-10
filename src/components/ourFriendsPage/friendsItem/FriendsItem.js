import {  FriendName, FriendItem, DataFriendCont, ContImg, FriendImg, ContData, ItemData, Button, FriendsText, TimeList, TimeItem, Span} from 'components/ourFriendsPage/friendsItem/FriendsItem.styled'
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
                                {!time ? <Button onClick={handleToggle}>---------------------------------</Button> : <Button onClick={handleToggle}>{time.monday}</Button>}
                                
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
                        <TimeItem>MN<Span>{time.monday}</Span></TimeItem>
                        <TimeItem>TU<Span>{time.tuesday}</Span></TimeItem>
                        <TimeItem>WE<Span>{time.wednesday}</Span></TimeItem>
                        <TimeItem>TH<Span>{time.thursday}</Span></TimeItem>
                        <TimeItem>FR<Span>{time.friday}</Span></TimeItem>
                        <TimeItem>SA<Span>{time.saturday}</Span></TimeItem>
                        <TimeItem>SU<Span>{time.sunday}</Span></TimeItem>
                    </TimeList>
                }           
            
            </FriendItem>
        </>
    )
}