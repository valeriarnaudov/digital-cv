import React, { useState } from "react";
import { setOtherSkills, updateEntry, deleteEntry } from "../../services/dataServices";
import { OtherSkillsFormObject } from "../../sources/OtherSkillsFormObject";
import { FaTrash } from "react-icons/fa";
import {
    Form,
    FormButton,
    FormContainer,
    FormInput,
    FormLabel,
    InputContainer,
    TextArea,
    Title,
    ButtonContainer,
    CancelButton,
    DeleteButton
} from "../../styles/FormsElements";

function OtherSkillsForm({ data, setAdd, editData, isEditMode, setIsEditing }) {
    const [input, setInput] = useState(editData || {});
    console.log(input)

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        if (isEditMode) {
            await updateEntry("otherskills", data.user, editData.id, input);
            setIsEditing(false);
        } else {
            await setOtherSkills(data.user, input);
            setInput({});
            setAdd(false);
        }
    };

    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this skill entry?")) {
            await deleteEntry("otherskills", data.user, editData.id);
            setIsEditing(false);
        }
    }

    return (
        <>
            <FormContainer>
                <Title>{isEditMode ? "Edit Skill" : "Add Skill"}</Title>
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
                                value={input[object.id] || ""}
                            />
                        </InputContainer>
                    ))}
                    <TextArea
                        form="otherskills"
                        id="desctiption"
                        name="description"
                        type="textarea"
                        placeholder="Description"
                        onChange={inputHandler}
                        required={true}
                        value={input.description || ""}
                    />{" "}
                    <ButtonContainer>
                        <CancelButton type="button" onClick={() => isEditMode ? setIsEditing(false) : setAdd(false)}>Cancel</CancelButton>
                        {isEditMode && (
                            <DeleteButton type="button" onClick={handleDelete}>
                                <FaTrash /> Delete
                            </DeleteButton>
                        )}
                        <FormButton type="submit">Save</FormButton>
                    </ButtonContainer>
                </Form>
            </FormContainer>
        </>
    );
}

export default OtherSkillsForm;
