export function loginUser(name, password, navigate) { 
    const account = JSON.parse(localStorage.getItem('user'));
    if (name && password && account?.name === name.trim() && account?.password === password.trim()) { 
        setTimeout(() => {
            navigate('/');
        }, 500);
    } else { 
        window.alert('not valid');
    }
}