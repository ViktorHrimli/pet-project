import { useState, useRef } from 'react';
import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types';
import {
    FriendName,
    FriendNameLink,
    FriendItem,
    DataFriendCont,
    ContImg,
    FriendImg,
    ContData,
    ItemData,
    Button,
    FriendsText,
    TimeList,
    TimeItem,
    Span,
    DivCont
} from 'components/ourFriendsPage/friendsItem/FriendsItem.styled'

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

export const FriendsItem = ({image, name,email,time,address,phone, urlFriend}) => {
    const [timeSchedule, setTimeSchedule] = useState(false);
    const nodeRef = useRef(null);
    
    const handleToggle = () => {
        setTimeSchedule(state => !state)
    };
    return (
        <>
            <FriendItem>
                {urlFriend ?
                    <FriendNameLink href={urlFriend} target="_blank" rel="noreferrer noopener">
                        <FriendName>{name}</FriendName>
                    </FriendNameLink> :
                    <FriendName>{name}</FriendName>}
                <DataFriendCont>
                    <ContImg>
                        <FriendImg src={image} alt={name}></FriendImg>
                    </ContImg>
                    <ContData>
                        <ul>
                            <ItemData>
                                {time ?
                                    <DivCont>
                                        <p style={{margin: "0"}}> Time:</p>
                                        <Button onClick={handleToggle}>
                                            {time.monday}</Button>
                                    </DivCont> :
                                    <>
                                        <p style={{margin: "0"}}>Time:</p> 
                                        <Button disabled style={{ cursor: "inherit" }}>---------------------------------</Button>
                                    </>
                                }
                            </ItemData>
                            <ItemData>
                                Adress:
                                {!address ? <FriendsText>---------------------------------</FriendsText> :
                                    <FriendsText>{address}</FriendsText>
                                }
                            </ItemData>
                            <ItemData>
                                {email ? 
                                    <DivCont>
                                        <p style={{margin: "0"}}>Email:</p>
                                        <a href={`mailto:${email}`}>
                                            <FriendsText>{email}</FriendsText>
                                        </a>
                                    </DivCont> :
                                    <>
                                        <p>Email:</p>
                                        <FriendsText>---------------------------------</FriendsText>
                                    </>
                                    
                                }
                                
                            </ItemData>
                            <ItemData>
                                
                                {phone ?
                                    <DivCont>
                                        <p style={{ margin: "0" }}>Phone:</p>
                                        <a href={`tel:${phone}`}>
                                            <FriendsText>{phone}</FriendsText>
                                        </a>
                                    </DivCont> :
                                    <>
                                        <p style={{ margin: "0" }}>Phone:</p>
                                        <FriendsText>---------------------------------</FriendsText>
                                    </>
                                }
                            </ItemData>
                        </ul>
                    </ContData>
                </DataFriendCont>

                 {time &&
                    <Transition nodeRef={nodeRef} in={timeSchedule} timeout={duration} unmountOnExit>
                        {state => (
                    <TimeList ref={nodeRef} style={{...defaultStyle,
                        ...transitionStyles[state]}}>
                        <TimeItem>MN<Span>{time.monday}</Span></TimeItem>
                        <TimeItem>TU<Span>{time.tuesday}</Span></TimeItem>
                        <TimeItem>WE<Span>{time.wednesday}</Span></TimeItem>
                        <TimeItem>TH<Span>{time.thursday}</Span></TimeItem>
                        <TimeItem>FR<Span>{time.friday}</Span></TimeItem>
                        <TimeItem>SA<Span>{time.saturday}</Span></TimeItem>
                        <TimeItem>SU<Span>{time.sunday}</Span></TimeItem>
                    </TimeList>
                        )}
                </Transition>
                }           
            
            </FriendItem>
        </>
    )
}

FriendsItem.propType = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    time: PropTypes.any.isRequired,
    adress: PropTypes.any.isRequired,
    phone: PropTypes.any.isRequired,
}