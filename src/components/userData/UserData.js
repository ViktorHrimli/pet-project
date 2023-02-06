import { useState, useEffect } from 'react';
import { useUpdateUserInfoMutation } from 'redux/user/UserApi';
// import { useCurrentUserQuery } from '../../redux/auth/slice';

import {
  User,
  Title,
  UserPhoto,
  Photo,
  PhotoEditLabel,
  PhotoEdit,
  UserContainer,
} from './styles/UserData.styles';
import UserDataItem from '../../components/userDataItem/UserDataItem';
import photo from 'images/noImage/noImage.jpg';
import EditPhotoIcon from 'images/svg/camera.svg';

const UserData = () => {
  // const { data = [] } = useCurrentUserQuery();

  const [tempImg, setTempImg] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [changeData] = useUpdateUserInfoMutation();

  // const { avatarURL } = data;

  const onImageChange = e => {
    const { files } = e.currentTarget;
    if (files) {
      setTempImg(URL.createObjectURL(files[0]));
      setAvatar(files[0]);
    }
  };

  useEffect(() => {
    if (avatar) {
      const update = new FormData();
      update.append('avatarURL', avatar);
      changeData(update);
    }
  }, [avatar, changeData]);

  return (
    <UserContainer>
      <Title>My information:</Title>
      <User>
        <UserPhoto>
          <Photo src={tempImg || photo} alt="avatarURL" />
          <form encType="multipart/form-data">
            <PhotoEditLabel>
              <img src={EditPhotoIcon} alt="Edit" />
              <PhotoEdit
                type="file"
                name="avatarURL"
                accept=".png, .jpg, .jpeg"
                onChange={onImageChange}
              />
              Edit photo
            </PhotoEditLabel>
          </form>
        </UserPhoto>
        <UserDataItem data={photo} changeData={changeData} />
      </User>
    </UserContainer>
  );
};

export default UserData;

