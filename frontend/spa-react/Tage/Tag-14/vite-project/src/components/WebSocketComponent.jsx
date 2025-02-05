import { useEffect, useState } from "react";

function WebSocketComponent() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [socket, setSocket] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Erstelle die WebSocket-Verbindung
    const ws = new WebSocket("wss://echo.websocket.events");
    setSocket(ws);

    ws.onopen = () => {
      console.log("WebSocket-Verbindung hergestellt.");
    };

    ws.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    ws.onerror = (event) => {
      console.error("WebSocket-Fehler:", event);
      setError("WebSocket-Verbindung fehlgeschlagen.");
    };

    ws.onclose = (event) => {
      console.log("WebSocket-Verbindung geschlossen:", event);
    };

    return () => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.close();
        console.log("WebSocket-Verbindung geschlossen.");
      }
    };
  }, []);

  const sendMessage = () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(input);
      setInput("");
    } else {
      console.error("WebSocket-Verbindung ist nicht geöffnet.");
      setError("WebSocket-Verbindung ist nicht geöffnet.");
    }
  };

  return (
    <div>
      <h1>WebSocket Messages</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Schreiben Sie Ihre Nachricht"
      />
      <button onClick={sendMessage}>Senden</button>
    </div>
  );
}

export default WebSocketComponent;
