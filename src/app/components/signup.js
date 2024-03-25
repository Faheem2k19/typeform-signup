"use client";
import { useState } from "react";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const validateEmail = () => {
        if (!email) {
            setEmailError("This field cannot be left blank");
            return false;
        }
        setEmailError("");
        return true;
    };

    const validatePassword = () => {
        if (!password) {
          setPasswordError("Password cannot be left blank");
          return false;
        } else if (password.length < 8 || !/[a-zA-Z]/.test(password) || !/\d/.test(password) || !/[!@#$%^&*]/.test(password)) {
          setPasswordError("Use 8 or more characters with a mix of letters, numbers and symbols");
          return false;
        }
        setPasswordError("");
        return true;
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        if (isEmailValid && isPasswordValid) {
            // Proceed with form submission
            console.log("Form submitted successfully");
        }
    };

    return (
        <form className="flex flex-col justify-center items-center gap-4 max-w-xl mx-auto" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
                <input
                    type="email"
                    autoComplete="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={validateEmail}
                    className="o-form-input-name-email"
                />
                {emailError && (
                    <p className="text-red-500 text-xs">
                        <span className="inline-block mr-1 align-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 inline-block align-middle"
                                viewBox="0 0 1024 1024"

                                fill="currentColor"
                            >
                                <path d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z" />
                            </svg>
                        </span>
                        {emailError}
                    </p>
                )}
            </div>
            <div className="flex flex-col gap-1">
                <input
                    type="password"
                    autoComplete="current-password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={validatePassword}
                    className="o-form-input-name-password"
                />
                {passwordError && (
                    <p className="text-red-500 text-xs">
                        <span className="inline-block mr-1 align-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 inline-block align-middle"
                                viewBox="0 0 1024 1024"

                                fill="currentColor"
                            >
                                <path d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z" />
                            </svg>
                        </span>
                        {passwordError}
                    </p>
                )}
            </div>
            <div className="flex items-start">
                <input type="checkbox" id="terms" name="terms" required className="mt-1" />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-600 iovUGO">
                    I agree to Typeform’s
                    <a rel="noopener" target="_blank" href="https://www.typeform.com/terms-service/">
                        {" "}Terms of <br /> Service
                    </a>,{" "}
                    <a rel="noopener" target="_blank" href="https://www.typeform.com/privacy-policy/">
                        Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a rel="noopener" target="_blank" href="https://www.typeform.com/privacy-policy/">
                        Data <br /> Processing Agreement
                    </a>
                    .
                </label>
            </div>

            <button type="submit" className="button-primary">
                Create my free account
            </button>
        </form>
    );
}
