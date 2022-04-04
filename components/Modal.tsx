import React, { FunctionComponent, useEffect, useState } from "react"
import styles from '../styles/Modal.module.css'
import Image from 'next/image'

interface ModalProps {
    onClose: any;
    title: string;
    show: boolean;
}
 
const Modal: FunctionComponent<ModalProps> = ({onClose, title, show}) => {
    
      return (
          <>
          {show && <div className={styles.modal}>
        <div className={styles.modal_content} onClick={e => e.stopPropagation()}>
          <div className={styles.modal_header}>
          <button onClick={() => onClose()}>
              Close
            </button>
          </div>
          <div className={styles.modal_body}>
          <div className={styles.single}>
          <Image src="/images/image-rules.svg" alt="rules" width={180} height={150} />
          </div>
          </div>
        </div>
      </div>}
          </>
        
      );
}
 
export default Modal;