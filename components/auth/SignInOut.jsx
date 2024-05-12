'use client'
import Link from "next/link";
import { useAuth } from "@/app/hooks/useAuth"
import { useRouter } from "next/navigation";

const SignInOut = () => {
    const { auth, setAuth } = useAuth();
    const router = useRouter();

    const logout = () => {
        setAuth(null);
        router.push('/login')
    }

  return (
    <div>
        {
            auth ? (
                <>
                    <span className="mx-2 text-green-300">Hello, {auth?.name}</span>
                    <span className="mx-1 text-white">|</span>
                    <a className="cursor-pointer text-red-300 ml-2" onClick={logout} >Logout</a>
                </>
            ) : (<Link href="/login">Login</Link>)
        }
    </div>
  )
}

export default SignInOut