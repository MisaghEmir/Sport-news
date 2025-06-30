"use client";
import React from "react";
import store from "./Store";
import { useDispatch } from "react-redux";
import ProviderRedux from "./Provider";

export default function ScrollHandle() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   gsap.to(".title", 0.0, { opacity: 0 });
  //   gsap.to(".title", 0.4, { y: 60 });

  //   setTimeout(() => {
  //     gsap.to(".title", 0.4, { y: 0, opacity: 1 });
  //   }, 200);
  // }, []);
  window.onscroll = function () {
    dispatch({
      type: "setscroll",
      value: window.pageYOffset,
    });
    if (window.pageYOffset > 1) {
      console.log(true);
    } else {
      console.log(false);
    }
  };
  return <></>
}
