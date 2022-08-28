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
                            <FormInput
                                name={object.id}
                                type={object.type}
                                placeholder={object.placeholder}
                                onChange={inputHandler}
                                required={object.required}
                            />
                        </InputContainer>
                    ))}
                    <FormButton type="submit">Submit</FormButton>
                </Form>
            </FormContainer>
        </>
    );
}

export default EducationForm;
