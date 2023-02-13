import {
  ProfileCard,
  TeamPhoto,
  Caption,
  CaptionTitle,
  TeamRole,
  SocialLink,
  SvgGit,
  SvgLinkedin,
} from 'components/footerModal/footerModalItem/FooterModalItem.styled';

export default function FooterModalItem({
  imgUrl,
  name,
  role,
  linkGit,
  linkedin,
}) {
  return (
    <>
      <ProfileCard>
        <TeamPhoto src={imgUrl} alt={name} />

        <Caption>
          <CaptionTitle>{name}</CaptionTitle>
          <TeamRole>{role}</TeamRole>
          <div>
            <SocialLink
              href={linkGit}
              target="_blank"
              rel="noopener
                      noreferrer"
            >
              <SvgGit />
            </SocialLink>

            <SocialLink
              href={linkedin}
              target="_blank"
              rel="noopener
                      noreferrer"
            >
              <SvgLinkedin />
            </SocialLink>
          </div>
        </Caption>
      </ProfileCard>
    </>
  );
}
