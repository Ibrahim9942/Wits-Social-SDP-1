import './settings.css'
import {setDoc, doc} from "firebase/firestore";
 import { collection, query , where, getDocs} from "firebase/firestore";
import {useContext, useState} from 'react'



import { firestore} from "../firebase/config";
import { AuthContext } from "../context/AuthContext";
import Header from "../components/Header";


// //This is the Settings functional component. It allows a user to change their name and biography.
// The bio is fetched from firestore, and the name is updated in firestore on button press.

const Settings = () => {

    // declare variables
    const [fullName, setFullName] = useState("");
    const [newBio, setNewBio] = useState('')
    const [newFullName, setNewFullName] = useState('')
    const [bio, setBio] = useState("");
    const [userDocId, setUserDocId] = useState("");
    const db = firestore;
    const { user } = useContext(AuthContext);


    // This code queries the database for a user's full name and biography, and sets the state variables with that data.
    // It also stores the document id for later use.
    async function getFullName() {

        let dbUsername;
        let dbBio;
        const q = query(collection(db, "user"), where("userId", "==", user.uid ));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            dbUsername =  doc.data()["fullName"];
            dbBio = doc.data()["biography"];

            setFullName(dbUsername);
            setBio(dbBio);

            setUserDocId(doc.id)        // gets and stores doc id for later referencing
        })
    }

    getFullName();      //get username once page loads


    // updates bio to current form contents on click of button
    const updateBio = e => {
        e.preventDefault()

        if (newBio !== "")  // checks that a change has actually been made
        {
            const docRef =  doc(db, "user", userDocId);
            setDoc(docRef, {biography: newBio}, { merge: true });
        }

    }

    // updates full name
    const updateFullName = e => {
        e.preventDefault()

        if (newFullName !== "")  // checks that a change has actually been made
        {
            const docRef =  doc(db, "user", userDocId);
            setDoc(docRef, {fullName: newFullName}, { merge: true });
        }

    }



    return (
        // This code is a form for updating a user's bio and full name. The user's current bio and full name are pulled from the database and displayed in the form.
        // When the user submits the form, the new bio and full name are updated in the database.
        <>
        <Header/>

        <div className='center'>
            <div className = 'profile-heading'>
                <h1 className= "settings">Settings</h1>
                <div className='profile'>
                    <form onSubmit={updateBio} name='Bio editor'>

                  <textarea
                      rows="4"
                      cols="50"
                      className="bio-form"
                      value={newBio}
                      placeholder= {bio}
                      onChange={e => setNewBio(e.target.value)}
                  />
                        <button
                            className= "w-full bg-blue-400 text-xs text-black font-bold p-1 rounded-sm object-center"
                            type='submit'
                        >Update bio</button>
                    </form>

                    <form onSubmit={updateFullName} name='Bio editor'>
                  <textarea
                      rows="1"
                      cols="50"
                      className="bio-form"
                      value={newFullName}
                      placeholder= {fullName}
                      onChange={e => setNewFullName(e.target.value)}
                  />
                        <button
                            className= "w-full bg-blue-400 text-xs text-black font-bold p-1 rounded-sm"
                            type='submit'
                        >Update Fullname</button>
                    </form>
                </div>
            </div>
        </div>

    </>

    )
}

export default Settings
