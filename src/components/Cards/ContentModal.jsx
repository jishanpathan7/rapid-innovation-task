import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

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
  background: ${({ theme }) => (theme === "light" ? "white" : "#333")};
  color: ${({ theme }) => (theme === "light" ? "black" : "white")};
  padding: 50px;
  position: relative;
  border-radius: 4px;
  max-width: 500px;
  width: 100%;
  max-height: 500px;
  overflow-y: scroll;

  p {
    font-weight: 600;

    span {
      font-weight: 400;
      margin-left: 10px;
    }
  }
`;

const ModalDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: start;
  justify-content: start;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: ${({ theme }) => (theme === "light" ? "black" : "white")};
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const ContentModal = ({ isOpen, onClose, formData }) => {
  const theme = useSelector((state) => state.theme.theme);

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent theme={theme}>
        <CloseButton theme={theme} onClick={onClose}>
          &times;
        </CloseButton>

        <p>
          Name: <span>{formData?.name}</span>
        </p>
        <p>
          Email: <span>{formData?.email}</span>
        </p>
        <p>
          Address: <span>{formData?.address}</span>
        </p>
        <p>
          Bio: <span>{formData?.bio}</span>
        </p>
        <p>
          Date of Birth: <span>{formData?.dateOfBirth}</span>
        </p>

        <ModalDescription>
          <p>Profile:</p>
          {formData?.profileImage && (
            <Image
              src={URL.createObjectURL(formData?.profileImage)}
              alt="Profile"
            />
          )}
        </ModalDescription>
        <ModalDescription>
          <p>Banner:</p>
          {formData?.bannerImage && (
            <Image
              src={URL.createObjectURL(formData?.bannerImage)}
              alt="Profile"
            />
          )}
        </ModalDescription>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ContentModal;
