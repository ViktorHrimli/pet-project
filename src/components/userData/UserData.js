
import { useState, useEffect } from 'react';
import avatar from "./avatar/avatar.jpg"

import { Container, UserContainer, UserTitle, UserPhotoContainer, UserPhoto, EditInput, EditInputBtn, UserLogOutBtn, UserForm } from './styles/UserData.styles';


const UserData = (data) => {
const [isNameDisabled, setIsNameDisabled] = useState(true);
const [isEmaillDisabled, setIsEmailDisabled] = useState(true);
const [isBirthdayDisabled, setIsBirthdayDisabled] = useState(true);
const [isPhoneDisabled, setIsPhoneDisabled] = useState(true);
const [isCityDisabled, setIsCityDisabled] = useState(true);

const [userName, setUserName] = useState('');
const [userEmail, setUserEmail] = useState('');
const [userBirthday, setUserBirthday] = useState('');
const [userPhone, setUserPhone] = useState('');
const [userCity, setUserCity] = useState('');

// const [togle, setTogle] = useState(false)


const handleButtonClick = (e, userValue, isDisabled, setIsDisabled) => {
  e.preventDefault()
  const { value } = e.currentTarget.attributes.name;
  if (isDisabled) {
    setIsDisabled(false);
  } else {
    // changeData({ [value]: userValue });
    setIsDisabled(true);

  }
};

const handleInputChange = evt => {
  const { name, value } = evt.currentTarget;

  switch (name) {
    case 'userName':
      setUserName(value);
      break;

    case 'userEmail':
      setUserEmail(value);
      break;

    case 'userBirthday':
      setUserBirthday(value);
      break;

    case 'userPhone':
      setUserPhone(value);
      break;

    case 'userCity':
      setUserCity(value);
      break;

    default:
      return;
  }
};


  return (
    <Container>
      <UserTitle>My information</UserTitle>
      <UserContainer>
        <UserPhotoContainer>
          <UserPhoto src={avatar} alt="img" width="250px" height="250px"/>
          <input type="file"/>
        </UserPhotoContainer>
      <UserForm>
        <label>Name:
        <EditInput type={"text"} name="userName" onInput={handleInputChange} disabled={isNameDisabled} value={userName}/>
        </label>
        <EditInputBtn name="name" type="submit" onClick={e => {handleButtonClick(e, userName, isNameDisabled, setIsNameDisabled)}}>кнопка</EditInputBtn>
      </UserForm>
      <UserForm>
        <label>Email:
        <EditInput type={"text"} name="userEmail" onInput={handleInputChange} disabled={isEmaillDisabled} value={userEmail}/>
        </label>
        <EditInputBtn name="email" type="submit" onClick={e => {handleButtonClick(e, userEmail, isEmaillDisabled, setIsEmailDisabled)}}>кнопка</EditInputBtn>
      </UserForm>
      <UserForm>
        <label>Birthday:
        <EditInput type={"text"} name="userBirthday" onInput={handleInputChange} disabled={isBirthdayDisabled} value={userBirthday}/>
        </label>
        <EditInputBtn name="birthday" type="submit" onClick={e => {handleButtonClick(e, userBirthday, isBirthdayDisabled, setIsBirthdayDisabled)}}>кнопка</EditInputBtn>
      </UserForm>
      <UserForm>
        <label>Phone:
        <EditInput type={"text"} name="userPhone" onInput={handleInputChange} disabled={isPhoneDisabled} value={userPhone}/>
        </label>
        <button name="phone" type="submit" onClick={e => {handleButtonClick(e, userPhone, isPhoneDisabled, setIsPhoneDisabled)}} >кнопка</button>
      </UserForm>
      <UserForm>
        <label>City:
        <EditInput type={"text"} name="userCity" onInput={handleInputChange} disabled={isCityDisabled} value={userCity}/>
        </label>
        <EditInputBtn name="city" type="submit" onClick={e => {handleButtonClick(e, userCity, isCityDisabled, setIsCityDisabled)}} >кнопка</EditInputBtn>
      </UserForm>

      <UserLogOutBtn type='button'> Log Out</UserLogOutBtn>
      </UserContainer>
    </Container>
  )
}

export default UserData;

