import "./App.css";

function App() {
  return (
    <>
      <form className="flex flex-col items-center justify-center">
        <h3 className="mt-8 text-gray-600 text-xs">English (UK)</h3>
        <h3>
          <i className="fa-brands fa-facebook  text-blue-700 text-5xl mt-8 mb-10"></i>
        </h3>
        <div className="border py-3 rounded-lg">
          <input
            className="w-96 px-4 focus:outline-none"
            type="email"
            placeholder="Mobile number or email address"
          />
        </div>
        <div className="border py-3 rounded-lg mt-3">
          <input
            className="w-96 px-4 focus:outline-none"
            type="email"
            placeholder="Password"
          />
        </div>
        <div className="border py-2 rounded-full mt-3 bg-blue-700 text-white">
          <input
            type="submit"
            value="Log in"
            className="w-96 px-4 focus:outline-none cursor-pointer"
          />
        </div>
        <h3 className="mt-2 text-gray-700">Forgotten Password?</h3>
        <div className=" border border-blue-700  py-2 rounded-full mt-10 text-blue-700 ">
          <input
            type="submit"
            value="Create New Account"
            className="w-96 px-4 focus:outline-none cursor-pointer"
          />
        </div>
        <h3 className="mt-3 text-gray-700 flex items-center gap-1">
          <i className="fa-brands fa-meta"></i> Meta
        </h3>
      </form>
    </>
  );
}

export default App;
