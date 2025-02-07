"use client"
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

// Define the User type (you can extend this with other properties if necessary)
interface User {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
}

interface UserContextType {
  user: any | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  fetchUserProfile: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// Create a provider component
export const UserProvider = ({ children }:{children: React.ReactNode}) => {
  const [user, setUser] = useState<any>(null);

  // Fetch the user profile
  const fetchUserProfile = async () => {
    try {
      const accessToken = Cookies.get("accessToken");
      // const accessToken = localStorage.getItem("accessToken");
      const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/api/v1/user/me`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      });
      setUser(response.data);
    } catch (error) {
      console.error("Failed to fetch user:", error);
    }
  };

  useEffect(() => {
    if(!user) return
    fetchUserProfile();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, fetchUserProfile }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

// "use client";
// import React, { createContext, useContext, useState, useEffect } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";

// interface User {
//   _id: string;
//   email: string;
//   firstName: string;
//   lastName: string;
// }

// interface UserState {
//   user: User | null;
//   token: string;
// }

// const UserContext = createContext<[UserState, React.Dispatch<React.SetStateAction<UserState>>] | undefined>(undefined);

// export const UserProvider = ({ children }: { children: React.ReactNode }) => {
//   const [user, setUser] = useState<UserState>({
//     user: null,
//     token: "",
//   });

//   // Set axios default headers
//   axios.defaults.headers.common["Authorization"] = user?.token ? `Bearer ${user.token}` : "";

//   // Fetch user profile from API
//   // const fetchUserProfile = async () => {
//   //   try {
//   //     const accessToken = Cookies.get("accessToken");
//   //     if (!accessToken) return;

//   //     const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/api/v1/user/me`, {
//   //       headers: { Authorization: `Bearer ${accessToken}` },
//   //       withCredentials: true,
//   //     });

//   //     setUserState((prev) => ({
//   //       ...prev,
//   //       user: response.data,
//   //       token: accessToken,
//   //     }));
//   //   } catch (error) {
//   //     console.error("Failed to fetch user:", error);
//   //   }
//   // };

//   useEffect(() => {
//     // const storedAuth = Cookies.get("accessToken");
//     const storedAuth = localStorage.getItem('auth')
//     if (storedAuth) {
//       const parsedAuth = JSON.parse(storedAuth);
//       setUser({
//       ...user,
//         user: parsedAuth.user,
//         token: parsedAuth.token,
//       });
//     }
//   }, []);

//   return <UserContext.Provider value={[user, setUser]}>{children}</UserContext.Provider>;
// };

// // Custom hook to use the UserContext
// export const useUser = () => {
//   const context = useContext(UserContext);
//   if (!context) {
//     throw new Error("useUser must be used within a UserProvider");
//   }
//   return context;
// };
