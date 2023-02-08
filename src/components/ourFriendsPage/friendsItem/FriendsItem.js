import {  FriendName, FriendItem, DataFriendCont, FriendImg, ItemData, Button, FriendsText, TimeList, TimeItem, Span} from './FriendsItem.styled'
import { useState } from 'react';
// import lev from 'images/fiends/lev.png';
// import barbos from 'images/fiends/barbos.png';
// import whiskas from 'images/fiends/whiskas.png'

export const FiendsItem = ({photo, name,email,time,adress,phone}) => {
    const [timeSchedule, setTimeSchedule] = useState(false);
// console.log(email)
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
                                        <FriendsText>{adress}</FriendsText>
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
                    {/* </FriendItem>
                    <FriendItem>
                        <FriendName>Барбос</FriendName>
                        <DataFriendCont>
                            <div style={{width: '110px', height: '78'}}>
                                <FriendImg src={barbos} alt="Барбос"></FriendImg>
                            </div>
                            <div>
                                <ul>
                                    <ItemData>
                                        Time:
                                        <Button onClick={handleToggle}>8:00-20:00</Button>
                                    </ItemData>
                                    <ItemData>
                                        Adress:
                                        <FriendsText>Grigorenka Street, 25 </FriendsText>
                                    </ItemData>
                                    <ItemData>
                                        Email:
                                        <FriendsText>barbos@gmail.com </FriendsText>
                                    </ItemData>
                                    <ItemData>
                                        Phone:
                                        <FriendsText>066 488 0480</FriendsText>
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
                    <FriendItem>
                        <FriendName>whiskas</FriendName>
                        <DataFriendCont>
                            <div style={{width: '110px', height: '78'}}>
                                <FriendImg src={whiskas} alt="Барбос"></FriendImg>
                            </div>
                            <div>
                                <ul>
                                    <ItemData>
                                        Time:
                                        <Button onClick={handleToggle}>------------------</Button>
                                    </ItemData>
                                    <ItemData>
                                        Adress:
                                        <FriendsText>------------------</FriendsText>
                                    </ItemData>
                                    <ItemData>
                                        Email:
                                        <FriendsText>barbos@gmail.com </FriendsText>
                                    </ItemData>
                                    <ItemData>
                                        Phone:
                                        <FriendsText>066 488 0480</FriendsText>
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
                        }   */}
                    </FriendItem>
            
        </>
    )
}