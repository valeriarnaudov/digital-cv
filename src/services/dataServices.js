import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../firebase";

export const getData = async (userId, setData) => {
    try {
        const data = await getDoc(doc(db, "accounts", userId));
        setData(data.data());
        return data.data()
    } catch (error) {
        toast.error(error.message);
    }
}