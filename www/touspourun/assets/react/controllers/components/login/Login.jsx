import React, {useState} from 'react';

export default function Login() {
    const [credentials, setCredentials] = useState({
        login: '',
        password: '',
        lastName: '',
    })

    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }
    let onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
        
            <div className="group">
                <label htmlFor="login">Email</label>
                <input type="text" name="login" value={credentials.login} onChange={onChange}/>
                <input type="text" id="username" name="last_username" value="{{ last_username }}" onChange={onChange}></input>
            </div>
            <div className="group">
                <label htmlFor="password">Mot de passe</label>
                <input type="text" name="password" value={credentials.password} onChange={onChange}/>
                <input type="text" name="_csrf_token" value="{{ csrf_token('authenticate') }}"></input>
            </div>
            <div className="group">
                <button type="submit">Connexion</button>
            </div>
        </>
    );
}
