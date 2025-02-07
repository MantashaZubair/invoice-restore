"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Cookies from "js-cookie";

export default function GoogleCallbackPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const token = searchParams.get("token");
    try {
      if (token) {
        // Store token in a cookie (valid for 1 day)
        Cookies.set("accessToken", token, {expiresIn:"10s", path: "/", secure: true, sameSite: "None" });
  
        // Redirect smoothly without full reload
        router.replace("/user/myinvoice");
      } else {
        router.replace("/account/login");
      } 
    } catch (error) {
      console.log(error)
      //  if (error.response?.status === 401) {
      //       const response = router.replace('/account/login');
      //       cookies.set('accessToken', '', { maxAge: 0 }); // Clear the cookie
      //       return response;
      //     }
    }

   
  }, [searchParams, router]);

  return <p>Processing Google login...</p>;
}
