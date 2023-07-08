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

type Providers = Record<string, Provider>;

const AuthProviders = () => {

  const [providers, setProviders] = useState<Provider | null>(null);

  if(providers) {
    return (
      <div>
        
      </div>
    )
  }
}

export default AuthProviders