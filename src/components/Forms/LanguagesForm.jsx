import React, { useState } from "react";
import { setLanguages, updateEntry, deleteEntry } from "../../services/dataServices";
import { LanguagesFormObject } from "../../sources/LanguagesFormObject";
import { FaTrash } from "react-icons/fa";
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
    DeleteButton
} from "../../styles/FormsElements";

function LanguagesForm({ data, setAdd, editData, isEditMode, setIsEditing }) {
    const [input, setInput] = useState(editData || {});

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        if (isEditMode) {
            await updateEntry("languages", data.user, editData.id, input);
            setIsEditing(false);
        } else {
            await setLanguages(data.user, input);
            setInput({});
            setAdd(false);
        }
    };

    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this language entry?")) {
            await deleteEntry("languages", data.user, editData.id);
            setIsEditing(false);
        }
    }

    return (
        <FormContainer>
            <Title>{isEditMode ? "Edit Language" : "Add Language"}</Title>
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
                            value={input[object.id] || ""}
                        />
                    </InputContainer>
                ))}
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
    );
}

export default LanguagesForm;
