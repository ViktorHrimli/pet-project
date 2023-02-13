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
    <FooterContainer>
      <Position>
        <Wrapper>
          <DeveloperData>
            <Paragraph>&copy; 2023 | All Rights Reserved |</Paragraph>
          </DeveloperData>

          {/* Modal */}
          <BoxRight>
            <Paragraph>Developed by</Paragraph>

            <FooterModal open={openModal} onClose={() => setOpenModal(false)} />
            <div>
              <ButtonModal
                type="button"
                onClick={() => setOpenModal(true)}
                className="modalButton"
              >
                <SpanTeam>Team Students</SpanTeam>
              </ButtonModal>
            </div>
          </BoxRight>
        </Wrapper>
      </Position>
    </FooterContainer>
  );
}
