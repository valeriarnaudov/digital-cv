import { toast } from "react-toastify";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const createAccoutCollection = async (data, userId) => {
    try {
        if (!data.username) {
            return toast.error("Username is required");
        }
        
        // Check if username is taken
        const usernameRef = doc(db, "usernames", data.username.toLowerCase());
        const usernameDoc = await getDoc(usernameRef);
        
        if (usernameDoc.exists() && usernameDoc.data().uid !== userId) {
            toast.error("Username is already taken. Please choose another one.");
            // Throw erro to prevent account creation in UI
            throw new Error("Username taken");
        }

        // Claim username
        await setDoc(usernameRef, { uid: userId });

        // Save account data
        await setDoc(doc(db, "accounts", userId), data);
        
        toast.success("Account created successfully!");
        return true;
    } catch (error) {
        toast.error(error.message || "Error creating account");
        throw error;
    }
};
