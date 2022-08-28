import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../firebase";

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
