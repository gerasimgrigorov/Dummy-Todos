import viteLogo from '/vite.svg'

export default function Header() {
  return (
    <div className="header">
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <h1>Todoist Clone</h1>
    </div>
  );
}
