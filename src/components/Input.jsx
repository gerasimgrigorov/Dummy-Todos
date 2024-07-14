export default function Input({children, label, id, error}){
  return (
    <div className="input-field">
      <label htmlFor={id}>{label}</label>
      <div className="subbmit">
        {children}
        <button>Add</button>
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  )
}