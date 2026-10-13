# Naveen Kumar — Online CV (Vite + React)

## Run locally
1. Install Node.js (18+ recommended).
2. Extract this folder and open it in VS Code.
3. In the project folder, run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL printed by Vite.
5. Build for deployment with `npm run build`; preview with `npm run preview`.

## CV download
The original PDF is included at `public/Naveen_Frontend_8_years.pdf`. The Download CV button links directly to it.

## Enable the contact form email
A browser-only React app cannot securely send email by itself. This project uses EmailJS so the form can send without exposing a private server credential.

1. Create an account at https://www.emailjs.com/ and connect an email service.
2. Create an email template. Set the template recipient / **To Email** to `frontenddevelopers1@gmail.com`.
3. Use template variables such as:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{phone}}`
   - `{{subject}}`
   - `{{message}}`
4. Copy `.env.example` to `.env` and add your EmailJS Service ID, Template ID and Public Key.
5. Restart `npm run dev` after changing `.env`.

The form displays a setup notice if EmailJS credentials are not configured. Do not put email account passwords or private API secrets in a Vite `.env` file; `VITE_` values are public in the built frontend.

## Deployment
Deploy the project to Vercel, Netlify, or another static host. Add the three `VITE_EMAILJS_*` environment variables in the host's project settings and rebuild. The PDF is served from `/Naveen_Frontend_8_years.pdf`.
