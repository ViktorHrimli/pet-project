import React from 'react';

import {
  AddIconsPhoto,
  ImageSss,
  NoticeAddPhoto,
} from 'components/modalAddNotice/photoFormConteinerNotice/PhotoConteinerNotice.styled';

import { AddErrorMessageGlobal } from 'components/modalAddNotice/GlobalForm.styled';

// const createDb = obj => {
//   let openRequest = indexedDB.open('store', 1);

//   openRequest.onupgradeneeded = function () {
//     let db = openRequest.result;
//     if (!db.objectStoreNames.contains('photo')) {
//       db.createObjectStore('photo', { keyPath: 'url' });
//     }

//     let transaction = db.transaction('photo', 'readwrite');
//     let photo = transaction.objectStore('photo');

//     let request = photo.add(obj); // (3)
//   };
// };

const PhotoConteinerNotice = ({ file, setFile, isErrorFile }) => {
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
              setFile({
                url: URL.createObjectURL(e.target.files[0]),
                avatar: e.target.files[0],
              });
              localStorage.setItem(
                'url',
                JSON.stringify(URL.createObjectURL(e.target.files[0]))
              );
            }}
          />
        </NoticeAddPhoto>
      ) : (
        <ImageSss src={file.url} alt="pet" width="208" height="208" />
      )}

      {isErrorFile && !file && (
        <AddErrorMessageGlobal>{'Field reqiured!'}</AddErrorMessageGlobal>
      )}
    </>
  );
};

export { PhotoConteinerNotice };
