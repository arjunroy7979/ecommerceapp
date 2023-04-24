import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-8 col-lg-7 col-xl-6">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                className="img-fluid" alt={"Phone image"} />
                        </div>
                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                            <form>

                                <div className="form-outline mb-4">
                                    <input type="email"  className="form-control form-control-lg" />
                                    <label className="form-label" for="form1Example13">Email address</label>
                                </div>


                                <div className="form-outline mb-4">
                                    <input type="password"  className="form-control form-control-lg" />
                                    <label className="form-label" for="form1Example23">Password</label>
                                </div>

                                <div className="d-flex justify-content-around align-items-center mb-4">

                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value=""  checked />
                                        <label className="form-check-label" for="form1Example3"> Remember me </label>
                                    </div>
                                    <NavLink to="#!">Forgot password?</NavLink>
                                </div>

                                <NavLink to={'/products'} className="btn btn-primary btn-lg btn-block">Sign in</NavLink>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
