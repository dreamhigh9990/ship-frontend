import React, { useEffect } from "react";
import MetaTags from "react-meta-tags";
import { Row, Col, CardBody, Card, Alert, Container, Input, Label, Form, FormFeedback } from "reactstrap";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

// action
import { registerUser, apiError } from "../../store/actions";

//redux
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

//import images 
import logoLight from "../../assets/images/logo-light.png";
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";


//Import Flatepicker
import Flatpickr from "react-flatpickr";

const Register = () => {
    const dispatch = useDispatch();

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            name: '',
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Please Enter Your Full Name"),
            username: Yup.string().required("Please Enter Your Username"),
            password: Yup.string().required("Please Enter Your Password"),
        }),
        onSubmit: (values) => {
            dispatch(registerUser(values));
        }
    });

    const { user, registrationError } = useSelector(state => ({
        user: state.Account.user,
        registrationError: state.Account.registrationError,
    }));

    useEffect(() => {
        dispatch(apiError(""));
    }, [dispatch]);
    document.title = "Sign Up Ship";
    return (
        <React.Fragment>
            <ParticlesAuth>
                <div className="auth-page-content">

                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="text-center mt-sm-5 mb-4 text-white-50">
                                    <div>
                                        <Link to="/" className="d-inline-block auth-logo">
                                            <img src={logoLight} alt="" height="20" />
                                        </Link>
                                    </div>
                                    <p className="mt-3 fs-15 fw-medium">Ship Management</p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="justify-content-center">
                            <Col md={8} lg={6} xl={5}>
                                <Card className="mt-4">

                                    <CardBody className="p-4">
                                        <div className="text-center mt-2">
                                            <h5 className="text-primary">Create New Account</h5>
                                        </div>
                                        <div className="p-2 mt-4">
                                            <Form
                                                onSubmit={(e) => {
                                                    e.preventDefault();
                                                    validation.handleSubmit();
                                                    return false;
                                                }}
                                                className="needs-validation" action="#">
                                                {user && user ? (
                                                    <Alert color="success">
                                                        Register User Successfully
                                                    </Alert>
                                                ) : null}

                                                {registrationError && registrationError ? (
                                                    <Alert color="danger"><div>{registrationError}</div></Alert>
                                                ) : null}

                                                <div className="mb-3">
                                                    <Label htmlFor="useremail" className="form-label">User ID <span className="text-danger">*</span></Label>
                                                    <div className="input-group">
                                                        <Input
                                                            id="username"
                                                            name="username"
                                                            className="form-control"
                                                            placeholder="Enter User ID"
                                                            type="text"
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            value={validation.values.username || ""}
                                                            invalid={
                                                                validation.touched.username && validation.errors.username ? true : false
                                                            }
                                                            aria-describedby="button-addon2"
                                                        />
                                                        <button className="btn btn-success shadow-none" type="button" id="button-addon2"><i className=" ri-key-2-line label-icon align-middle fs-16 me-2"></i> Cert</button>

                                                    </div>
                                                    {validation.touched.username && validation.errors.username ? (
                                                        <FormFeedback type="invalid"><div>{validation.errors.username}</div></FormFeedback>
                                                    ) : null}
                                                    <div className="invalid-feedback">
                                                        Please enter user ID
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <Label htmlFor="name" className="form-label">Full Name <span className="text-danger">*</span></Label>
                                                    <Input
                                                        name="name"
                                                        type="text"
                                                        placeholder="Enter Full Name"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.name || ""}
                                                        invalid={
                                                            validation.touched.name && validation.errors.name ? true : false
                                                        }
                                                    />
                                                    {validation.touched.name && validation.errors.name ? (
                                                        <FormFeedback type="invalid"><div>{validation.errors.name}</div></FormFeedback>
                                                    ) : null}
                                                    <div className="invalid-feedback">
                                                        Please enter full name
                                                    </div>
                                                </div>
                                                <div className="mb-2">
                                                    <Label htmlFor="Gender" className="form-label">Gender <span className="text-danger">*</span></Label>

                                                    <br></br>
                                                    <Row className="px-4">
                                                        <Col lg={6}>
                                                            <Input className="form-check-input" type="radio" name="gender" id="genderMale" defaultChecked/>
                                                            <Label className="form-check-label" for="genderMale">Male</Label>
                                                        </Col>
                                                        <Col lg={6}>  
                                                            <Input className="form-check-input" type="radio" name="gender" id="genderFemale" />
                                                            <Label className="form-check-label" for="genderFemale">Female</Label>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <br></br>
                                                <div className="mb-2">
                                                    <Label htmlFor="birthday" className="form-label">Birthday <span className="text-danger">*</span></Label>
                                                    <Flatpickr
                                                        className="form-control"
                                                        options={{
                                                            dateFormat: "Y-m-d",
                                                            defaultDate: ["1990-01-01"]
                                                        }}
                                                    />

                                                </div>
                                                <div className="mb-2">
                                                    <Label htmlFor="userpassword" className="form-label">Password <span className="text-danger">*</span></Label>
                                                    <Input
                                                        name="password"
                                                        type="password"
                                                        placeholder="Enter Password"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.password || ""}
                                                        invalid={
                                                            validation.touched.password && validation.errors.password ? true : false
                                                        }
                                                    />
                                                    {validation.touched.password && validation.errors.password ? (
                                                        <FormFeedback type="invalid"><div>{validation.errors.password}</div></FormFeedback>
                                                    ) : null}
                                                    <div className="invalid-feedback">
                                                        Please enter password
                                                    </div>
                                                </div>
                                                <div className="mb-2">
                                                    <Label htmlFor="userpassword" className="form-label">Confirm Password <span className="text-danger">*</span></Label>
                                                    <Input
                                                        name="confirmpassword"
                                                        type="password"
                                                        placeholder="Enter Confirm Password"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.confirmpassword || ""}
                                                        invalid={
                                                            validation.touched.confirmpassword && validation.errors.confirmpassword ? true : false
                                                        }
                                                    />
                                                    {validation.touched.confrimpassword && validation.errors.confirmpassword ? (
                                                        <FormFeedback type="invalid"><div>{validation.errors.confirmpassword}</div></FormFeedback>
                                                    ) : null}
                                                    <div className="invalid-feedback">
                                                        Please enter confirm password
                                                    </div>
                                                </div>

                                                {/* <div className="mb-4">
                                                    <p className="mb-0 fs-12 text-muted fst-italic">By registering you agree to the Velzon
                                                        <Link to="#" className="text-primary text-decoration-underline fst-normal fw-medium">Terms of Use</Link></p>
                                                </div> */}

                                                <div className="mt-4">
                                                    <button className="btn btn-success w-100" type="submit">Sign Up</button>
                                                </div>

                                                {/* <div className="mt-4 text-center">
                                                    <div className="signin-other-title">
                                                        <h5 className="fs-13 mb-4 title text-muted">Create account with</h5>
                                                    </div>

                                                    <div>
                                                        <button type="button" className="btn btn-primary btn-icon waves-effect waves-light"><i className="ri-facebook-fill fs-16"></i></button>{" "}
                                                        <button type="button" className="btn btn-danger btn-icon waves-effect waves-light"><i className="ri-google-fill fs-16"></i></button>{" "}
                                                        <button type="button" className="btn btn-dark btn-icon waves-effect waves-light"><i className="ri-github-fill fs-16"></i></button>{" "}
                                                        <button type="button" className="btn btn-info btn-icon waves-effect waves-light"><i className="ri-twitter-fill fs-16"></i></button>
                                                    </div>
                                                </div> */}
                                            </Form>
                                        </div>
                                    </CardBody>
                                </Card>

                                <div className="mt-4 text-center">
                                    <p className="mb-0">Already have an account ? <Link to="/login" className="fw-semibold text-primary text-decoration-underline"> Signin </Link> </p>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </div>
            </ParticlesAuth>
        </React.Fragment>
    );
};

export default Register;
