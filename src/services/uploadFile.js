import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";
import { storage } from "../firebase";

export const uploadFile = (file, setInputs) => {
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            switch (snapshot.state) {
                case "paused":
                    toast.info("Upload is paused");
                    break;
                case "running":
                    console.log(`Upload is ${progress} running`);
                    break;
                default:
                    break;
            }
        },
        (error) => {
            toast.error("Error on uploading file");
        },
        () => {
            toast.success("Upload completed!");
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                setInputs((prev) => ({ ...prev, photoURL: url }));
            });
        }
    );
};
