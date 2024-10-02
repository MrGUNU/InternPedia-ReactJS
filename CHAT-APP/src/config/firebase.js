/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCw3x5zt3mzCZ2tOJky_5kJVgtJEaPdXow",
  authDomain: "chat-app-f4b4b.firebaseapp.com",
  projectId: "chat-app-f4b4b",
  storageBucket: "chat-app-f4b4b.appspot.com",
  messagingSenderId: "276659195164",
  appId: "1:276659195164:web:8a7f8a85ab903739acbed9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username,email,password) =>{
    try{
      const res = await createUserWithEmailAndPassword(auth,email,password);
      const user = res.user;
      await setDoc(doc(db,"users",user.uid),{
        id:user.uid,
        username:username.toLowerCase(),
        email,
        name:"",
        avatar:"",
        bio:"Hey, There I am using chat app",
        lastSeen:Date.now()
      })
      await setDoc(doc(db,"chats",user.uid),{
        chatData:[]
      })
    } catch (error) {
        console.error(error)
        toast.error(error.code)
    }
}

export {signup}