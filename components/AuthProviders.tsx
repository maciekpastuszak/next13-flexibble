"use client";

import { getProviders, signIn } from 'next-auth/react';
import { useState, useEffect } from "react";

const AuthProviders = () => {

  const [providers, setProviders] = useState(null)

  return (
    <div>AuthProviders</div>
  )
}

export default AuthProviders