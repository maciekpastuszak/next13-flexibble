"use client";

import { getProviders, signIn } from 'next-auth/react';
import { useState, useEffect } from "react";

type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string | undefined>
}

const AuthProviders = () => {

  const [providers, setProviders] = useState<Provider | null>(null);

  return (
    <div>AuthProviders</div>
  )
}

export default AuthProviders