# Steps to Run This Project

### 1. Download or Clone the Project

- Download the ZIP file or clone the repository from GitHub.
- Open WebStorm (or your preferred IDE) and open the project.

### 2. Start the Database Server

- Open a terminal in your IDE.
- Navigate to the project directory:

```bash
cd course-schedular
```

- Start the database server by running:

```bash
npx json-server --watch db/db.json --port 3333
```

### 3. Set Up the Web Application

- Open a **new terminal** in your IDE.
- Navigate to the project directory:

```bash
cd course-schedular
```

### 4. Configure the Environment File (Optional)

**You can skip this step if you are comfortable using the default port.** Follow these instructions if you want to configure the API URL manually.

- Create a file named `.env` in the project's root directory.
- Add the following line:

```env
VITE_API_BASE_URL=http://localhost:3333/
```

### 5. Install Dependencies

Install the required project packages by running:

```bash
npm install
```

### 6. Run the Web Application

Start the development server by running:

```bash
npm run dev
```

Once the server starts, copy the local URL displayed in your terminal and open it in your browser to access the application.

---

## Authors

This project was created by **Josh and Jesse**.

We used a project template provided by our instructor, **Mr. Lash**.
