import React, { useState } from "react";
import { setCourses, updateEntry, deleteEntry } from "../../services/dataServices";
import { CoursesFormObject } from "../../sources/CoursesFormObject";
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
    DeleteButton,
    TextArea
} from "../../styles/FormsElements";

function CoursesForm({ data, setAdd, editData, isEditMode, setIsEditing }) {
    const [input, setInput] = useState(editData || {});

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        if (isEditMode) {
            await updateEntry("courses", data.user, editData.id, input);
            setIsEditing(false);
        } else {
            await setCourses(data.user, input);
            setInput({});
            setAdd(false);
        }
    };

    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this course entry?")) {
            await deleteEntry("courses", data.user, editData.id);
            setIsEditing(false);
        }
    }

    return (
        <>
            <FormContainer>
                <Title>{isEditMode ? "Edit Course" : "Add Course"}</Title>
                <Form onSubmit={submitHandler}>
                    {CoursesFormObject.map((object) => (
                        <InputContainer key={object.id}>
                            <FormLabel>{object.name}</FormLabel>
                            {object.type === "textarea" ? (
                                <TextArea
                                    name={object.id}
                                    placeholder={object.placeholder}
                                    onChange={inputHandler}
                                    required={object.required}
                                    value={input[object.id] || ""}
                                />
                            ) : (
                                <FormInput
                                    name={object.id}
                                    type={object.type}
                                    placeholder={object.placeholder}
                                    onChange={inputHandler}
                                    required={object.required}
                                    value={input[object.id] || ""}
                                />
                            )}
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
        </>
    );
}

export default CoursesForm;
