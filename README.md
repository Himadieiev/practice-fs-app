## To run the project, follow these steps:

1. Clone the project repository to your computer using the following link: https://github.com/Himadieiev/practice-fs-app 
```
git clone https://github.com/Himadieiev/practice-fs-app.git
```

2. Open a terminal (or command prompt) and navigate to the project's root directory.
```
cd practice-fs-app
```

3. Install dependencies for the server-side of the project by running the following command in the terminal:
```
npm install
```

4. Rename the .env.local file (remove .local)
```
.env
```

5. Generate types
```
npx prisma generate
```

6. Create a database and perform a migration
```
npx prisma migrate dev
```

7. Navigate to the client directory and install dependencies for the client-side of the project.
```
cd client
npm install
```

8. Return to the project's root directory.
```
cd ..
```

9. Start the project by running the following command in the terminal:
```
npm run dev
```

10. Open a web browser and go to http://localhost:3000 to view the running project.

A successful project launch should display a list of employees in the browser. If you encounter any issues during installation or project startup, please ensure that all the steps mentioned above have been executed correctly in accordance with the instructions.