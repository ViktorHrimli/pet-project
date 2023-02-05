import { SectionFriends, Title } from './FriendsList.styled'
import Container from 'components/container/Container';
import {FiendsItem} from '../friendsItem/FriendsItem'



export const FriendsList = () => {
    

    return (
        <SectionFriends>
            <Container>
                <Title>Our friend</Title>
                <FiendsItem/>
            </Container>
        </SectionFriends>
    )

};