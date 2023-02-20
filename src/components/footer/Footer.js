import React, { useState } from 'react';
import FooterModal from 'components/footerModal/FooterModal';

import {
  FooterContainer,
  Position,
  Wrapper,
  DeveloperData,
  Paragraph,
  BoxRight,
  ButtonModal,
  SpanTeam,
} from 'components/footer/Footer.styled';

export default function Footer() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <FooterContainer>
        <Position>
          <Wrapper>
            <DeveloperData>
              <Paragraph>&copy; 2023 | All Rights Reserved |</Paragraph>
            </DeveloperData>

            <BoxRight>
              <Paragraph>Developed by</Paragraph>

              <ButtonModal
                onClick={() => {
                  document.body.style.overflow = 'hidden';
                  setOpenModal(true);
                }}
              >
                <SpanTeam>Team Students</SpanTeam>
              </ButtonModal>
            </BoxRight>
          </Wrapper>
        </Position>
      </FooterContainer>

      {openModal && <FooterModal setOpenModal={setOpenModal} />}
    </>
  );
}
