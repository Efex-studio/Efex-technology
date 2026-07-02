// src/components/WhatsappChat.tsx

"use client";

import { useEffect, useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function WhatsappChat() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <FloatingWhatsApp
      phoneNumber="+2348169910462"
      accountName="Efex Technology"
      avatar="/favicon.svg" // Put your logo in the public folder
      statusMessage="Typically replies within a few minutes"
      chatMessage="👋 Hello! How can we help you today?"
      placeholder="Type your message..."
      allowEsc
      notification
      notificationSound
      darkMode={false}
      style={{
        position: "fixed",
        bottom: isMobile ? "1.5rem" : "400px",
        left: "1.5rem",
        zIndex: 50,
      }}
    />
  );
}