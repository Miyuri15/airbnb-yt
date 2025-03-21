Here’s a comprehensive `README.md` file for your Airbnb clone project. It includes instructions for setting up the project, running it, and mentions the technologies used (Prisma, Supabase, and KindeAuth). It also highlights the known issues with the `HomeMap` and `search` functions due to version changes.

---
 Airbnb Clone

This is a clone of Airbnb built using modern web technologies like Next.js, Prisma, Supabase, and KindeAuth. The project is designed to mimic the core functionalities of Airbnb, including property listings, search, and user authentication.

---

 Technologies Used

- Next.js: A React framework for server-side rendering and static site generation.
- Prisma: A modern database toolkit for TypeScript and Node.js.
- Supabase: An open-source Firebase alternative for database and authentication.
- KindeAuth: A user authentication and management solution.
- Tailwind CSS: A utility-first CSS framework for styling.
- React Leaflet: A library for integrating maps using Leaflet.

---

Getting Started

Follow these steps to set up and run the project locally.

Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Supabase account
- KindeAuth account
- Prisma setup (PostgreSQL database)

Installation

1. Clone the repository:
  
   git clone https://github.com/your-username/airbnb-clone.git
   cd airbnb-clone
  

2. Install dependencies:
  
   npm install
  

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following variables:
 
   DATABASE_URL="your_postgresql_database_url"
   SUPABASE_URL="your_supabase_project_url"
   SUPABASE_ANON_KEY="your_supabase_anon_key"
   KINDE_CLIENT_ID="your_kinde_client_id"
   KINDE_CLIENT_SECRET="your_kinde_client_secret"
   KINDE_ISSUER_URL="your_kinde_issuer_url"
   KINDE_SITE_URL="http://localhost:3000"
   KINDE_POST_LOGOUT_REDIRECT_URL="http://localhost:3000"
   KINDE_POST_LOGIN_REDIRECT_URL="http://localhost:3000"
 

4. Set up Prisma:
   - Run the following command to generate the Prisma client:
     
     npx prisma generate
    
   - Apply migrations to set up the database:
     
     npx prisma migrate dev
    

5. Run the project:
   
   npm run dev
  
   The project will be available at `http://localhost:3000`.

---

 Project Structure

- `/components`: Reusable React components.
- `/pages`: Next.js pages and API routes.
- `/prisma`: Prisma schema and migrations.
- `/styles`: Tailwind CSS and custom styles.
- `/utils`: Utility functions and helpers.

---

 Known Issues

Due to version changes, the following functionalities are currently misfunctioning:

1. HomeMap Function:
   - The map rendering functionality using `react-leaflet` is not working as expected. This may be due to changes in the `leaflet` or `react-leaflet` library versions.

2. Search Function:
   - The search functionality is not returning accurate results. This could be related to changes in the `world-countries` or `date-fns` library versions.

---

 Dependencies

Here are the dependencies and their versions used in this project:

 `dependencies`

"@kinde-oss/kinde-auth-nextjs": "^2.5.3",
"@prisma/client": "^5.19.1",
"@supabase/supabase-js": "^2.45.4",
"@types/leaflet": "^1.9.8",
"leaflet": "^1.9.4",
"next": "^15.2.3",
"react": "^18.3.1",
"react-dom": "^18.3.1",
"react-leaflet": "^4.2.1",
"world-countries": "^5.0.0"



 `devDependencies`

"@types/leaflet": "^1.9.12",
"@types/node": "^20",
"@types/react": "^18",
"@types/react-dom": "^18",
"eslint": "^8",
"eslint-config-next": "14.2.8",
"prisma": "^5.19.1",
"tailwindcss": "^3.4.1",
"typescript": "^5"



---

 Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push your branch and open a pull request.

---

 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [KindeAuth Documentation](https://kinde.com/docs)

---

Let me know if you need further assistance! 🚀