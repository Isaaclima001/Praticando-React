

function App() {
 

  return (
    <>
      <div container className="flex">
        <div esquerda className="h-screen w-60 bg-gray-800  flex  flex-col">
          <header className=" w-full h-20 flex flex-col  border-b border-gray-600 p-4 pl-6">
           <h1 className="text-xl text-white font-medium">CourseOS</h1>
           <p className="text-[12px] text-gray-400">Hackathon 2025</p>
          </header>

          <main className="flex flex-col gap-2">
            <h1 className=" text-gray-400 font-mono text-[14px] p-2 pl-6">MENU</h1>
              <p className="text-gray-400 font-medium p-2 ml-6 border-l-3 border-orange-600 text-[12px] cursor-pointer hover:bg-orange-600">Introduction</p>
              <p className="text-gray-400 font-medium p-2 ml-6 border-l-3 border-orange-600 text-[12px] cursor-pointer hover:bg-orange-600">Curriculum</p>
              <p className="text-gray-400 font-medium p-2 ml-6 border-l-3 border-orange-600 text-[12px] cursor-pointer hover:bg-orange-600">Calendar</p>
              <p className="text-gray-400 font-medium p-2 ml-6 border-l-3 border-orange-600 text-[12px] cursor-pointer hover:bg-orange-600">Strategies</p>

            <h1 className=" text-gray-400 font-mono text-[14px] p-2 pl-6">COMMUNITY</h1>
               <p className="text-gray-400 font-medium p-2 ml-6 border-l-3 border-orange-600 text-[12px] cursor-pointer hover:bg-orange-600">Coaching</p>
               <p className="text-gray-400 font-medium p-2 ml-6 border-l-3 border-orange-600 text-[12px] cursor-pointer hover:bg-orange-600">Network</p>

            <h1 className=" text-gray-400 font-mono text-[14px]  p-2 pl-6">ACCOUNT</h1>
               <p className="text-gray-400 font-medium p-2 ml-6 border-l-3 border-orange-600 text-[12px] cursor-pointer hover:bg-orange-600">Profile</p>
               <p className="text-gray-400 font-medium p-2 ml-6 border-l-3 border-orange-600 text-[12px] cursor-pointer hover:bg-orange-600">Logout</p>
          </main>

          <div className="flex border-t border-gray-600 mt-10">
          <footer className="w-full h-20 flex flex-col border-gray-600 p-4 pl-3">
             <label className=" font-bold " htmlFor="Search"></label>
            <input className="w-46 p-1  text-white bg-gray-700 rounded" type="search" name="Search" id="Search" placeholder='Search' />
          </footer>
          </div>
      </div>
      
      <div direita className="flex flex-col items-center gap-4 pt-8 justify-center w-full h-162, bg-gradient-to-r from-orange-700 via-red-600 to-orange-400">
        <h1 className="text-5xl font-medium text-white">CourseOS</h1>
        <p  className="text-[15px] text-white">Plataforma  de  curso  aberto  desenvolvida  no  Hackathon.</p>
        <button className="bg-white text-black font-medium py-1 px-6 rounded mt-4 mb-4 cursor-pointer">Entrar</button>

        <div className="w-full h-full flex flex-col bg-gray-900">
          <header className="flex place-content-between p-4 border-b border-gray-600">
            <h1 className="text-[18px] font-medium text-white">Conteúdo</h1>
            <p className="text-[11px] text-gray-400">5 LESSONS</p>
          </header>
        </div>
      </div>


     </div>
    </>
  )
}

export default App
