import React from 'react'

function Login() {
    return (
        <>
        <form className="mt-8 space-y-6">
        <div className='mx-auto col-10 col-md-8 col-lg-6'>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Stay Signed In</label>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            </div>
        </form>
        </>
        
    )
}

export default Login