"use client";
import { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    if (document.querySelector('script[src*="translate_a/element.js"]')) return;

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,fr,fr-CA",
        },
        "google_translate_element"
      );
    };

    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return null;
};

export default GoogleTranslate;