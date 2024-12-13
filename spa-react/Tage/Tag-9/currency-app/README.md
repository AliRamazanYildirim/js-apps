# 💱 Währungsumrechner Anwendung

## 📝 Projektübersicht

Diese Währungsumrechner-Anwendung ist eine benutzerfreundliche React-basierte Webanwendung, die Benutzern ermöglicht, Währungen in Echtzeit umzurechnen. Die Anwendung unterstützt Umrechnungen zwischen USD, EUR und TRY und bietet eine intuitive Benutzeroberfläche.

## ✨ Funktionen

- **Dynamische Währungsumrechnung**
  - Unterstützt Umrechnungen zwischen USD, EUR und TRY
  - Echtzeitwechselkurse über eine externe API
  - Präzise Berechnung mit zwei Dezimalstellen

- **Benutzerfreundliches Interface**
  - Klare und intuitive Eingabefelder
  - Dropdown-Menüs für einfache Währungsauswahl
  - Responsives Design

- **Fehlerbehandlung**
  - Benutzerfreundliche Fehlermeldungen
  - Konsolen-Logging für technische Fehleranalyse

## 🛠 Technologische Architektur

### Frontend

- **React** (mit Vite)
  - Funktionale Komponenten
  - Hooks (useState)
  - Modularer Komponentenaufbau

### Styling

- **CSS**
  - Benutzerdefinierte Stilisierung
  - Flexbox für Layoutgestaltung
  - Responsive Designprinzipien

### API-Integration

- **Axios** für HTTP-Anfragen
- Dynamische API-Konfiguration über Umgebungsvariablen

## 📦 Projektstruktur

```path
currency-app/
│
├── public/
│   └── backgroound.webp
│
├── src/
│   ├── components/
│   │   └── Currency.jsx
│   │
│   ├── styles/
│   │   └── currency.css
│   │
│   ├── App.jsx
│   └── App.css
│
├── .env
├── package.json
└── vite.config.js
```

## 🚀 Einrichtung und Installation

### Voraussetzungen

- Node.js (v14 oder höher)
- npm oder yarn
- Gültiger API-Schlüssel für Währungsumrechnungen

### Installationsschritte

1. Repository klonen

```bash
git clone [git@github.com:AliRamazanYildirim/js-console-apps.git]
cd currency-app
```

1. Abhängigkeiten installieren

```bash
npm install
```

1. Umgebungsvariablen konfigurieren

Erstelle eine `.env`-Datei im Projekthauptverzeichnis:

```env
VITE_CURRENCY_API_KEY=dein_api_schluessel
VITE_BASE_URL=dein_base_url
```

1. Anwendung starten

```bash
npm run dev
```

## 🔧 Konfiguration

### Umgebungsvariablen

- `VITE_CURRENCY_API_KEY`: API-Schlüssel für Währungsumrechnungen
- `VITE_BASE_URL`: Basis-URL der Währungs-API

### Währungen

Aktuell unterstützte Währungen:

- USD (US-Dollar)
- EUR (Euro)
- TRY (Türkische Lira)

## 🧪 Fehlerbehandlung

- Bei API-Fehlern wird eine Benachrichtigung angezeigt
- Fehler werden in der Konsole protokolliert
- Benutzerfreundliche Fehlermeldungen in Deutsch

## 🔜 Zukünftige Erweiterungen

- Unterstützung weiterer Währungen
- Offline-Wechselkurscache
- Detaillierte Wechselkurshistorie

## 🤝 Beitragen

Beiträge sind willkommen! Bitte lesen Sie die Beitragrichtlinien vor dem Erstellen von Pull Requests.

## 📄 Lizenz

Dieses Projekt ist unter der MIT-Lizenz veröffentlicht. Bitte lesen Sie die Lizenz

## 🌐 Screenshots

![Screenshot 1](./public/screenshot.jpeg)
