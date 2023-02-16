import {PetsList, PetsDataText} from 'components/petsData/styles/PetsData.styled'
import { nanoid } from 'nanoid'

import {PetsDataItemKey, PetsDataItemValue} from 'components/petsData/styles/PetsData.styled'

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
						<PetsDataItemKey>Breed:</PetsDataItemKey>&nbsp;
						<PetsDataItemValue>{breed}</PetsDataItemValue>
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
						<PetsDataItemKey>Comments:</PetsDataItemKey>&nbsp;
						<PetsDataItemValue>{comments}</PetsDataItemValue>
					</PetsDataText>
				</li>

		</PetsList>
	);
};

// return (
//   <PetsList>
//     {Object.entries(cardData)?.map(([key, value], idx) => (
//       <li key={`${id}+ ${idx}`} id={id} >
//         <PetsDataText >
//           <span>{key}:</span>&nbsp;
//           {value}
//         </PetsDataText>
//       </li>
//     ))}
//   </PetsList>
// );
// };
