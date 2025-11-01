# SkillSwap – A Local Skill Exchange Platform

## 🎯 Project Theme
**SkillSwap** is an interactive platform designed to connect individuals within their local area to **offer, learn, and trade skills**. Whether a user wants to teach guitar, learn a new language, get help with coding, or find a yoga instructor, SkillSwap provides a centralized marketplace for local skill exchange.

---

## 🌐 Live URL
**[https://skill-exchange-platform-b6b75.web.app](https://skill-exchange-platform-b6b75.web.app)**

---

## ✨ Key Features

### 💻 Core Functionality
* **Skill Listings:** Users can browse an array of skill offerings with details like the provider's name, rating, price, and description.
* **Protected Details:** The **Skill Details Page** is protected; only logged-in users can access it. Unauthorized users are redirected to the Login page and then back to the desired skill details after successful authentication.
* **Session Booking:** The Skill Details page includes a "Book Session" form. Submitting the form triggers a **success toast** notification for a seamless user experience.

### 🔐 Robust Authentication
* **Login & Signup:** Standard email/password authentication is provided.
* **Password Validation:** Signup enforces strong password rules: **at least 6 characters long**, must contain **one uppercase letter**, and **one lowercase letter**.
* **Social Login:** Seamless **Google authentication** is available for both login and signup.
* **Forgot Password:** A functional "Forgot Password" feature is implemented to allow users to reset their password and is designed to redirect the user to their email client after initiating the reset.
* **Password Toggle:** An eye-button is integrated into the password input fields on the Login and Signup pages to **toggle visibility**.

### 👤 User Experience & Profile Management
* **Responsive Design:** The application is fully responsive across **mobile, tablet, and desktop** devices.
* **Profile Page (`/My Profile`):** Displays user's name, email, and profile image.
* **Profile Update:** Users can easily update their **Name** and **Image URL** using the functional `updateProfile()` method.
* **Persistent Layout:** The **Navbar** and **Footer** remain constant throughout the Single-Page Application (SPA) experience.
* **SPA Behavior:** The application maintains correct routing without errors upon route reloads, ensuring a smooth user experience.

### 🏠 Homepage Sections
1.  **Hero Slider:** An engaging, animated carousel to highlight key offerings.
2.  **Popular Skills:** A featured section showcasing top-rated or frequently viewed skill cards.
3.  **Top Rated Providers:** A section highlighting highly-rated skill providers.
4.  **How It Works:** A simple, step-by-step guide explaining the platform's process.
5.  **Extra Section (e.g., 'Featured Skill Categories'):** An additional relevant section to enhance discoverability.

---

## 🛠️ Technologies & Packages Used

This project is built using **React** and utilizes several key npm packages to deliver a modern, interactive, and responsive user interface.

| Category | Package | Purpose |
| :--- | :--- | :--- |
| **Animation/UI** | `swiper` | Used for the **Hero Slider** and other carousel-like elements. |
| **State/FX** | `react-spring` | Used for more advanced, physics-based UI animations (e.g., subtle transitions). |
| **Notifications** | `react-hot-toast` | Implements lightweight, highly customizable, and responsive toast notifications for success/error messages (e.g., on form submission). |
| **Styling** | `tailwindcss`, `daisyui` | For rapid and consistent styling and theming across all components. |
| **Routing** | `react-router-dom` | Handles all client-side routing and protected routes. |
| **Authentication** | `firebase` | Provides secure and scalable backend services, including **Authentication** and hosting configuration. |

---

## ⚙️ Installation and Setup

1.  **Clone the repository:**
    ```bash
    git clone [Your Repository URL]
    cd skillswap
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up Environment Variables:**
    Create a `.env.local` file in the root of the project and secure your Firebase configuration keys:
    ```
    VITE_FIREBASE_API_KEY="YOUR_API_KEY"
    VITE_FIREBASE_AUTH_DOMAIN="YOUR_AUTH_DOMAIN"
    VITE_FIREBASE_PROJECT_ID="YOUR_PROJECT_ID"
    VITE_FIREBASE_STORAGE_BUCKET="YOUR_STORAGE_BUCKET"
    VITE_FIREBASE_MESSAGING_SENDER_ID="YOUR_MESSAGING_SENDER_ID"
    VITE_FIREBASE_APP_ID="YOUR_APP_ID"
    ```

4.  **Run the application:**
    ```bash
    npm run dev
    ```
    The application will typically be available at `http://localhost:5173`.