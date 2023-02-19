import React from 'react';

import {
  AddIconsPhoto,
  NoticeAddPhoto,
} from 'components/modalAddNotice/photoFormConteinerNotice/PhotoConteinerNotice.styled';

import {
  AddErrorMessageGlobal,
  CardImage,
  IconsDelete,
  ImageWrapper,
} from 'components/modalAddNotice/GlobalForm.styled';

const PhotoConteinerNotice = ({ file, setFile, isErrorFile }) => {
  const handleDeletePhoto = () => {
    delete window.handleMyObject;
    setFile(null);
  };
  return (
    <>
      {!file ? (
        <NoticeAddPhoto>
          <AddIconsPhoto />
          <input
            as="input"
            type="file"
            name="avatar"
            hidden={true}
            size={50000}
            accept=".png, .jpg, .jpeg, .webp"
            onChange={e => {
              const targetFiles = e.target.files[0];

              window.handleMyObject = targetFiles;

              setFile({
                url: URL.createObjectURL(targetFiles),
                avatar: targetFiles,
              });
            }}
          />
        </NoticeAddPhoto>
      ) : (
        <ImageWrapper>
          <IconsDelete onClick={handleDeletePhoto} />
          <CardImage src={file.url} alt="pet" width="208" height="208" />
        </ImageWrapper>
      )}

      {isErrorFile && !file && (
        <AddErrorMessageGlobal>{'Field reqiured!'}</AddErrorMessageGlobal>
      )}
    </>
  );
};

export { PhotoConteinerNotice };
