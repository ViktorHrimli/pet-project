import {PetsList, PetsDataText, PetsDataBox} from 'components/petsData/styles/PetsData.styled'
import { nanoid } from 'nanoid'

import {PetsDataItemKey, PetsDataItemValue } from 'components/petsData/styles/PetsData.styled'

export const CardMarkUp = ({ cardData }) => {

const {name, breed, comments, date} = cardData;
	return (

		<PetsList>
				<li key={nanoid()}  >
					<PetsDataText >
						<PetsDataItemKey>Name:</PetsDataItemKey>&nbsp;
						<PetsDataItemValue>{name}</PetsDataItemValue>
					</PetsDataText>
				</li>
        <li key={nanoid()} >
					<PetsDataText >
						<PetsDataItemKey>Date of birth:</PetsDataItemKey>
						<PetsDataItemValue>{date}</PetsDataItemValue>
					</PetsDataText>
				</li>
        <li key={nanoid()} >
					<PetsDataText >
						<PetsDataItemKey>Breed:</PetsDataItemKey>&nbsp;
						<PetsDataItemValue>{breed}</PetsDataItemValue>
					</PetsDataText>
				</li>

        <li key={nanoid()} >
					<PetsDataBox >
						<PetsDataItemKey>Comments:&nbsp;
							<PetsDataItemValue>{comments}</PetsDataItemValue>
						</PetsDataItemKey>
					</PetsDataBox>
				</li>

		</PetsList>
	);
};

