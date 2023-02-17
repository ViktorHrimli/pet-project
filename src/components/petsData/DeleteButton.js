import { useMediaQuery } from 'react-responsive';
import { ReactComponent as TrashIcon } from 'images/svg/delete.svg';
import { Loader } from 'components/loader/Loader';
import {DeleteBtn} from 'components/petsData/styles/PetsData.styled'

export const DeleteButton = ({ id, onDeletePet, isPetsLoading }) => {
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <>
      {isTablet ? (
        <DeleteBtn
          id={id}
          type="button"

          onClick={id => onDeletePet(id)}
        >
          {isPetsLoading ? (
            <Loader/>
          ) : (
            <TrashIcon

              fill="rgba(17, 17, 17, 0.6)"
              width={24}
              height={24}
            />
          )}
        </DeleteBtn>
      ) : (
        <DeleteBtn
          id={id}
          onClick={id => onDeletePet(id)}
          type="button"

        >
          {isPetsLoading ? (
            <Loader/>
          ) : (
            <DeleteBtn

              fill="rgba(17, 17, 17, 0.6)"
              width={15}
              height={15}
            />
          )}
        </DeleteBtn>
      )}
    </>
  );
};
