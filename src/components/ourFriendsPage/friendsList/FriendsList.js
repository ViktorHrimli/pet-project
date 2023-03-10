import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Section from 'components/section/Section'
import { Title, ListOfFriends } from 'components/ourFriendsPage/friendsList/FriendsList.styled';
import { fetchFriends } from "../../../redux/friends/operation";
import { selectorFriends } from "../../../redux/friends/selectors";
import { FriendsItem } from 'components/ourFriendsPage/friendsItem/FriendsItem';



export const FriendsList = () => {
    const dispatch = useDispatch();

    const getFriends = useSelector(selectorFriends)
    useEffect(() => {
        dispatch(fetchFriends());
        window.scroll({ top: 0 });
    },[dispatch])
    
    return (
        <main>
            <Section>
                <Title>Our friends</Title>
                <ListOfFriends>
                    {getFriends.map(friend => <FriendsItem key={friend._id} id={friend._id} image={friend.imageURL}
                        name={friend.name} time={friend.time} email={friend.email} address={friend.address} phone={friend.phone} urlFriend={friend.pageURL} />)}
                </ListOfFriends>
                
            </Section>
        </main>
        
    )

};