import { collection, doc, getDoc, setDoc, updateDoc, deleteDoc, onSnapshot } from "firebase/firestore";
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
        toast.error("Error on uploading data");
    }
};

export const getWorkExp = (userId, setWorkExp) => {
    try {
        return onSnapshot(collection(db, "accounts", userId, "workexp"), (snapshot) => {
            const list = [];
            snapshot.forEach((doc) => list.push({ ...doc.data(), id: doc.id }));
            setWorkExp(list);
        });
    } catch (error) {
        console.log(error);
    }
};

export const setEducation = async (userId, input) => {
    try {
        await setDoc(doc(collection(db, "accounts", userId, "education")), input);
        toast.success("Data uploaded successfully");
    } catch (error) {
        console.log(error);
        toast.error("Error on uploading data");
    }
};

export const getEducation = (userId, setEducation) => {
    try {
        return onSnapshot(collection(db, "accounts", userId, "education"), (snapshot) => {
            const list = [];
            snapshot.forEach((doc) => list.push({ ...doc.data(), id: doc.id }));
            setEducation(list);
        });
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
        toast.error("Error on uploading data");
    }
};

export const getCourses = (userId, setCourses) => {
    try {
        return onSnapshot(collection(db, "accounts", userId, "courses"), (snapshot) => {
            const list = [];
            snapshot.forEach((doc) => list.push({ ...doc.data(), id: doc.id }));
            setCourses(list);
        });
    } catch (error) {
        console.log(error);
    }
};

export const setOtherSkills = async (userId, input) => {
    try {
        await setDoc(doc(collection(db, "accounts", userId, "otherskills")), input);
        toast.success("Data uploaded successfully");
    } catch (error) {
        console.log(error);
        toast.error("Error on uploading data");
    }
};

export const getOtherSkills = (userId, setOtherSkills) => {
    try {
        return onSnapshot(collection(db, "accounts", userId, "otherskills"), (snapshot) => {
            const list = [];
            snapshot.forEach((doc) => list.push({ ...doc.data(), id: doc.id }));
            setOtherSkills(list);
        });
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

export const getLanguages = (userId, setLanguages) => {
    try {
        return onSnapshot(collection(db, "accounts", userId, "languages"), (snapshot) => {
            const list = [];
            snapshot.forEach((doc) => list.push({ ...doc.data(), id: doc.id }));
            setLanguages(list);
        });
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

export const getProjects = (userId, setProjects) => {
    try {
        return onSnapshot(collection(db, "accounts", userId, "projects"), (snapshot) => {
            const list = [];
            snapshot.forEach((doc) => list.push({ ...doc.data(), id: doc.id }));
            setProjects(list);
        });
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
