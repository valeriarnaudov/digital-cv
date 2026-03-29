import { collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../firebase";

export const getUidByUsername = async (username) => {
    try {
        const usernameDoc = await getDoc(doc(db, "usernames", username.toLowerCase()));
        if (usernameDoc.exists()) {
            return usernameDoc.data().uid;
        }
        return null;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const getData = async (userId, setData) => {
    try {
        const data = await getDoc(doc(db, "accounts", userId));
        setData(data.data());
        return data.data();
    } catch (error) {
        console.log(error);
    }
};

export const setWorkExp = async (userId, input) => {
    try {
        await setDoc(doc(collection(db, "accounts", userId, "workexp")), input);
        toast.success("Data uploaded successfully");
    } catch (error) {
        console.log(error);
        toast.error("Error on unploading data");
    }
};

export const getWorkExp = async (userId, setWorkExp) => {
    try {
        const list = [];
        const result = await getDocs(
            collection(db, "accounts", userId, "workexp")
        );
        result.docs.forEach((doc) => list.push({ ...doc.data(), id: doc.id }));
        setWorkExp(list);
        return list;
    } catch (error) {
        console.log(error);
    }
};

export const setEducation = async (userId, input) => {
    try {
        await setDoc(
            doc(collection(db, "accounts", userId, "education")),
            input
        );
        toast.success("Data uploaded successfully");
    } catch (error) {
        console.log(error);
        toast.error("Error on unploading data");
    }
};

export const getEducation = async (userId, setEducation) => {
    try {
        const list = [];
        const result = await getDocs(
            collection(db, "accounts", userId, "education")
        );
        result.docs.forEach((doc) => list.push({ ...doc.data(), id: doc.id }));
        setEducation(list);
        return list;
    } catch (error) {
        console.log(error);
    }
};

export const setCourses = async (userId, input) => {
    try {
        await setDoc(doc(collection(db, "accounts", userId, "courses")), input);
        toast.success("Data uploaded successfully");
    } catch (error) {
        console.log(error);
        toast.error("Error on unploading data");
    }
};

export const getCourses = async (userId, setCourses) => {
    try {
        const list = [];
        const result = await getDocs(
            collection(db, "accounts", userId, "courses")
        );
        result.docs.forEach((doc) => list.push({ ...doc.data(), id: doc.id }));
        setCourses(list);
        return list;
    } catch (error) {
        console.log(error);
    }
};

export const setOtherSkills = async (userId, input) => {
    try {
        await setDoc(
            doc(collection(db, "accounts", userId, "otherskills")),
            input
        );
        toast.success("Data uploaded successfully");
    } catch (error) {
        console.log(error);
        toast.error("Error on unploading data");
    }
};

export const getOtherSkills = async (userId, setOtherSkills) => {
    try {
        const list = [];
        const result = await getDocs(
            collection(db, "accounts", userId, "otherskills")
        );
        result.docs.forEach((doc) => list.push({ ...doc.data(), id: doc.id }));
        setOtherSkills(list);
        return list;
    } catch (error) {
        console.log(error);
    }
};

export const setLanguages = async (userId, input) => {
    try {
        await setDoc(doc(collection(db, "accounts", userId, "languages")), input);
        toast.success("Data uploaded successfully");
    } catch (error) {
        console.log(error);
        toast.error("Error on uploading data");
    }
};

export const getLanguages = async (userId, setLanguages) => {
    try {
        const list = [];
        const result = await getDocs(
            collection(db, "accounts", userId, "languages")
        );
        result.docs.forEach((doc) => list.push({ ...doc.data(), id: doc.id }));
        setLanguages(list);
        return list;
    } catch (error) {
        console.log(error);
    }
};

export const setProjects = async (userId, input) => {
    try {
        await setDoc(doc(collection(db, "accounts", userId, "projects")), input);
        toast.success("Data uploaded successfully");
    } catch (error) {
        console.log(error);
        toast.error("Error on uploading data");
    }
};

export const getProjects = async (userId, setProjects) => {
    try {
        const list = [];
        const result = await getDocs(
            collection(db, "accounts", userId, "projects")
        );
        result.docs.forEach((doc) => list.push({ ...doc.data(), id: doc.id }));
        setProjects(list);
        return list;
    } catch (error) {
        console.log(error);
    }
};

export const updateEntry = async (collectionName, userId, docId, input) => {
    try {
        await updateDoc(doc(db, "accounts", userId, collectionName, docId), input);
        toast.success("Entry updated successfully!");
    } catch (error) {
        console.error(error);
        toast.error("Error updating entry");
    }
};

export const deleteEntry = async (collectionName, userId, docId) => {
    try {
        await deleteDoc(doc(db, "accounts", userId, collectionName, docId));
        toast.success("Entry deleted successfully!");
    } catch (error) {
        console.error(error);
        toast.error("Error deleting entry");
    }
};
