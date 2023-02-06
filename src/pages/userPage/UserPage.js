
import UserData from "components/userData/UserData";
import PetsData from "components/petsData/PetsData";
import { UserPageContainer } from "./UserPage.styles";

 const UserPage = () => {
  return (

    <UserPageContainer>
      <UserData/>
      <PetsData/>
    </UserPageContainer>
  )
};


export default UserPage;
