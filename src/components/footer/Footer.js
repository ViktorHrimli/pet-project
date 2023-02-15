import React, { useState } from 'react';
import FooterModal from 'components/footerModal/FooterModal';

import {
  FooterContainer,
  Position,
  Wrapper,
  DeveloperData,
  Paragraph,
  BoxRight,
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

            <div
              onClick={() => {
                document.body.style.overflow = 'hidden';
                setOpenModal(true);
              }}
            >
              <SpanTeam>Team Students</SpanTeam>
            </div>
          </BoxRight>
          {openModal && <FooterModal setOpenModal={setOpenModal} />}
        </Wrapper>
      </Position>
    </FooterContainer>
  );
}
