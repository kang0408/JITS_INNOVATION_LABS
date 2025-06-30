import { useRef } from 'react';

import './ModalConfirm.css';

import Button from '../Button/Button';

export default function Modal({
  title,
  content,
  exitBtn,
  modal,
  toggleModal,
  onConfirm,
}) {
  const overlayRef = useRef();

  const handleCloseModal = (e) => {
    if (e.target == overlayRef.current) toggleModal();
    console.log(e.target);
    console.log(overlayRef);
  };

  const handleConfirm = () => {
    onConfirm();
    toggleModal();
  };
  return (
    <>
      {modal ? (
        <div
          className="modal-overlay"
          ref={overlayRef}
          onClick={handleCloseModal}
        >
          <div className="modal-wrapper">
            {title ? (
              <div className="modal_header">
                <h2>{title}</h2>
                {exitBtn ? (
                  <button onClick={toggleModal}>
                    <b>X</b>
                  </button>
                ) : (
                  ''
                )}
              </div>
            ) : (
              ''
            )}
            {content ? (
              <div className="modal_content">
                <p>{content}</p>
              </div>
            ) : (
              ''
            )}
            <div className="modal_footer">
              <Button color="default" onClick={toggleModal}>
                Cancel
              </Button>
              <Button color="primary" onClick={handleConfirm}>
                Confirm
              </Button>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
}
