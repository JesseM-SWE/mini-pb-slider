Course Scheduler
This is a school project called Course Scheduler.

The authors of this project are Josh and Jesse.

We used a template provided by our teacher, Mr. Lash.

How to Run This Project on Your Own
Follow these steps to get the project up and running:

Download the code or clone the repository from GitHub.
Run npm install to install the dependencies.
Start the database server.
To start the database server, make sure your current directory is src, then run the following command:
npx json-server --watch db/db.json --port xxxx

Once the database server is running, start the project using one of the default scripts:
npm run dev

You're all done! The project should now be running.
Side Note: API Configuration
In hooks/useFetch, where we fetch the data, the application uses an environment variable to determine the API URL.

If no environment variable is found, the application will default to the port we configured: 3333.

You can change this default port or add your own environment (.env) file to configure the API URL.