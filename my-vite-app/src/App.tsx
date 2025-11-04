import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Kenyon Jared Mora Zamora</h1>
      <div className="card">
        <p><strong>Full-stack / DevOps-leaning SWE</strong></p>
        <p>
          This site is deployed via a simple CI/CD pipeline:
        </p>
        <ul>
          <li>Vite + React</li>
          <li>GitHub Actions</li>
          <li>AWS EC2 (Amazon Linux)</li>
          <li>Nginx (static hosting)</li>
        </ul>

        <h2>About me</h2>
        <p>
          I build Next.js/React apps with Supabase backends, Stripe/Plaid integrations,
          and automate infra with Terraform on AWS. I enjoy clean UI, strong validation,
          and production-ready pipelines.
        </p>

        <h2>Highlights</h2>
        <ul>
          <li>SSA Disability Claims platform (Next.js + Supabase + MUI)</li>
          <li>Holcim consignment note ecosystem (Vue/NestJS/Flutter + AWS)</li>
          <li>SACSA traceability (NestJS + Sequelize + Ant Design + Flutter)</li>
        </ul>

        <h2>Contact</h2>
        <ul>
          <li>GitHub: <a href="https://github.com/KenJaredMora" target="_blank" rel="noreferrer">KenJaredMora</a></li>
          <li>Email: <a href="mailto:kenyonjaredmora@gmail.com">kenyonjaredmora@gmail.com</a></li>
          <li>Location: Querétaro, MX</li>
        </ul>

        <p style={{ marginTop: 16 }}>
          <em>Every push to <code>main</code> builds and deploys automatically 🚀</em>
        </p>
      </div>
    </>
  )
}

export default App
