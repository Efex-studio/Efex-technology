"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";
import groupProfile from '../../assets/group_profile.png'

export default function WhatsappChat() {
  return (
    <div className="whatsapp-widget pointer-events-none z-50">
      <FloatingWhatsApp
        phoneNumber="+2348169910462"
        accountName="Efex Technology"
        avatar={groupProfile}
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