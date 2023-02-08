import { useMediaQuery } from 'react-responsive';
import noImage from 'images/noImage/noImage.jpg';

export const CardImg = ({ petImg }) => {
	const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

	return (
		<div>
			{isTablet ? (
				<img src={petImg ? petImg : noImage} alt="big cat" />
			) : (
				<img src={petImg ? petImg : noImage} alt="small cat" />
			)}
		</div>
	);
};
