
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";



i18n.use(initReactI18next).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        Morning: "Good Morning",
        Evening: "Good Evening",
        Afternoon: "Good Afternoon",
        Night: "Good Night",
      }
    },
    jap: {
      translations: {
        Morning: "おはようございます",
        Evening: "こんばんは",
        Afternoon: "こんにちは",
        Night: "おやすみ",
      }
    },

    hin: {
      translations: {
        Morning: "शुभ प्रभात",
        Evening: "सुसंध्या",
        Afternoon: "नमस्कार",
        Night: "शुभ रात्रि",
      }
    },

    ger: {
      translations: {
        Morning: "Guten Morgen",
        Evening: "Guten Abend",
        Afternoon: "Guten Tag",
        Night: "Gute Nacht",
      }
    },
    fre: {
       translations: {
        Morning: "Bonjour",
        Evening: "Bonsoir",
        Afternoon: "Bonne après-midi",
        Night: "Bonne nuit",
      }
    },
    ar: {
      translations: {
        Morning: "صباح الخير",
        Evening: "مساء الخير ",
        Afternoon: "مساء الخير",
        Night: "تصبح على خير",
      }
    },
    it: {
      translations: {
        Morning: "Buongiorno",
        Evening: "Buonasera",
        Afternoon: "Buon pomeriggio",
        Night: "Buona notte",
      }
    },
    esp: {
      translations: {
        Morning: "Buenos días",
        Evening: "buena noches",
        Afternoon: "buenas tardes",
        Night: "buenas noches",
      }
    }
  },
  fallbackLng: "en",
  debug: true,


  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;
