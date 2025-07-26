import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import "../../styles/admin/AdminDashboard.css";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const fetchUnreadMessages = async () => {
      const snapshot = await getDocs(collection(db, "messages"));
      const messages = snapshot.docs.map(doc => doc.data());
      const unread = messages.filter((msg: any) => msg.read !== true);
      setUnreadCount(unread.length);
    };
    fetchUnreadMessages();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/admin/login");
  };


  return (
    <div className="admin-dashboard">
      <button className="logout-btn" onClick={handleLogout}>
        📴 Log Out
      </button>
      <h1 className="admin-title">Welcome Vanesa, Askim ⋆. ̊🦋༘⋆</h1>

      <div className="admin-grid">
        <div className="admin-card" onClick={() => navigate("/admin/messages")}>
          <h2>
            📨 Messages
            {unreadCount > 0 && <span className="notification-dot" />}
          </h2>
          <p>Check messages from visitors and reply to potential clients</p>
        </div>
      </div>
    </div>
  );
}
