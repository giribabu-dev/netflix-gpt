import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { auth } from "../utils/firebase";

function Header() {

    const navigate = useNavigate()
    const user = useSelector(store => store.user)

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful
            navigate("/")
        }).catch((error) => {
            // An error happend
            navigate("/error")
        })
    };

    return (
        <div className="absolute w-full px-8 py-2 bg-linear-to-b from-black z-10 flex justify-between items-center">
            <img
                src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-01-09/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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