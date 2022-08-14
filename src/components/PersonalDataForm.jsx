import React, { useState, useEffect } from "react";
import { PersonalInfo } from "../sources/PersonalInfo";
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
} from "../styles/FormElements";
import { uploadFile } from "../services/uploadFile";
import { createAccoutCollection } from "../services/startCvService";

function PersonalDataForm({ setData, user, data }) {
    const [file, setFile] = useState("");

    useEffect(() => {
        file && uploadFile(file, setData);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [file]);

    const handleInput = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        setData({ ...data, [id]: value });
    };

    const saveAccount = async (e) => {
        e.preventDefault();
        setData({ ...data, user: user.uid });
        await createAccoutCollection(data, user.uid);
    }


    return (
        <>
            <FormContainer>
                <FormTitle>Personal information</FormTitle>
                <ProfileImg
                    src={
                        data?.protoURL ||
                        file ||
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

                    {PersonalInfo.map((el) => (
                        <InputContainer key={el.id}>
                            <FormLabel id={el.id}>{el.label}</FormLabel>
                            <FormInput
                                id={el.id}
                                type={el.type}
                                placeholder={el.label}
                                onChange={handleInput}
                                required={el.required}
                                value={
                                    data
                                        ? data[el.id]
                                        : user
                                        ? user[el.id]
                                        : el.value
                                }
                            />
                        </InputContainer>
                    ))}
                    <FormButton
                            type="submit"
                        >
                            Save
                        </FormButton>
                </Form>
            </FormContainer>
        </>
    );
}

export default PersonalDataForm;
