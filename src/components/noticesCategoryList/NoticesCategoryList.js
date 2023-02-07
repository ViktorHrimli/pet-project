// import { useAuth } from 'hooks/useAuth';

import {
  CardList,
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
} from './NoticesCategoryList.styled';
import Container from 'components/container/Container';

export const NoticeCategoryList = () => {
  // const { token } = useAuth();

  return (
    <Container>
      <CardList>
        <CardItem>
          <CardImage
            src="https://www.8newsnow.com/wp-content/uploads/sites/59/2022/08/husky_eyes.jpg?w=1988&h=1440&crop=1"
            alt="Pet photo"
          />
          <Notiece>
            <span>in good hands</span>
          </Notiece>
          <Pick>
            <PickIcon />
          </Pick>
          <CardTitle>Cute dog looking for a home</CardTitle>
          <InfoList>
            <InfoItem>
              <p>Breed:</p>
              <Try>Pomeranian</Try>
            </InfoItem>
            <InfoItem>
              <p>Place:</p>
              <Try>Lviv</Try>
            </InfoItem>
            <InfoItem>
              <p>Age:</p>
              <Try>One year</Try>
            </InfoItem>
            <InfoItem>
              <p>Price:</p>
              <Try>50$</Try>
            </InfoItem>
          </InfoList>
          <CardButton>Learn more</CardButton>
          <DeleteButton>Delete</DeleteButton>
        </CardItem>
        <CardItem>
          <CardImage
            src="https://cdn.shopify.com/s/files/1/0272/4770/6214/articles/when-do-puppies-start-walking.jpg?v=1593020034"
            alt="Pet photo"
          />
          <Notiece>
            <span>in good hands</span>
          </Notiece>
          <Pick>
            <PickIcon />
          </Pick>
          <CardTitle>Cute dog looking for a home</CardTitle>
          <InfoList>
            <InfoItem>
              <p>Breed:</p>
              <Try>Pomeranian</Try>
            </InfoItem>
            <InfoItem>
              <p>Place:</p>
              <Try>Lviv</Try>
            </InfoItem>
            <InfoItem>
              <p>Age:</p>
              <Try>One year</Try>
            </InfoItem>
            <InfoItem>
              <p>Price:</p>
              <Try>50$</Try>
            </InfoItem>
          </InfoList>
          <CardButton>Learn more</CardButton>
          <DeleteButton>Delete</DeleteButton>
        </CardItem>
        <CardItem>
          <CardImage
            src="https://i.insider.com/5484d9d1eab8ea3017b17e29?width=1000&format=jpeg&auto=webp"
            alt="Pet photo"
          />
          <Notiece>
            <span>in good hands</span>
          </Notiece>
          <Pick>
            <PickIcon />
          </Pick>
          <CardTitle>Cute dog looking for a home</CardTitle>
          <InfoList>
            <InfoItem>
              <p>Breed:</p>
              <Try>Pomeranian</Try>
            </InfoItem>
            <InfoItem>
              <p>Place:</p>
              <Try>Lviv</Try>
            </InfoItem>
            <InfoItem>
              <p>Age:</p>
              <Try>One year</Try>
            </InfoItem>
            <InfoItem>
              <p>Price:</p>
              <Try>50$</Try>
            </InfoItem>
          </InfoList>
          <CardButton>Learn more</CardButton>
          <DeleteButton>Delete</DeleteButton>
        </CardItem>
        <CardItem>
          <CardImage
            src="https://i.insider.com/5484d9d1eab8ea3017b17e29?width=1000&format=jpeg&auto=webp"
            alt="Pet photo"
          />
          <Notiece>
            <span>in good hands</span>
          </Notiece>
          <Pick>
            <PickIcon />
          </Pick>
          <CardTitle>Cute dog looking for a home</CardTitle>
          <InfoList>
            <InfoItem>
              <p>Breed:</p>
              <Try>Pomeranian</Try>
            </InfoItem>
            <InfoItem>
              <p>Place:</p>
              <Try>Lviv</Try>
            </InfoItem>
            <InfoItem>
              <p>Age:</p>
              <Try>One year</Try>
            </InfoItem>
            <InfoItem>
              <p>Price:</p>
              <Try>50$</Try>
            </InfoItem>
          </InfoList>
          <CardButton>Learn more</CardButton>
          <DeleteButton>Delete</DeleteButton>
        </CardItem>
      </CardList>
    </Container>
  );
};
