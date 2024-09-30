import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../api/firebase'; // Adjust the import based on your firebase setup

const MessageDetail = () => {
  const { id } = useParams();
  const [messageData, setMessageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessageDetail = async () => {
      try {
        const q = collection(db, "messages");
        const docsSnapshot = await getDocs(q);
        const data = docsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        // Find the document that matches the provided ID
        const docSnap = data.find((doc) => doc.id === id);

        if (docSnap) {
          setMessageData(docSnap);
        } else {
          setError("Message not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMessageDetail();
  }, [id]);

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

  if (loading) {
    return <div className="flex justify-center items-center h-screen"><h1 className="text-white">Loading...</h1></div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen"><h1 className="text-red-500">{error}</h1></div>;
  }

  return (
    <div className="container mx-auto p-6 bg-gray-900 text-gray-100 min-h-screen">
      <Link to="/admin" className="text-blue-400 underline mb-6 inline-block hover:text-blue-300 transition-colors">
        &lt; Back to Admin
      </Link>
      <div className="bg-gray-800 shadow-lg rounded-lg p-8 mb-6">
        <h2 className="text-3xl font-bold text-gray-100 mb-6">Message Details</h2>

        {messageData && (
          <>
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Name:</h3>
              <p className="text-gray-300">{messageData.name}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold">Email:</h3>
              <p className="text-gray-300">{messageData.email}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold">Message:</h3>
              <p className="text-gray-300">{messageData.message}</p>
            </div>

            {messageData.timestamp && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold">Sent At:</h3>
                <p className="text-gray-300">{toDate(messageData.timestamp)}</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MessageDetail;
