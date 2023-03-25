import Logo from './assets/logo.png'
import Landing from './assets/landing.png'
import About from './assets/About.png'
import React, {useState} from 'react';
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [help, setHelp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Firstname: ${firstName}, LastName: ${lastName}, Email: ${email}, What can we help you with?: ${help}`);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary h5">
        <div className="container-fluid">
          <img src={Logo} alt="" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div>
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0 ">
              <li className="nav-item p-3">
                <a className="nav-link text-dark" aria-current="page" href="#">
                  How it works
                </a>
              </li>
              <li className="nav-item p-3">
                <a className="nav-link text-dark" href="#">
                  Payment
                </a>
              </li>
              <li className="nav-item p-3">
                <a className="nav-link text-dark" href="#">
                  ContactUs
                </a>
              </li>
              <li className="nav-item p-3">
                <a className="nav-link text-dark" href="#">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <form className="d-flex " role="search">
            <button className="btn btn-lg btn-outline-dark mr-3" type="submit">
              Sign Up
            </button>
            <button className="btn btn-lg btn-dark mx-3" type="submit">
              Login
            </button>
          </form>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5">
            <h1 className="w-50 text-left">Make Your Payment More Secure</h1>
            <p className="w-75">
              Id donec ultrices tincidunt arcu non. Integer enim neque volutpat ac
              tincidunt vitae semper quis. Arcu dui vivamus arcu felis bibendum ut
              tristique et. Nullam vehicula ipsum a arcu cursus vitae congue mauris
              rhoncus. Donec ultrices tincidunt arcu non sodales neque sodales ut
              etiam.
            </p>
            <a
              href="#"
              className="btn btn-primary btn-lg text-dark text-bold w-50"
              style={{
                background:
                  "linear-gradient(90deg, rgba(174, 89, 196, 0.5) 0.62%, rgba(109, 236, 205, 0.38) 51.8%, rgba(219, 255, 0, 0.325) 94.73%)",
                border: "5px solid #FFFFFF",
                boxShadow: "0px 20px 35px rgba(63, 26, 75, 0.14)",
                borderRadius: 24,
                fontWeight: 600
              }}
            >
              Get Started
            </a>
          </div>
          <div className="col-md-6">
            <img src={Landing} alt="Gambar" className="img-fluid" />
          </div>
        </div>
        <div className="container mt-4">
        <div className="row">
        
          <div className="col-md-6">
          <img src={About} alt="Gambar" className="img-fluid" />
          </div>
          <div class="col-md-5">
          <h2>About Us</h2>
            <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis, mauris sed facilisis ullamcorper, elit nulla aliquet tellus, ac vehicula quam tellus eu odio. Proin eu ante sapien. Ut eget erat ac nisi hendrerit rhoncus eu at quam. Duis laoreet metus quis purus rhoncus scelerisque. Aliquam erat volutpat. Fusce pharetra nunc ac ipsum pharetra, vel laoreet eros aliquet. Duis sed lectus eu nisl accumsan sagittis eget sit amet nisl.</p>
          </div>
        </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <h1 className="w-50">Contact us</h1>
            <p className="w-75 mt-5">
              Need to get in touch with us? Either fill out the form with your
              inquiry of find the <a href="#">department email</a> you'd like to
              contact below
            </p>
          </div>
          <div className="col-md-6 form-group">
            <form action="" onSubmit={handleSubmit}>
              <div className="input-group">
                <div>
                  <label htmlFor="firstName">First Name*</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="firstName" 
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="ml-3">
                  <label htmlFor="lastName">Last Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="lastName"
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)}/>
                </div>
              </div>
              <div className="col-xs-6 mt-3">
                <label htmlFor="email">Email*</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="col-xs-6 mt-3">
                <label htmlFor="email">What can we help you with?</label>
                <textarea
                  className="form-control"
                  name=""
                  id="desc"
                  rows={3}
                  defaultValue={""}
                  value={help}
                  onChange={(e) => setHelp(e.target.value)}
                />
              </div>
              {/* <div className="mt-3 mb-3"> */}
                <button
                  className="btn btn-lg text-dark text-bold w-25"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(174, 89, 196, 0.5) 0.62%, rgba(109, 236, 205, 0.38) 51.8%, rgba(219, 255, 0, 0.325) 94.73%)",
                    border: "5px solid #FFFFFF",
                    boxShadow: "0px 20px 35px rgba(63, 26, 75, 0.14)",
                    borderRadius: 24,
                    fontWeight: 600
                  }}
                  type="submit"
                >
                  Submit
                </button>
              {/* </div> */}
            </form>
          </div>
        </div>
      </div>
      <footer className="bg-light">
        <div className="container py-4">
          <div className="row bg-light">
            <div className="col-md-6">
              <h4>Qyu Payment</h4>
              <p>
                Id donec ultrices tincidunt arcu non. Integer enim neque volutpat ac
                tincidunt vitae semper quis. Arcu dui vivamus arcu felis bibendum ut
                tristique et.
              </p>
              <div className="social-icons fa-2x">
                <a href="#">
                  <i className="fa-brands fa-facebook" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <h4>Links</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-dark">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark">
                    Payment
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark">
                    ContactUs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4>Address</h4>
              <p>A108 Adam Street New York, NY 535022 United States</p>
              <p className="w-75">
                <b>Phone: </b>+1 5589 55488 55
                <b>Email: </b> info@example.com
              </p>
            </div>
          </div>
        </div>
      </footer>
      </>
  )
}

export default App
