export function registerUser(name, email, password, navigate) { 
    if (name && email && password) { 
        localStorage.setItem('user', JSON.stringify({
            name: name,
            email: email,
            password: password
        }))
        setTimeout(() => {
            navigate('/login')
        }, 500);
    } else { 
        window.alert('Not Valid');
    }
}