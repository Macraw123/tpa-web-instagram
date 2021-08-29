import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import CardPageLayout from "src/components/CardPageLayout/CardPageLayout";
import Layout from "src/components/layout/Layout";
import "./LoginPage.scss";

interface Props {}

export default function LoginPage({}: Props): ReactElement {
  return (
    <Layout footer>
      <CardPageLayout
        withLogo
        bottomContent={
          <>
            <div className="login-form" style={{ marginTop: "10px" }}>
              <p>
                Don't have an account? <Link to="/register">Sign up</Link>
              </p>
            </div>
            <p className="app-store">Get the app</p>

            <div className="play">
              <img src="assets/app-store.png" alt="" />
              <img src="assets/gg-play.png" alt="" />
            </div>
          </>
        }
      >
        <div className="login-component">
          <input
            type="email"
            name="userName"
            placeholder=" Email or username"
          />
          <input type="password" name="userPassword" placeholder=" Password" />
          <input
            type="button"
            name="btnSign"
            value="Log In"
            className="sign-in-btn"
          />
          <p>OR</p>
          <a href="#">
            <p>Login with Facebook</p>
          </a>

          <Link to="/forgot_password">
            <p>Forgot Password?</p>
          </Link>
        </div>
      </CardPageLayout>
    </Layout>
  );
}
