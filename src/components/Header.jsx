import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

function Header() {

    const navigate = useNavigate()
    const user = useSelector(store => store.user)
    const dispatch = useDispatch()

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful
        }).catch((error) => {
            // An error happend
            navigate("/error")
        })
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                const { uid, email, displayName, photoURL } = user;

                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL
                    })
                )
                navigate("/browse")
            }
            else {
                // User is signed out
                dispatch(removeUser())
                navigate("/")
            }
        })

        // unsubscribe when component unmounts
        return () => unsubscribe();
    }, []);

    return (
        <div className="absolute w-full px-8 py-2 bg-linear-to-b from-black z-10 flex justify-between items-center">
            <img
                src={LOGO}
                alt="logo"
                className="w-60"
            />

            {user && (
                <div className="flex items-center">
                    <img
                        src={user?.photoURL || "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"}
                        alt="usericon"
                        className="w-12 h-12"
                    />
                    <button
                        className="bg-red-600 text-white rounded py-1.5 px-3 h-fit font-bold cursor-pointer"
                        onClick={handleSignOut}
                    >
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    )
};

export default Header;