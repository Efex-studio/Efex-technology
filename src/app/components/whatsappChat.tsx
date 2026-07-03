"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function WhatsappChat() {
  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{ top: "calc(50% + 150px)", right: "0px", transform: "translateY(-50%)" }}
    >
      <FloatingWhatsApp
        phoneNumber="+2348169910462"
        accountName="Efex Technology"
        avatar="/icon.png"
        statusMessage="Typically replies within a few minutes"
        chatMessage="👋 Hello! How can we help you today?"
        placeholder="Type your message..."
        allowEsc
        notification
        notificationSound
        darkMode={false}
        className="pointer-events-auto"
      />
    </div>
  );
}