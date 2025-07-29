"use client";
import React, { createContext, useContext, useMemo, useState } from "react";
import { useCookies } from "next-client-cookies";

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
  const [user, setUser] = useState<string>("false");
  const cookies = useCookies();

  useMemo(async () => {
    const loginCookies = cookies.get("login");
    if (loginCookies === "true") setLogin(true);
  }, []);
  const LoginMode: toggleLoginModeType = {
    toggleLoginMode: () => {
      cookies.set(
        "login",
        login ? "false" : "true"
        //{expires: new Date(Date.now() + 24 * 60 * 60 * 1000)}
      );
      setLogin(!login);
      if (login === false) setUser("true");
    },
  };

  return { login, LoginMode };
};

export const LoginProvider = ({ children }: { children: React.ReactNode }) => {
  const { login, LoginMode } = useLoginModeFunction();
  return (
    <LoginModeContext value={{ login, LoginMode }}>{children}</LoginModeContext>
  );
};

export const useLoginMode = () => useContext(LoginModeContext);
