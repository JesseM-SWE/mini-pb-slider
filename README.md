# Steps to Run This Project

### 1. Download or Clone the Project

- Download the ZIP file or clone the repository from GitHub.
- Open your IDE (WebStorm) and open the project.

### 2. Start the Database

- Open a terminal in your IDE.
- Navigate to the project directory:

```
cd course-schedular
```

- Start the database server by running:

```
npx json-server --watch db/db.json --port 3333
```

### 3. Set Up the Web Application

- Open a **new terminal** in your IDE.
- Make sure you are in the project directory:

```
cd course-schedular
```

### 4. Create the Environment File

- Create a file named `.env` in the project's root directory.
- Add the following line to the `.env` file:

```
VITE_API_BASE_URL=http://localhost:3333/
```

### 5. Install Dependencies

Run the following command to install the required packages:

```
npm install
```

### 6. Run the Web Application

Start the dev server by running:

```
npm run dev
```

Follow the local URL displayed in your terminal to open it in your browser.
