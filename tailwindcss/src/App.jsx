

function App() {
  return (
    <div>
      <div className="h-1 bg-blue-800"></div>

      <nav className="flex justify-between items-center px-8 bg-red-400 h-20">
        <div className="flex space-x-10 text-white">
          <h4 className="font-bold">Kalvium</h4>
          <h4>About us</h4>
          <h4>Contact Us</h4>
          <h4>Courses</h4>
        </div>

        <div>
          <button className="outline outline-2 text-white px-5 py-1 hover:bg-red-500">LOGIN</button>
        </div>
      </nav>

      <div className="containner m-auto">
        <button className="bg-blue-500 m-10 px-4 py-2 text-white font-bold rounded"> Button One</button>

        <div className="bg-red-200 border border-red-600 px-4 py-2 space-x-2 text-red-500 mx-10" >
          <strong>Alert!</strong>
          <span>This is Awesome!</span>

        </div>

        <div className="m-auto flex w-fit space-x-2 mt-10">
          <img className="w-24" src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="" />
        

        <div>
          <h3 className="font-bold">Kalvium Store</h3>
          <p>You have a new Course</p>
        </div>
      </div>
    </div>

    <div className="bg-gray-300 py-4 mt-60  bottom-0 absolute w-full">
      <h4 className="text-center "> @2023 Copyright: Kalvium</h4>
    </div>
    </div>
    
  )
}

export default App
