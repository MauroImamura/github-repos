
# GitHub Repos Search

This is a **React project** that allows users to search for GitHub repositories by name, using the **GitHub API**. It features a list where users can manage (add or delete) repositories they searched for.

## 🚀 Features

- **Search GitHub Repositories:** Users can search repositories by their names.
- **GitHub API Integration:** The app uses the GitHub API to fetch repository details.
- **Manage Repos List:** Users can add or delete repositories from a managed list.

## Usage
To add new items on list, search for 'author/repo-name' in search bar then press 'Buscar'.

## 📦 Dependencies

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-scripts": "5.0.1",
  "styled-components": "^6.1.13",
  "axios": "^1.7.7",
  "@testing-library/react": "^13.4.0",
  "@testing-library/jest-dom": "^5.17.0",
  "@testing-library/user-event": "^13.5.0",
  "web-vitals": "^2.1.4"
}
```

## 📂 Project Structure

```
github-repos/
├── public/
├── src/
│   ├── assets/
│   ├── components/  # Reusable components
│   ├── Pages/        # Main application component
│   ├── index.js     # React entry point
│   └── styles.js    # Styled components for styling
├── package.json
└── README.md
```

## 🔧 How to Run the Project Locally

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/github-repos.git
   cd github-repos
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the application:**

   ```bash
   npm start
   ```

4. **Access the application in your browser:**

   ```
   http://localhost:3000
   ```

## 🖼️ Screenshots

**Main interface**
<br/>
<img src="./src/assets/github-repos-cover.png" alt="GitHub Repos Search" height="300"/>  


---

Made along dio.me React bootcamp, oriented by [Pablo Henrique](https://github.com/pablohdev).
