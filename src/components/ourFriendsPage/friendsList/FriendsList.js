import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SectionFriends, Title, ListOfFriends } from './FriendsList.styled';
import Container from 'components/container/Container';
import { fetchFriends } from "redux/friends/operation";
import { FiendsItem } from '../friendsItem/FriendsItem';
import { selectorFriends } from "redux/friends/selectors";
import friends from 'components/friends.json';


export const FriendsList = () => {
    const dispatch = useDispatch();

    const getFriends = useSelector(selectorFriends)
    useEffect(() => {
      dispatch(fetchFriends())  
    },[dispatch])
    
console.log(getFriends)
    return (
        <SectionFriends>
            <Container>
                <Title>Our friend</Title>
                <ListOfFriends>
                    {friends.map(friend => <FiendsItem key={friend.id} photo={friend.avatar} name={friend.name} time={friend.time} email={friend.email} adress={friend.adress} phone={friend.phone} />)}
                </ListOfFriends>
                
                
            </Container>
        </SectionFriends>
    )

};