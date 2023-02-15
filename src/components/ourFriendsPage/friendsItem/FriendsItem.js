import { useState, useRef } from 'react';
import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types';
import {
    FriendName,
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
    TimeCont
} from 'components/ourFriendsPage/friendsItem/FriendsItem.styled'



const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

export const FriendsItem = ({image, name,email,time,adress,phone, urlFriend}) => {
    const [timeSchedule, setTimeSchedule] = useState(false);
    const nodeRef = useRef(null);
    const handleToggle = () => {
        setTimeSchedule(state => !state)
    };
    return (
        <>
            <FriendItem>
                {urlFriend ?
                    <a href={urlFriend} target="_blank" rel="noreferrer noopener"><FriendName>{name}</FriendName></a> :
                    <FriendName>{name}</FriendName>}
                <DataFriendCont>
                    <ContImg>
                        <FriendImg src={image} alt={name}></FriendImg>
                    </ContImg>
                    <ContData>
                        <ul>
                            <ItemData>
                                {time ?
                                    <TimeCont>
                                        <p style={{margin: "0"}}> Time:</p>
                                        <Button onClick={handleToggle}>{time.monday}</Button>
                                    </TimeCont> :
                                    <>
                                        <p>Time:</p> 
                                        <Button disabled style={{ cursor: "inherit" }}>---------------------------------</Button>
                                    </>
                                }
                            </ItemData>
                            <ItemData>
                                Adress:
                                {!adress ? <FriendsText>---------------------------------</FriendsText> :
                                    <FriendsText>{adress}</FriendsText>
                                }
                            </ItemData>
                            <ItemData>
                                Email:
                                {!email ? <FriendsText>---------------------------------</FriendsText> :
                                    <a href={`mailto:${email}`}>
                                        <FriendsText>{email}</FriendsText>
                                    </a>
                                }
                                
                            </ItemData>
                            <ItemData>
                                Phone:
                                {!phone ?
                                    <FriendsText>---------------------------------</FriendsText> :
                                    <a href={`tel:${phone}`}>
                                        <FriendsText>{phone}</FriendsText>
                                    </a>}
                                
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