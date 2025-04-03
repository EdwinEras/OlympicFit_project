"use client";
import { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    // Avoid adding the script twice
    if (document.querySelector('script[src*="translate_a/element.js"]')) return;

    // Define init function before script loads
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,fr,fr-CA",
        },
        "google_translate_element"
      );
    };

    // Add the Google Translate script
    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return null;
};

export default GoogleTranslate;