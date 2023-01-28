import * as React from 'react';
import { useState } from 'react';
import List from './components/List';
import Dialog from './components/Dialog';
import { useDeferredPromise } from './hooks/useDeferredPromise';
import './style.css';

export default function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { defer, deferRef } = useDeferredPromise();

  const allowDelete = async () => {
    setIsDialogOpen(true);
    return defer().promise;
  };

  const handleConfirm = () => {
    setIsDialogOpen(false);
    deferRef.resolve(true);
  };

  const handleClose = () => {
    setIsDialogOpen(false);
    deferRef.resolve(false);
  };

  return (
    <div>
      <List allowDelete={allowDelete} />
      <Dialog
        isOpen={isDialogOpen}
        handleConfirm={handleConfirm}
        handleClose={handleClose}
      />
    </div>
  );
}
