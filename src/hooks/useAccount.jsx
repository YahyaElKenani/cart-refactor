import { useEffect, useState } from "react";

export default function useAccount() { 
    const [user, setUser] = useState(); 
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')));
    }, [])
    return user; 
}