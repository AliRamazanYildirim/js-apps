import './App.css'

function App() {
  return (
    <>
      <h1 className='bg-blue-600 text-white text-center py-4 m-0' >React App</h1>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Benutzerregistrierung</h2>
          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="username">
              Benutzername
            </label>
            <input className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" id="username" type="text" placeholder="Benutzername" />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
              E-Mail
            </label>
            <input className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" id="email" type="email" placeholder="E-Mail" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
              Passwort
            </label>
            <input className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" id="password" type="password" placeholder="Passwort" />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="button">
              Registrieren
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
