import {
  CardItem,
  CardImage,
  CardTitle,
  InfoList,
  InfoItem,
  CardButton,
  DeleteButton,
  Notiece,
  Pick,
  PickIcon,
  Try,
} from './NoticesCategoryIItem.styled';

//   import Container from 'components/container/Container';

export const NoticeCategoryItem = ({ item }) => {
  const { _id, category, title, birthday, breed, city, imageURL, price } = item;
  return (
    <CardItem key={_id}>
      <CardImage src={imageURL} alt="Pet photo" />
      <Notiece>
        <span>{category} </span>
      </Notiece>
      <Pick>
        <PickIcon />
      </Pick>
      <CardTitle>{title}</CardTitle>
      <InfoList>
        <InfoItem>
          <p>Breed:</p>
          <Try>{breed}</Try>
        </InfoItem>
        <InfoItem>
          <p>Place:</p>
          <Try>{city}</Try>
        </InfoItem>
        <InfoItem>
          <p>Age:</p>
          <Try>{birthday}</Try>
        </InfoItem>
        <InfoItem>
          <p>Price:</p>
          <Try>{price}$</Try>
        </InfoItem>
      </InfoList>
      <CardButton>Learn more</CardButton>
      <DeleteButton>Delete</DeleteButton>
    </CardItem>
  );
};
