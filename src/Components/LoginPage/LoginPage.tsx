import React from 'react'
import googleImage from '../../assets/googleImage.png';
import facebookImage from '../../assets/facebookImage.png';
import styles from './LoginPage.module.css';

export default function LoginPage() {

    const googleLogin = () => {
        // window.open("https://oauth-video-backend.herokuapp.com/auth/google", "_self");
        window.open("https://localhost:4000/auth/google", "_self");
    }

    const facebookLogin = () => {
        // window.open("https://oauth-video-backend.herokuapp.com/auth/github", "_self");
        window.open("https://localhost:4000/auth/facebook", "_self");
    }
    



    return (
        <div className={styles.loginPage}>
            <div className={styles.loginForm}>
                <h1>Login</h1>
                <div className={styles.googleContainer} onClick={googleLogin}>
                    <img src={googleImage} alt="Google Icon" />
                    <p>Login With Google</p>
                </div>

                <div className={`${styles.googleContainer} ${styles.facebookContainer}`} onClick={facebookLogin}>
                    <img src={facebookImage} alt="Facebook Icon" />
                    <p>Login With Facebook</p>
                </div>

            </div>

        </div>
    )
}
