import React, { useState } from "react";
import "./Login.css";
import logo from "./image.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div id="arkaplan">
      <div class="wrapper fadeInDown">
        <div id="form-icerigi">
          

          <form>
            <input
              type="text"
              id="login"
              class="fadeIn second"
              name="login"
              placeholder="Mail Adresi"
            />
            <input
              type="password"
              id="password"
              class="fadeIn third"
              name="login"
              placeholder="Parola"
            />
            <input type="submit" class="fadeIn fourth" value="Giriş Yap" />
          </form>
        </div>
      </div>
    </div>
  );
}
