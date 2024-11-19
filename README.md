# Website Configurations

This project is a customer management system that includes various features such as email management for employees, newsletters, store location, social media presence, virtual tour, and a working area in the store.

## Requirements

Before installing the project, make sure you have the following programs or dependencies installed:

- [Visual Studio Code](https://code.visualstudio.com/) (if you are using this editor)
- [Node.js](https://nodejs.org/) (if used in the project)
- [MySQL](https://www.mysql.com/) (if required for the database)
- Backend dependencies

## Installation

Follow these steps to install and run both the backend and frontend of the project on your local machine:

### 1. Clone the repository
Open a terminal and run the following command to clone the repository:
```bash
git clone https://github.com/xELGpx/ProyectoUniWItget.git
2. Install Backend Dependencies
Navigate to the backend directory (e.g., CRUD-tienda) and install the required dependencies:

cd CRUD-tienda
npm install
3. Install Frontend Dependencies
Navigate to the frontend directory (e.g., ProyectoUniWItget) and install the required dependencies:

cd ../ProyectoUniWItget
npm install
4. Set up the Database
In MySQL, run the CodigoBaseDeDatos.sql script (or any other .sql file provided):

Import the .sql file if provided in the repository.
Or create a new database and tables as required. Instructions can be found in the database_setup.md file if included.
5. Run the Backend
Once the backend dependencies are installed, run the following command to start the backend:

cd ../CRUD-tienda
npm run dev
6. Run the Frontend
After the backend is running, open the index.html file from the frontend folder in your browser to start the frontend.
