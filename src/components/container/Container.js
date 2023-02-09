import { ContainerDiv } from 'components/container/Container.styled';

const Container = ({ children }) => {
  return (
    <ContainerDiv>
      {children}
      {/* <hey></hey> */}
    </ContainerDiv>
  );
};

export default Container;
