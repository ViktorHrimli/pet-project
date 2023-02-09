import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDisabledFields, getLoadingUpdate } from 'redux/user/selectors';
import { toggleIsDisablet } from 'redux/user/slice';
import { ReactComponent as ApproveIcon } from '../../images/svg/stroke.svg';
import { ReactComponent as EditIcon } from '../../images/svg/ci_edit.svg';

import { EditInput, InfoItem, Form, Userlabel } from 'components/userData/styles/UserDataItem.styles';

export const UserItem = ({
  data,
  errors,
  type = 'text',
  register,
  field,
  text,
  setValue,
  onSubmit,
  pattern: { pattern, patternMessage },
}) => {
  const [edited, setEdited] = useState(false);

  const isLoadingUpdate = useSelector(getLoadingUpdate);
  const isDisabled = useSelector(getDisabledFields);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoadingUpdate) {
      setEdited(false);
    }
  }, [isLoadingUpdate]);

  const checkDisabled = () => {
    if (!isDisabled) {
      dispatch(toggleIsDisablet());
      setEdited(true);
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Userlabel htmlFor={data} >
        <InfoItem>{text}:</InfoItem>
        {edited ? (
          <>
            <EditInput
              {...register(field, {
                pattern: {
                  value: pattern,
                  message: patternMessage,
                },
              })}

              type={type}
              name={field}
              id={data}
              placeholder={`Your ${field}`}
            />

            {errors[field] && (
              <div>
                {errors[field]?.message}
              </div>
            )}
          </>
        ) : (
          <p>{data === '' ? `Unknown` : data}</p>
        )}

        {edited ? (
          <button type="submit">
            <ApproveIcon fill="currentColor" width="20px" height="20px" />
          </button>
        ) : (
          <div

            onClick={() => {
              setValue(field, data);
              checkDisabled();
            }}
          >
            <EditIcon
              fill={isDisabled ? 'rgba(17, 17, 17, 0.6)' : 'currentColor'}
              width="20px"
              height="20px"
            />
          </div>
        )}
      </Userlabel>
    </Form>
  );
};