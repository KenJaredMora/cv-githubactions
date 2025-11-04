import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          By Emmanuel Romero
        </p>
        <p>This is part of a simple pipeline with this tech stack:</p>
        <ul>
          <li>Vite + React</li>
          <li>GitHub Actions</li>
          <li>AWS EC2 (Amazon Linux)</li>
          <li>Nginx</li>
        </ul>
        <p>Each push/pull request to main triggers the pipeline</p>
        <p>GitHub Actions SSH into EC2 instance for deployment</p>
        <h1>Hello Jorge</h1>
      </div>
    </>
  )
}

export default App
