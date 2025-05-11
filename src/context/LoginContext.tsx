"use client";
import React, { createContext, useContext, useMemo, useState } from "react";

type LoginMode = {
  login: Boolean;
  LoginMode: { toggleLoginMode: () => void };
};
type toggleLoginModeType = {
  toggleLoginMode: () => void;
};

const LoginM: LoginMode = {
  login: false,
  LoginMode: { toggleLoginMode: () => {} },
};

const LoginModeContext = createContext<LoginMode>(LoginM);

const useLoginModeFunction = () => {
  const [login, setLogin] = useState<Boolean>(false);

  useMemo(async () => {}, []);
  const LoginMode: toggleLoginModeType = {
    toggleLoginMode: () => {
      setLogin(!login);
    },
  };

  return { login, LoginMode };
};

export const LoginProvider = ({ children }: { children: React.ReactNode }) => {
  const { login, LoginMode } = useLoginModeFunction();
  return (
    <LoginModeContext value={{ login, LoginMode }}>
      <div className={login ? "dark" : "light"}>{children}</div>
    </LoginModeContext>
  );
};

export const useLoginMode = () => useContext(LoginModeContext);
