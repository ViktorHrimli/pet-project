import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updateUserData } from 'redux/user/operations';
import { createFormData } from './FormData';

import { itemInfo } from 'components/userData/ItemInfo';
import { UserItem } from 'components/userData/UserItem';
import { UserPhoto } from 'components/userData/UserPhoto';
import { LogOut } from 'components/userData/LogOut';

export const UserForm = ({ formData }) => {
	const {
		userInfo: { name, email, birthday, phone, city },
		userAvatar,
		isUserLoading,
		isCurrentLoading,
	} = formData;
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors },
	} = useForm({});
	const dispatch = useDispatch();

	const normalizeUserInfo = {
		name,
		email,
		birthday,
		phone,
		city,
	};

	const onSubmit = data => {
		if (data) {
			const fieldToChange = createFormData(data);
			dispatch(updateUserData(fieldToChange));
		}
	};

	return (
		<div>
			<div>
				{isUserLoading || isCurrentLoading ? (
					<div>"loading" </div>
				) : (
					<>
						<UserPhoto
							onSubmit={handleSubmit(onSubmit)}
							watch={watch}
							avatar={userAvatar}
							register={register}
						/>

						<div>
							{itemInfo.map((info, idx) => (
								<UserItem
									onSubmit={handleSubmit(onSubmit)}
									data={Object.values(normalizeUserInfo)[idx]}
									text={info.text}
									type={info.type}
									field={info.field}
									errors={errors}
									pattern={info.pattern}
									register={register}
									setValue={setValue}
									key={idx}
								/>
							))}
						</div>
					</>
				)}
			</div>
			{!isUserLoading && !isCurrentLoading && <LogOut />}
		</div>
	);
};