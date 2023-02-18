import React from 'react';

import {
  AddIconsPhoto,
  AddPhoto,
  ImageWrapper,
} from 'components/modalAddsPet/photoConteiner/PhotoConteiner.styled';

import {
  CardImage,
  IconsDelete,
} from 'components/modalAddNotice/GlobalForm.styled';

const PhotoConteiner = ({ file, setFile, isErrorFile }) => {
  const handleDeletePhoto = () => {
    delete window.handleMyObject;
    setFile(null);
  };

  return (
    <>
      {!file ? (
        <AddPhoto>
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
        </AddPhoto>
      ) : (
        <ImageWrapper>
          <IconsDelete onClick={handleDeletePhoto} />
          <CardImage src={file.url} alt="pet" width="208" height="208" />
        </ImageWrapper>
      )}

      {isErrorFile && !file && (
        <div style={{ color: '#8b0000', position: 'absolute', top: '320px' }}>
          {'Field reqiured!'}
        </div>
      )}
    </>
  );
};

export { PhotoConteiner };
