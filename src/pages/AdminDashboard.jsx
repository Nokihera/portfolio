import { getAuth, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { app, db } from "../api/firebase";
import { Link, useNavigate } from "react-router-dom";
import { collection, getDocs, query } from "firebase/firestore";

const AdminDashboard = () => {
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // To toggle dark/light theme

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login");
      } else {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setDataLoading(true);
        const q = query(collection(db, "messages"));
        const docsSnapshot = await getDocs(q);
        const data = docsSnapshot.docs.map((doc) => doc.data());
        const orderByTimeStamp = data.sort((a, b) => b.timestamp - a.timestamp);
        setData(orderByTimeStamp);
      } catch (err) {
        alert(err.message);
      } finally {
        setDataLoading(false);
      }
    };
    fetchData();
  }, []);

  const toDate = (timestamp) => {
    const date = timestamp.toDate();
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className={`${darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-800"} min-h-screen`}>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-2xl font-bold">Authenticating...</h1>
        </div>
      ) : (
        <div>
          {/* Navbar */}
          <nav className={`p-4 flex justify-between items-center ${darkMode ? "bg-gray-800" : "bg-blue-600 text-white"}`}>
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
            <div className="flex items-center">
              <button
                className="mr-4 px-4 py-2 rounded hover:bg-gray-600 transition"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
              <button
                className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition"
                onClick={logout}
              >
                Logout
              </button>
            </div>
          </nav>

          {/* Content */}
          <div className="container mx-auto py-10 px-4">
            <h2 className="text-3xl font-semibold mb-6">Messages</h2>

            {dataLoading ? (
              <div className="flex justify-center items-center h-64">
                <h1 className="text-xl font-medium">Loading data...</h1>
              </div>
            ) : (
              <div className="flex flex-col space-y-4">
                {data.map((item, index) => (
                  <Link
                    to={`/admin/${item.id}`}
                    key={index}
                    className={`p-6 rounded-lg shadow ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:shadow-lg"} transition`}
                  >
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <p className="text-sm">{item.email}</p>
                    <p className="text-gray-500 my-2">{item.message}</p>
                    <p className="text-sm text-gray-400">{item.timestamp && toDate(item.timestamp)}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
