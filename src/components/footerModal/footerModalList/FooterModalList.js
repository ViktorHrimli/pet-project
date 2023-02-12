import FooterModalItem from 'components/footerModal/footerModalItem/FooterModalItem';

import {
  TeamWrapper,
  List,
} from 'components/footerModal/footerModalList/FooterModalList.styled';

import dataTeam from 'components/footerModal/DataTeam';

export const FooterModalList = () => {
  const teamData = dataTeam;

  return (
    <TeamWrapper>
      {teamData &&
        teamData.map(({ id, imgUrl, name, role, linkGit, linkedin }) => (
          <List key={id}>
            <FooterModalItem
              imgUrl={imgUrl}
              name={name}
              role={role}
              linkGit={linkGit}
              linkedin={linkedin}
            />
          </List>
        ))}
    </TeamWrapper>
  );
};
