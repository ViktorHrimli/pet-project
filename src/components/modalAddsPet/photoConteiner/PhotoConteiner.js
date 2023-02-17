import React from 'react';

import {
  AddIconsPhoto,
  AddPhoto,
  CardImage,
  ImageWrapper,
} from 'components/modalAddsPet/photoConteiner/PhotoConteiner.styled';

// const getBase64StringFromDataURL = dataURL =>
//   dataURL.replace('data:', '').replace(/^.+,/, '');

// const getBase64Img = base => {
//   return `data:image/png;base64,${base}`;
// };

const PhotoConteiner = ({ file, setFile, isErrorFile }) => {
  if (JSON.parse(localStorage.getItem('url')) !== null) {
  }
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
          <CardImage src={file.url} alt="pet" width="208" height="208" />
        </ImageWrapper>
      )}

      {isErrorFile && !file && (
        <div style={{ color: '#8b0000' }}>{'Field reqiured!'}</div>
      )}
    </>
  );
};

export { PhotoConteiner };
