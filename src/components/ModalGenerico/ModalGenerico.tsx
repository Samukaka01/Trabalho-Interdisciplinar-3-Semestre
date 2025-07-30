import React from 'react';
import styles from './ModalGenerico.module.css';

interface Props {
  onClose: () => void;
  children: React.ReactNode;
  modalContentClassName?: string; 
}

const ModalGenerico: React.FC<Props> = ({ onClose, children, modalContentClassName }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={`${styles.modalContent} ${modalContentClassName || ''}`}
        onClick={(e) => e.stopPropagation()} 
      >
        <button className={styles.closeButton} onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default ModalGenerico;