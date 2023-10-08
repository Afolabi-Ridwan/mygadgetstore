import styles from "./signIn.module.css";
import firstImage from "./images/login-img1.svg";
import secondImage from "./images/login-img4.svg";
import thirdImage from "./images/login-img3.svg";
import google from "./images/google.png";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className={styles.signIn}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <div className={styles.slider}>
            <div className="slider1">
              <img src={firstImage} alt="firstImage" />

              <h3> Love Shopping? </h3>

              <p> Order your favorite items with just a click. </p>
            </div>

            <div className="slider2">
              <img src={thirdImage} alt="thirdImage" />

              <h3> Love Shopping? </h3>
              <p> We have amazing products just for just you 😉</p>
            </div>

            <div className="slider3">
              <img src={secondImage} alt="secondImage" />

              <h3> Easy Delivery </h3>
              <p> Get your package without any hazzle 📦</p>
            </div>
          </div>
        </div>

        <div className={styles.formContainer}>
          <div className={styles.form}>
            <h1> Hi, Welcome Back </h1>

            <form>
              <label htmlFor="email"> Email</label>
              <input
                type="email"
                id="email"
                value="test01@gmail.com"
                onChange={(event) => event.target.value}
              />

              <label htmlFor="password"> Password </label>
              <input
                type="password"
                id="password"
                value="*************"
                onChange={(event) => event.target.value}
              />

              <div className={styles.forgotPassword}>
                <div>
                  <input
                    style={{ marginRight: "5px" }}
                    type="checkbox"
                    id="rememberMe"
                    onChange={(event) => event.target.value}
                  />
                  <label htmlFor="rememberMe">Remember Me </label>
                </div>
                <div style={{ cursor: "pointer" }}>
                  <p> Forgot Password? </p>
                </div>
              </div>
              <button className={styles.submitBtn}>
                <Link className={styles.linkTag} to="/home">
                  {" "}
                  Sign In{" "}
                </Link>
              </button>
            </form>

            <div className={styles.googleSignIn}>
              <img src={google} alt="googlePix" />
              <p> Sign up with Google </p>
            </div>

            <p className={styles.noAccount}>
              {" "}
              Dont have an account? Sign up for free{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
