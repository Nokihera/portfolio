import { getAuth, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { app } from "../api/firebase";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login");
      } else {
        setLoading(false);
      }
    });
    return () => unsubscribe(); // Clean up subscription on unmount
  }, [navigate]);
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <p>Admin Dashboard</p> <button onClick={logout}>logout</button>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
