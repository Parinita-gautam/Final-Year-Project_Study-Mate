// src/pages/LandingPage.jsx
import React,{useEffect} from "react";
import LandingNavbar from "../components/common/LandingNavbar";
import Dashboard from "./Dashboard"; // this contains sections with ids: home, courses, faqs, contact

export default function LandingPage() {
  // chatboq chat-widget
   useEffect(() => {
    // prevent duplicate script injection
    const existingScript = document.querySelector(
      'script[src="https://dev.chatboq.com/widget.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://dev.chatboq.com/widget.js";
      script.async = true;
      script.setAttribute(
        "data-orgId",
        "aa1bb612-1730-48cd-b6c5-0cd1483ba5a4"
      );

      document.body.appendChild(script);
    }
  }, []);
  // crips chat widget
//   useEffect(() => {
//   // Prevent duplicate Crisp injection
//   if (!window.CRISP_WEBSITE_ID) {
//     window.$crisp = [];
//     window.CRISP_WEBSITE_ID = "fba03a2b-279e-40e2-85c2-52bc6ef16464";

//     const script = document.createElement("script");
//     script.src = "https://client.crisp.chat/l.js";
//     script.async = true;

//     document.head.appendChild(script);
//   }
// }, []);
 // crips chat widget end
  return (
    <>
      <LandingNavbar />
      <Dashboard />
    </>
  );
}
