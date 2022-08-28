import React, { useState } from "react";
import { setCourses } from "../../services/dataServices";
import { CoursesFormObject } from "../../sources/CoursesFormObject";
import {
    Form,
    FormButton,
    FormContainer,
    FormInput,
    FormLabel,
    InputContainer,
    Title,
} from "../../styles/FormsElements";

function CoursesForm({ data, setAdd }) {
    const [input, setInput] = useState({});

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        await setCourses(data.user, input);
        setInput({});
        setAdd(false);
    };

    return (
        <>
            <FormContainer>
                <Title>Add Course</Title>
                <Form onSubmit={submitHandler}>
                    {CoursesFormObject.map((object) => (
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

export default CoursesForm;
