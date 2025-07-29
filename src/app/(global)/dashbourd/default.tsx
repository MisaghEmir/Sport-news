"use client"
import React, { useEffect } from 'react'
import { useCookies } from "next-client-cookies";
import { redirect } from 'next/navigation';

function defaultDashbourd() {
//  const cookies = useCookies();
//  const login = cookies.get('login')
//   if(login === "false") redirect('/')
  return (
    <div></div>
  )
}

export default defaultDashbourd