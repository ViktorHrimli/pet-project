import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import avatar from "./avatar/avatar.jpg"


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

// const handeTogle = () => {
//   setIsNameDisabled(prev => {return !prev})
// }

// const handleBtnClick = e => {
//   const { value } = e.currentTarget.attributes.name;
//    setUserName(value);
//    if(isNameDisabled) {
//     setIsNameDisabled(false)
//    }

// }

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
    <div>
      <img src={avatar} alt="img" width="250px" height="250px"/>
      <input type="file"/>
      <form>
        <label>Name:
        <input type={"text"} name="userName" onInput={handleInputChange} disabled={isNameDisabled} value={userName}/>
        </label>
        <button name="name" type="submit" onClick={e => {handleButtonClick(e, userName, isNameDisabled, setIsNameDisabled)}}>кнопка</button>
      </form>
      <form>
        <label>Email:
        <input type={"text"} name="userEmail" onInput={handleInputChange} disabled={isEmaillDisabled} value={userEmail}/>
        </label>
        <button name="email" type="submit" onClick={e => {handleButtonClick(e, userEmail, isEmaillDisabled, setIsEmailDisabled)}}>кнопка</button>
      </form>
      <form>
        <label>Birthday:
        <input type={"text"} name="userBirthday" onInput={handleInputChange} disabled={isBirthdayDisabled} value={userBirthday}/>
        </label>
        <button name="birthday" type="submit" onClick={e => {handleButtonClick(e, userBirthday, isBirthdayDisabled, setIsBirthdayDisabled)}}>кнопка</button>
      </form>
      <form>
        <label>Phone:
        <input type={"text"} name="userPhone" onInput={handleInputChange} disabled={isPhoneDisabled} value={userPhone}/>
        </label>
        <button name="phone" type="submit" onClick={e => {handleButtonClick(e, userPhone, isPhoneDisabled, setIsPhoneDisabled)}} >кнопка</button>
      </form>
      <form>
        <label>City:
        <input type={"text"} name="userCity" onInput={handleInputChange} disabled={isCityDisabled} value={userCity}/>
        </label>
        <button name="city" type="submit" onClick={e => {handleButtonClick(e, userCity, isCityDisabled, setIsCityDisabled)}} >кнопка</button>
      </form>

      <button type='button'> Log Out</button>
    </div>
  )
}

export default UserData;

