import React, { useState, useEffect } from "react";
import { PersonalInfoForm } from "../sources/PersonalInfo";
import {
    Form,
    FormContainer,
    FormInput,
    FormLabel,
    FormTitle,
    Pencil,
    ProfileImg,
    InputContainer,
    FormButton,
} from "../styles/AccountFormElements";
import { uploadFile } from "../services/uploadFile";
import { createAccoutCollection } from "../services/startCvService";

function PersonalDataForm({ setData, user, data }) {
    const [file, setFile] = useState("");
    const [inputs, setInputs] = useState(null);

    useEffect(() => {
        file && uploadFile(file, setInputs);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [file]);

    const handleInput = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        setInputs({ ...inputs, [id]: value });
    };

    const saveAccount = async (e) => {
        e.preventDefault();
        const newData = {
            ...inputs,
            user: user.uid,
            photoURL: inputs?.photoURL || user?.photoURL,
        };
        setData(newData);
        await createAccoutCollection(newData, user.uid);
    };

    return (
        <>
            <FormContainer>
                <FormTitle>Personal information</FormTitle>
                <ProfileImg
                    src={
                        data?.protoURL ||
                        inputs?.protoURL ||
                        user?.photoURL ||
                        "https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg"
                    }
                />
                <Form onSubmit={saveAccount}>
                    <Pencil htmlFor="file">✐</Pencil>
                    <FormInput
                        type="file"
                        id="file"
                        style={{ display: "none" }}
                        onChange={(e) => setFile(e.target.files[0])}
                    />

                    {PersonalInfoForm.map((el) => (
                        <InputContainer key={el.id}>
                            <FormLabel id={el.id}>{el.label}</FormLabel>
                            <FormInput
                                id={el.id}
                                type={el.type}
                                placeholder={user[el.id] || el.placeholder}
                                onChange={handleInput}
                                required={el.required}
                            />
                        </InputContainer>
                    ))}
                    <FormButton type="submit">Save</FormButton>
                </Form>
            </FormContainer>
        </>
    );
}

export default PersonalDataForm;
