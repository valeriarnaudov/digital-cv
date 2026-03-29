import React, { useState } from "react";
import { setLanguages } from "../../services/dataServices";
import { LanguagesFormObject } from "../../sources/LanguagesFormObject";
import {
    Form,
    FormButton,
    FormContainer,
    FormInput,
    FormLabel,
    InputContainer,
    Title,
    ButtonContainer,
    CancelButton
} from "../../styles/FormsElements";

function LanguagesForm({ data, setAdd }) {
    const [input, setInput] = useState({});

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        await setLanguages(data.user, input);
        setInput({});
        setAdd(false);
    };

    return (
        <FormContainer>
            <Title>Add Language</Title>
            <Form onSubmit={submitHandler}>
                {LanguagesFormObject.map((object) => (
                    <InputContainer key={object.id}>
                        <FormLabel>{object.name}</FormLabel>
                        <FormInput
                            name={object.id}
                            type={object.type}
                            placeholder={object.placeholder}
                            onChange={inputHandler}
                            required={object.required}
                        />
                    </InputContainer>
                ))}
                <ButtonContainer>
                    <CancelButton type="button" onClick={() => setAdd(false)}>Cancel</CancelButton>
                    <FormButton type="submit">Submit</FormButton>
                </ButtonContainer>
            </Form>
        </FormContainer>
    );
}

export default LanguagesForm;
