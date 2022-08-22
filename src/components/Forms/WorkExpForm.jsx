import React, { useState } from "react";
import { setWorkExp } from "../../services/dataServices";
import { WorkExpFormObject } from "../../sources/WorkExpFormObject";
import {
    Form,
    FormButton,
    FormContainer,
    FormInput,
    FormLabel,
    InputContainer,
    Title,
} from "../../styles/FormsElements";

function WorkExpForm({ setData, data, setAdd }) {
    const [input, setInput] = useState({});

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
        // setData((data) => ({
        //     ...data,
        //     workExp:
        //         ...data.workExp,
        //         {
        //         [name]: value,
        //     },
        // }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        await setWorkExp(data.user, input);
        // setData(...data)
        setInput({});
        setAdd(false);
    };

    return (
        <>
            <FormContainer>
                <Title>Add Work Experience</Title>
                <Form onSubmit={submitHandler}>
                    {WorkExpFormObject.map((object) => (
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

export default WorkExpForm;
