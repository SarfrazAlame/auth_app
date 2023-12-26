"use client";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  const logout = async () => {
    try {
      const res = await axios.get("/api/users/logout");
      toast.success("Logout successfull");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile page</p>
      <button
        onClick={logout}
        className="border py-2 px-12 bg-blue-500 text-white rounded"
      >
        Logout
      </button>
    </div>
  );
}
