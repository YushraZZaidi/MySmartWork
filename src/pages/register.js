import React, { useState } from 'react'

function Register() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleChange = (e) =>{
        if(e.target.name == 'name'){
            setName(e.target.value)
        }
        else if(e.target.name == 'email')
        {
            setEmail(e.target.value)
        }
        else if(e.target.name == 'password')
        {
            setPassword(e.target.value)
        }
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const data = {name,email,password}
        let res = await fetch('http://localhost:3000/api/register', {
            method: 'POST' ,
            headers: {'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        let response = await res.json()
        setName('')
        setEmail('')
        setPassword('')
    }
    return (
        <>
            <form  onSubmit={handleSubmit} className="row" method='POST'>
                <div className='mx-auto col-10 col-md-8 col-lg-6'>
                    <div className="mb-3">
                        <label htmlFor='name' className="form-label">Name</label>
                        <input value={name} onChange={handleChange} type="name" name='name' className="form-control" id="name" aria-describedby="name" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor='email'>Email</label>
                        <input value={email} onChange={handleChange} type="email" name='email' className="form-control" id="email" aria-describedby="email" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor='password'>Password</label>
                        <input value={password} onChange={handleChange} type="password" name='password' className="form-control" id="password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </div>
            </form>
        </>
    )
}

export default Register