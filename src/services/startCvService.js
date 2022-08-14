import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export const createAccoutCollection = async (data, userId) => {
    try {
        await setDoc(doc(db, "accounts", userId), data);
        toast.success("Account created successfully");
    } catch (error) {
        return toast.error(error.message);
    }
};
