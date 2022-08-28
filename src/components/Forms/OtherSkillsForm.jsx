import React, { useState } from "react";
import { setOtherSkills } from "../../services/dataServices";
import { OtherSkillsFormObject } from "../../sources/OtherSkillsFormObject";
import {
    Form,
    FormButton,
    FormContainer,
    FormInput,
    FormLabel,
    InputContainer,
    TextArea,
    Title,
} from "../../styles/FormsElements";

function OtherSkillsForm({ data, setAdd }) {
    const [input, setInput] = useState({});
    console.log(input)

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        await setOtherSkills(data.user, input);
        setInput({});
        setAdd(false);
    };

    return (
        <>
            <FormContainer>
                <Title>Add Skill</Title>
                <Form onSubmit={submitHandler} id={"otherskills"}>
                    {OtherSkillsFormObject.map((object) => (
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
                    <TextArea
                        form="otherskiills"
                        id="desctiption"
                        name="description"
                        type="textarea"
                        placeholder="Description"
                        onChange={inputHandler}
                        required={true}
                    />{" "}
                    <FormButton type="submit">Submit</FormButton>
                </Form>
            </FormContainer>
        </>
    );
}

export default OtherSkillsForm;
