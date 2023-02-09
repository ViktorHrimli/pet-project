import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLoadingUpdate } from 'redux/user/selectors';
import { toggleIsDisablet } from 'redux/user/slice';
import { ReactComponent as UploadIcon } from '../../images/svg/camera.svg';
import { ReactComponent as UploadSubmit } from '../../images/svg/ci_edit.svg';
import { Photo, PhotoEdit } from './styles/UserData.styles';

export const UserPhoto = ({ avatar, watch, register, onSubmit }) => {
  const [edited, setEdited] = useState(false);

  const isLoadingUpdate = useSelector(getLoadingUpdate);
  const dispatch = useDispatch();

  const newImage = watch('avatar');

  useEffect(() => {
    if (isLoadingUpdate) {
      setEdited(false);
    }
  }, [isLoadingUpdate]);

  useEffect(() => {
    if (newImage && newImage[0]) {
      setEdited(true);
      dispatch(toggleIsDisablet());
    }
  }, [dispatch, newImage]);

  return (
    <form onSubmit={onSubmit}>
      <div>
        <div>
          <Photo
            src={
              newImage && newImage[0]
                ? URL.createObjectURL(newImage[0])
                : avatar
            }
          />
        </div>
        <div>
          {newImage && newImage[0] && edited ? (
            <button type="submit">
              <UploadSubmit fill="#F59256" width={23} height={23} />
              <p>submit</p>
            </button>
          ) : (
            <div>
              <label htmlFor="avatar">
                <UploadIcon fill="#F59256" width={18} height={18} />
                <p>edit Photo</p>
              </label>
              <PhotoEdit
                type="file"
                name="avatar"
                {...register('avatar')}
                id="avatar"
              />
            </div>
          )}
        </div>
      </div>
    </form>
    // <user></user>
  );
};
