import { initializeApp } from "firebase/app";

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    updateDoc,
    serverTimestamp,
    onSnapshot,
    query,
    orderBy,
} from 'firebase/firestore';




function getTasks(ID, callback) {
    return onSnapshot(
        query(
            collection(db, 'calendar'),
            orderBy('timestamp', 'asc'),
            
        ),
        (querySnapshot) => {
            const messages = querySnapshot.docs.map((doc) => ({
                
                id: doc.id,
                ...doc.data(),
            }));
            
            callback(tasks);
        }
    );
}

async function postTask(ID, task) {
    const colRef = collection(db, 'calendar')
    try {
        await addDoc(colRef, {
            task: ID,
            timestamp: serverTimestamp(),
            value: task.trim(),
        });
    } catch (error) {
        console.error(error);
    }
}



async function updateTask(docID) {
    const docRef = doc(db, 'calendar', docID)
    try {
        await updateDoc(docRef, {
            
            is_delayed: false,
            
        });
    } catch (error) {
        console.error(error);
    }
}
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



export {  postTask, db, getTasks, postTask, updateTask };