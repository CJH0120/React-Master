import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import { useInput } from "../../hook/useInput";

const LoginMain = () => {
    const [email, onChangeEmail] = useInput("");
    const [password, onChangePassword] = useInput("");

    return (
        <>
            <LoginTamplate>
                <h1>로그인</h1>
                <div>
                    <label htmlFor="user-email"></label>
                    <input 
                    name="user-email"
                    type="text"
                    value={email}
                    onChange={onChangeEmail}
                    placeholder="이메일을 입력해주세요"
                    autoComplete="off"
                    required
                    />
                </div>
                <div>
                    <label htmlFor="user-password"></label>
                    <input 
                    name="user-password"
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                    placeholder="비밀번호를 입력해주세요"
                    autoComplete="off"
                    required
                    />
                </div>
                <button>로그인</button>
                <Link to="/register">아직 회원이 아니신가요?</Link>
            </LoginTamplate>
        </>
    )
}
export default LoginMain;

const LoginTamplate = styled.div`
    box-sizing: border-box;
    max-width: 50rem;
    min-width: 18.75rem;
    width: 80%;
    height: 100%;
    margin: 0 auto;
    text-align: center;

    & h1 {
        color: #4F5681
    }

    & input {
        box-sizing: border-box;
        width: 50%;
        margin: 0.1rem 0;
        padding: 0.35rem;
        border: 1px solid #DDD;
        font-size: 0.875rem;
        color: #666;
    }

    & input::placeholder{
        font-size: 0.875rem;
        color: #ccc;
    }

    & input:focus{
        outline: none;
        border: 1px solid #7784cc;
        box-shadow: 0 0 0 0.1rem rgb(59 65 99/ 25%);
    }

    & button {
        box-sizing: border-box;
        width: 50%;
        margin: 0.2rem;
        padding: 0.3rem 0;
        border: none;
        font-size: 0.875rem;
        color: #fff;
        background: #4F5681;
        cursor: pointer;
    }

    & button:hover {
        background: #3b4163;
    }

    & a {
        display: block;
        font-size: 0.875rem;
        color: #666;
    }
`