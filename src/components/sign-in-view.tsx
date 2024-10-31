'use client';

import { auth } from '@/lib/firebase';
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signInAnonymously } from 'firebase/auth';
import Link from 'next/link';
import { useState } from 'react';

// export const metadata = {
//   title: "Sign In - Simple",
//   description: "Page description",
// };

export default function SignInView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  // Google Sign-In
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      console.log("Google Sign-In successful");
    } catch (err) {
      setError("Google Sign-In failed");
      console.error(err);
    }
  };

  // Email/Password Sign-In
  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);


      console.log("Email Sign-In successful");
    } catch (err) {
      setError("Email/Password Sign-In failed");
      console.error(err);
    }
  };

  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Sign in to your account</h1>
      </div>
      {/* Error Message */}
      {error && <div className="mb-4 text-red-500">{error}</div>}
      
      {/* Form */}
      <form onSubmit={handleEmailSignIn}>
        <div className="space-y-4">
          <div>
            <label
              className="mb-1 block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              className="form-input w-full py-2"
              type="email"
              placeholder="corybarker@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              className="mb-1 block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              className="form-input w-full py-2"
              type="password"
              autoComplete="on"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mt-6">
          <button type="submit" className="btn w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]">
            Sign In
          </button>
        </div>
      </form>
      
      {/* Google Sign-In Button */}
      <div className="mt-6 space-y-4">
        <button 
          onClick={handleGoogleSignIn} 
          className="btn w-full bg-red-500 text-white shadow"
        >
          Sign in with Google
        </button>
      </div>
      
      {/* Bottom link */}
      <div className="mt-6 text-center">
        <Link
          className="text-sm text-gray-700 underline hover:no-underline"
          href="/reset-password"
        >
          Forgot password
        </Link>
      </div>
    </>
  );
}
