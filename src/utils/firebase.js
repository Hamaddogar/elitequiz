import firebase from "firebase/app";
import { useSelector } from "react-redux";
import { getProperty, websettingsData } from "../store/reducers/webSettings";
require("firebase/auth");
require("firebase/firestore");

const FirebaseData = () => {

    const websettingsdata = useSelector(websettingsData);

    const apiKeyData = websettingsdata && getProperty(websettingsdata, 'firebase_api_key');
    const authDomainData = websettingsdata && getProperty(websettingsdata, 'firebase_auth_domain');
    const databaseURLData = websettingsdata && getProperty(websettingsdata, 'firebase_database_url');
    const projectIdData = websettingsdata && getProperty(websettingsdata, 'firebase_project_id');
    const storageBucketData = websettingsdata && getProperty(websettingsdata, 'firebase_storage_bucket');
    const messagingSenderIdData = websettingsdata && getProperty(websettingsdata, 'firebase_messager_sender_id');
    const appIdData = websettingsdata && getProperty(websettingsdata, 'firebase_app_id');
    const measurementIdData = websettingsdata && getProperty(websettingsdata, 'firebase_measurement_id');

    let firebaseConfig = {
        apiKey: apiKeyData,
        authDomain: authDomainData,
        databaseURL: databaseURLData,
        projectId: projectIdData,
        storageBucket: storageBucketData,
        messagingSenderId: messagingSenderIdData,
        appId: appIdData,
        measurementId: measurementIdData,
    }

    // eslint-disable-next-line
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app(); // if already initialized, use that one
    }

    const auth = firebase.auth();

    const db = firebase.firestore();

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const facebookprovider = new firebase.auth.FacebookAuthProvider();

    return ({ auth, googleProvider, facebookprovider, firebase, db });

}

export default FirebaseData;
