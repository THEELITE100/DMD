# The Dubai Mall: Interactive Commercial Sales Deck

A purpose built, high performance interactive sales tool designed to replace static PDFs, manual presentations, and fragmented pitch materials for one of the world's largest mixed use destinations.

## 🚀 Live Demo
**https://dmd-ecru.vercel.app**

---

## 📖 The Objective
For mega properties like The Dubai Mall, the commercial pitch process to prospective retail tenants, corporate sponsors, and event producers is often manual and disjointed. I built this application from scratch to solve that problem. 

This browser based tool operates as a cross between a high-end pitch deck and a luxury brand website. It features a cinematic, non linear UX that allows the commercial scale, energy, and business opportunities of the property to speak for themselves, driving immediate emotional buy in and pushing prospects toward actionable business inquiries.

---

## ✨ Key Features & Architecture

* **Cinematic Opening:** A section utilizing a looping video to establish scale.
* **Non Linear Navigation:** A sticky, responsive layout allowing users to control their own journey across Retail, Dining, Art, Entertainment, and Event modules.
* **Expandable Data Modules:** Engineered with modular architecture. Features like the `EventsModule` and `SponsorshipModule` include expandable accordions and a `TechSpecs` drawer to deliver data without cluttering the primary UI.
* **UI/UX:** A bespoke design system inspired by Hermès and Tesla, utilizing a dark mode palette, high contrast serif typography (`Playfair Display`), and minimal chrome.
* **Action Oriented Design:** Every narrative beat deliberately funnels into a dedicated Call to Action (e.g., "Leasing Inquiry", "Corporate Bookings", "Sponsor Installations").

---

## 🤖 AI Asset Generation
Supplementing real assets with high quality AI visuals, I generated the visuals of this project using **Google Gemini**. 

Instead of relying on public stock photography, I engineered specific prompts within Gemini to generate 100% of the media assets used in this application:
* **Cinematic Video:** Generated the 8-second looping `.mp4` background video.
* **High Resolution Imagery:** Generated over 18 custom `.png` assets tailored specifically to luxury retail environments, Michelin star dining, VIP hospitality, and immersive entertainment zones.

All generated assets are hosted locally within the `/public/assets/` directory.

---

## 🛠 Tech Stack

* **Framework:** React 18
* **Styling:** Tailwind CSS 
* **Animations:** Framer Motion
* **Icons:** Lucide React

---
# 💻 Local Setup & Installation

To run this project locally, ensure you have Node.js installed, then follow these steps:

1. **Clone the repository**

git clone https://github.com/THEELITE100/DMD.git
cd dubai-mall-deck

2. **Install Dependencies**

npm install

3. **Start the Development Server**

npm run dev

The application will be available at: [http://localhost:5173](http://localhost:5173)

4. **Build for Production**

npm run build

---
## 📂 Project Structure
```text
├── public/
│   └── assets/              # Local Gemini generated .png and .mp4 files
├── src/
│   ├── components/
│   │   ├── layout/          # Navigation and Footer
│   │   ├── sections/        # Modular narrative blocks
│   │   └── ui/              # Reusable micro components 
│   ├── App.jsx              # Main assembly and state routing
│   ├── index.css            # Tailwind directives & global styling
│   └── main.jsx             # React DOM entry point
├── tailwind.config.js       # Custom luxury color palette and fonts
└── vite.config.js
