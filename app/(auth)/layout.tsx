"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const navLinks = [
  { href: '/login', label: 'Login' },
  { href: '/register', label: 'Sign Up' },
  { href: '/forgot-password', label: 'Forgot Password' },
]

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname(); // get teh current path
  return (
    <>
      <p>This is Auth Layout</p>
      {children}
      {navLinks.map(link => {
        const isActive = pathName === link.href;
        return (
          <p key={link.label} className={isActive ? 'text-red-300' : "text-blue-800"}><Link href={link.href}> {link.label}</Link></p>
        );
      })}
    </>
  )
}

export default AuthLayout