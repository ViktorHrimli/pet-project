import { useMediaQuery } from 'react-responsive';
import { ReactComponent as TrashIcon } from 'images/svg/delete.svg';
import { Spinner } from 'components/Reuse/Loaders/Spinner/Spinner';

export const DeleteButton = ({ id, onDeletePet, isPetsLoading }) => {
	const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

	return (
		<>
			{isTablet ? (
				<button
					id={id}
					type="button"

					onClick={id => onDeletePet(id)}
				>
					{isPetsLoading ? (
						<Spinner />
					) : (
						<TrashIcon

							fill="currentColor"
							width={24}
							height={24}
						/>
					)}
				</button>
			) : (
				<button
					id={id}
					onClick={id => onDeletePet(id)}
					type="button"

				>
					{isPetsLoading ? (
						<Spinner />
					) : (
						<TrashIcon

							fill="currentColor"
							width={15}
							height={15}
						/>
					)}
				</button>
			)}
		</>
	);
};
