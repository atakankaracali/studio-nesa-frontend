import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import "../../styles/admin/MessageViewer.css";

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: any;
  read: boolean;
}

export default function MessageViewer() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const fetchMessages = async () => {
    const snapshot = await getDocs(collection(db, "messages"));
    const msgs = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Message[];

    setMessages(msgs.sort((a, b) => b.timestamp?.seconds - a.timestamp?.seconds));
  };

  const markAsRead = async (id: string) => {
    await updateDoc(doc(db, "messages", id), { read: true });
    fetchMessages();
  };

  const confirmDelete = () => {
    if (selectedMessage) {
      deleteDoc(doc(db, "messages", selectedMessage.id));
      setSelectedMessage(null);
      setShowConfirm(false);
      fetchMessages();
    }
  };

  const handleSelectMessage = (msg: Message) => {
    setSelectedMessage(msg);
    if (!msg.read) markAsRead(msg.id);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="message-viewer">
      <button className="back-btn" onClick={() => navigate("/admin/dashboard")}>
        ← Back to Dashboard
      </button>

      <h2 className="text-xl font-bold mb-4">Incoming Messages</h2>

      <div className="message-layout">
        <div className="message-sidebar">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`message-summary ${msg.read ? "read" : "unread"}`}
              onClick={() => handleSelectMessage(msg)}
            >
              <strong>{msg.name}</strong>
              <p>{msg.message?.slice(0, 40)}...</p>
            </div>
          ))}
        </div>

        <div className="message-detail">
          {selectedMessage ? (
            <div className="message-card open">
              <p><strong>Name:</strong> {selectedMessage.name}</p>
              <p><strong>Email:</strong> {selectedMessage.email}</p>
              <p><strong>Message:</strong> {selectedMessage.message}</p>
              <p><strong>Date:</strong> {new Date(selectedMessage.timestamp?.seconds * 1000).toLocaleString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit"
              })}</p>

              <button
                className="delete-btn"
                onClick={() => setShowConfirm(true)}
              >
                🗑️ Delete Message
              </button>
            </div>
          ) : (
            <p className="message-placeholder">Select a message to read</p>
          )}
        </div>
      </div>

      {/* Modal */}
      {showConfirm && (
        <div className="modal-overlay" onClick={() => setShowConfirm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Delete Message?</h3>
            <p>This action cannot be undone.</p>
            <div className="modal-actions">
              <button className="modal-cancel" onClick={() => setShowConfirm(false)}>
                Cancel
              </button>
              <button className="modal-delete" onClick={confirmDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
