import {PetsList, PetsDataText} from 'components/petsData/styles/PetsData.styled'

export const CardMarkUp = ({ cardData, id }) => {
	return (
		<PetsList>
			{Object.entries(cardData)?.map(([key, value], idx) => (
				<li key={`${id}+ ${idx}`} id={id} >
					<PetsDataText >
						<span>{key} :</span>&nbsp;
						{value}
					</PetsDataText>
				</li>
			))}
		</PetsList>
	);
};
