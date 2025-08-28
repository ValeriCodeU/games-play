import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import Path from "../../../paths";
import * as authService from "../../services/authService"

export default function Logout() {

    const navigate = useNavigate();
    const { logoutHandler } = useContext(AuthContext);

    // useEffect(() => {
    //     authService.logout()
    //         .then(() => {
    //             logoutHandler();
    //             navigate(Path.Home);
    //         })
    //         .catch(() => {
    //             logoutHandler();
    //             navigate(Path.Home)
    //         });
    // }, []); 

    useEffect(() => {
        let cancelled = false;

        authService.logout()
            .catch((err) => console.warn('Logout failed:', err))
                .finally(() => {
                    if (cancelled) return;
                    logoutHandler();
                    navigate(Path.Home, { replace: true });
                });

        return () => { cancelled = true; };
    }, []);

    return null;
}