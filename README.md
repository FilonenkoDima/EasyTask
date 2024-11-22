# EasyTask

## About the Project

**EasyTask** is a **task management application** designed to help users organize and track their tasks efficiently. Built with a focus on simplicity, this project demonstrates the use of modern front-end technologies to create a user-friendly and responsive interface.

## Demo

![](demo.gif)

## Getting Started

### Installation and Running the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/FilonenkoDima/EasyTask.git
   cd EasyTask
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your browser and visit:
   ```
   http://localhost:4200
   ```

## Project Structure

```plaintext
EasyTask/
├── src/
│ ├─ app/               # Core app modules
│ │ ├─ header/          # Header component
│ │ ├─ shared/          # Reusable UI Components
│ │ ├─ tasks/           # Tasks components
│ │ │ ├─ new-task/      # Create new tasks
│ │ │ ├─ task/          # Individual task components
│ │ ├─ user/            # User component
│ ├─ main.js            # App entry point
│ ├─ index.html         # Base HTML template
│ ├─ assets/            # Static resources
├─ public/              # Publicly served files
```

## Key Features and Architecture

### Application Workflow

1. **Task Creation**: Add tasks with custom descriptions and deadlines.
2. **Task Filtering**: View tasks based on their status (e.g., Pending, Completed).
3. **Dynamic Updates**: All updates reflect immediately on the UI without reloading.

## Contribution

Contributions are welcome! Fork the repository, make your changes, and submit a pull request.
