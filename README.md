Description. This is the official website for CHS Inc., designed and developed using React, Tailwind CSS, and Vite. The platform showcases CHS services, including EMR solutions, staffing support, and contact forms integrated with a Node.js + Express + MongoDB backend. It features responsive design, smooth animations, and secure form handling with deployment on Vercel and Render.

0.1. Before deploying, remember to do a (npm install, npm install cors, npm run or build dev)
make sure the localhost is working before deploying it on a live server

0.2. Merge Back into dev or main

Once you're done with the feature:

git checkout dev
git pull
git merge feature/emr-form
git push

merge dev into main when you're ready to deploy:

git checkout main
git pull
git merge dev
git push

0.3. When adjusting any .env or import.meta.env file, make sure you - npm run dev (frontend) and node server.js (backend) after doing step 0.1

0.4. If you can't deploy the project, remember to change the (frontend and backend) directories to your Vercel (frontend) and Render (backend). Make sure that in server.js (backend) you can change the frontend directory to your Vercel deployment

"# CHS_front" 
