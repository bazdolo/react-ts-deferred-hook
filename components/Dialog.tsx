import * as React from 'react';

type DialogProps = {
  isOpen: boolean;
  handleConfirm: () => void;
  handleClose: () => void;
};

const Dialog = ({ isOpen, handleConfirm, handleClose }: DialogProps) => {
  return (
    <dialog open={isOpen}>
      <div>Do you really want to remove this task?</div>
      <button onClick={handleConfirm}>Yes</button>
      <button onClick={handleClose}>No</button>
    </dialog>
  );
};

export default Dialog;
