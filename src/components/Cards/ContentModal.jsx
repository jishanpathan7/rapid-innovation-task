import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: ${({ theme }) => (theme === 'light' ? 'white' : '#333')};
  color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
  padding: 50px;
  position: relative;
  border-radius: 4px;
  max-width: 500px;
  width: 100%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
`;

const Modal = ({ isOpen, onClose, children }) => {
  const theme = useSelector((state) => state.theme.theme);
  console.log("theme", theme)

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent theme={theme}>
        <CloseButton theme={theme} onClick={onClose}>
          &times;
        </CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
