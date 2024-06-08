import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import Modal from "./Cards/ContentModal";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;

  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: ${({ theme }) => (theme === "light" ? "#fff" : "#333")};
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
`;

const FormField = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled(Field)`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  margin-bottom: 5px;
  background-color: ${({ theme }) => (theme === "light" ? "#fff" : "#555")};
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
  border: 1px solid ${({ theme }) => (theme === "light" ? "#ddd" : "#444")};
`;

const TextInput = styled(Field)`
  width: 100%;
  padding: 8px;
  height: 100px;
  margin-bottom: 5px;
  background-color: ${({ theme }) => (theme === "light" ? "#fff" : "#555")};
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
  border: 1px solid ${({ theme }) => (theme === "light" ? "#ddd" : "#444")};
`;

const ErrorText = styled.div`
  color: red;
  font-size: 0.8em;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ContactUs = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState(null);
  const theme = useSelector((state) => state.theme.theme);

  // Validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    address: Yup.string().required("Required"),
    dateOfBirth: Yup.date().required("Required"),
    bio: Yup.string().required("Required"),
    profileImage: Yup.mixed().required("Required"),
    bannerImage: Yup.mixed().required("Required"),
  });

  // Handle form submission
  const handleSubmit = (values) => {
    setFormData(values);
    setModalOpen(true);
  };

  console.log("formdata", formData);

  return (
    <Container theme={theme}>
      <h1>Contact Us</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          address: "",
          dateOfBirth: "",
          bio: "",
          profileImage: null,
          bannerImage: null,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <FormField>
              <Label htmlFor="name">Name</Label>
              <Input name="name" type="text" theme={theme} />
              <ErrorMessage name="name" component={ErrorText} />
            </FormField>
            <FormField>
              <Label htmlFor="email">Email</Label>
              <Input name="email" type="email" theme={theme} />
              <ErrorMessage name="email" component={ErrorText} />
            </FormField>
            <FormField>
              <Label htmlFor="address">Address</Label>
              <Input name="address" type="text" theme={theme} />
              <ErrorMessage name="address" component={ErrorText} />
            </FormField>
            <FormField>
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input name="dateOfBirth" type="date" theme={theme} />
              <ErrorMessage name="dateOfBirth" component={ErrorText} />
            </FormField>
            <FormField>
              <Label htmlFor="bio">Bio</Label>
              <TextInput name="bio" theme={theme} />
              <ErrorMessage name="bio" component={ErrorText} />
            </FormField>
            <FormField>
              <Label htmlFor="profileImage">Profile Image</Label>
              <input
                name="profileImage"
                type="file"
                onChange={(event) => {
                  setFieldValue("profileImage", event.currentTarget.files[0]);
                }}
              />
              <ErrorMessage name="profileImage" component={ErrorText} />
            </FormField>
            <FormField>
              <Label htmlFor="bannerImage">Banner Image</Label>
              <input
                name="bannerImage"
                type="file"
                onChange={(event) => {
                  setFieldValue("bannerImage", event.currentTarget.files[0]);
                }}
              />
              <ErrorMessage name="bannerImage" component={ErrorText} />
            </FormField>
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
      {formData && (
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <h2>Form Data</h2>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </Modal>
      )}
    </Container>
  );
};

export default ContactUs;
