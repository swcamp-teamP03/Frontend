import React, { ReactNode, useEffect } from 'react';
import { SVG } from '../../../assets';
import * as S from './Modal.styles';

export interface PropsWithChild {
  children: ReactNode | string;
}

export interface ModalFrameProps extends PropsWithChild {
  isOpen: boolean;
  height?: string;
  width?: string;
  onClick: () => void;
}

const ModalFrame = ({ isOpen, height = '180px', width = '520px', onClick, children }: ModalFrameProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.cssText = `
        position: fixed; 
        overflow-y: hidden;
        height:100%;
        width: 100%;`;
    } else {
      document.body.style.cssText = '';
    }
  }, [isOpen]);

  return (
    <>
      <S.Overlay isOpen={isOpen} onClick={onClick} />
      <S.ModalFrame isOpen={isOpen} width={width} height={height}>
        {children}
      </S.ModalFrame>
    </>
  );
};

export interface ModalHeaderProps extends PropsWithChild {
  onClick: () => void;
}

const ModalHeader = ({ children, onClick }: ModalHeaderProps) => {
  return (
    <>
      <S.ModalHeader>
        <h2>{children}</h2>
        <div onClick={onClick}>{SVG.closeButton}</div>
      </S.ModalHeader>
      <hr />
    </>
  );
};

const ModalBody = ({ children }: PropsWithChild) => {
  return <S.ModalBody>{children}</S.ModalBody>;
};

const ModalFooter = ({ children }: PropsWithChild) => {
  return <S.ModalFooter>{children}</S.ModalFooter>;
};

const Modal = {
  Frame: ModalFrame,
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
};

export default Modal;
