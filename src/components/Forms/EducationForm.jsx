import React, { useState } from "react";
import { setEducation } from "../../services/dataServices";
import { EducationFormObject } from "../../sources/EducationFormObject";
import {
    Form,
    FormButton,
    FormContainer,
    FormInput,
    FormLabel,
    InputContainer,
    Title,
    ButtonContainer,
    CancelButton,
    TextArea
} from "../../styles/FormsElements";

function EducationForm({ data, setAdd }) {
    const [input, setInput] = useState({});

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        await setEducation(data.user, input);
        setInput({});
        setAdd(false);
    };

    return (
        <>
            <FormContainer>
                <Title>Add Education</Title>
                <Form onSubmit={submitHandler}>
                    {EducationFormObject.map((object) => (
                        <InputContainer key={object.id}>
                            <FormLabel>{object.name}</FormLabel>
                            {object.type === "textarea" ? (
                                <TextArea
                                    name={object.id}
                                    placeholder={object.placeholder}
                                    onChange={inputHandler}
                                    required={object.required}
                                />
                            ) : (
                                <FormInput
                                    name={object.id}
                                    type={object.type}
                                    placeholder={object.placeholder}
                                    onChange={inputHandler}
                                    required={object.required}
                                />
                            )}
                        </InputContainer>
                    ))}
                    <ButtonContainer>
                        <CancelButton type="button" onClick={() => setAdd(false)}>Cancel</CancelButton>
                        <FormButton type="submit">Submit</FormButton>
                    </ButtonContainer>
                </Form>
            </FormContainer>
        </>
    );
}

export default EducationForm;
