import { Article, Calendar, Chat, ChatDots, Crosshair, Door, MonitorPlay, Presentation, User, UsersFour } from "phosphor-react"


function App() {


  return (
    <>
      <div container className="flex overflow-hidden">
        <div esquerda className="h-screen w-60 bg-gray-800  flex  flex-col">
          <header className=" w-full h-20 flex items-center gap-2 border-b border-gray-600 p-4 pl-6">
            <Chat size={38} color="#dbdbdb" weight="bold" className="bg-orange-600 p-1 rounded-xl" />
            <div className="flex flex-col">
              <h1 className="text-xl text-white font-medium">CourseOS</h1>
              <p className="text-[12px] text-gray-400">Hackathon 2025</p>
            </div>

          </header>

          <main className="flex flex-col gap-2">
            <h1 className=" text-gray-400 font-mono text-[14px] p-2 pl-6">MENU</h1>

            <div className="flex items-center ml-5 pl-2 cursor-pointer hover:bg-orange-600/50">
              <Presentation className="" size={18} color="white" />
              <p className="text-gray-400 font-medium p-2 text-[12px] ">Introduction</p>
            </div>

            <div className="flex items-center ml-5 pl-2 cursor-pointer hover:bg-orange-600/50">
              <Article size={18} color="#dbdbdb" weight="bold" />
              <p className="text-gray-400 font-medium p-2 text-[12px] ">Curriculum</p>
            </div>

            <div className="flex items-center ml-5 pl-2 cursor-pointer hover:bg-orange-600/50">
              <Calendar size={18} color="#dbdbdb" weight="bold" />
              <p className="text-gray-400 font-medium p-2 text-[12px] ">Calendar</p>
            </div>

            <div className="flex items-center ml-5 pl-2 cursor-pointer hover:bg-orange-600/50">
              <Crosshair size={18} color="#dbdbdb" weight="bold" />
              <p className="text-gray-400 font-medium p-2 text-[12px] ">Strategies</p>
            </div>



            <h1 className=" text-gray-400 font-mono text-[14px] p-2 pl-6">COMMUNITY</h1>

            <div className="flex items-center ml-5 pl-2 cursor-pointer hover:bg-orange-600/50">
              <ChatDots size={18} color="#dbdbdb" weight="bold" />
              <p className="text-gray-400 font-medium p-2 text-[12px] ">Coaching</p>
            </div>

            <div className="flex items-center ml-5 pl-2 cursor-pointer hover:bg-orange-600/50">
              <UsersFour size={18} color="#dbdbdb" weight="bold" />
              <p className="text-gray-400 font-medium p-2 text-[12px] ">Network</p>
            </div>

            <h1 className=" text-gray-400 font-mono text-[14px]  p-2 pl-6">ACCOUNT</h1>

            <div className="flex items-center ml-5 pl-2 cursor-pointer hover:bg-orange-600/50">
              <User size={18} color="#dbdbdb" weight="bold" />
              <p className="text-gray-400 font-medium p-2 text-[12px] ">Profile</p>
            </div>

            <div className="flex items-center ml-5 pl-2 cursor-pointer hover:bg-orange-600/50">
              <Door size={18} color="#dbdbdb" weight="bold" />
              <p className="text-gray-400 font-medium p-2 text-[12px] ">Logout</p>
            </div>
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
          <p className="text-[15px] text-white">Plataforma  de  curso  aberto  desenvolvida  no  Hackathon.</p>
          <button className="bg-white text-black font-medium py-1 px-6 rounded mt-4 mb-4 cursor-pointer houver transform hover:scale-103 duration-50">Entrar</button>

          <div className="w-full h-full flex flex-col bg-gray-900">
            <header className="flex place-content-between p-4 border-b border-gray-600">
              <h1 className="text-[18px] font-medium text-white">Conteúdo</h1>
              <p className="text-[11px] text-gray-400">4 LESSONS</p>
            </header>

            <main className="flex flex-col p-4 gap-5">
              <div className="flex w-275 p-3 gap-8 bg-gray-500/70 rounded cursor-pointer hover:bg-gray-600 transform hover:scale-101 duration-50">
                <MonitorPlay size={30} color="#dbdbdb" weight="bold" />
                <div className="flex flex-col">
                  <h1 className="text-[15px] font-medium text-white">Introdução ao Curso</h1>
                  <p className="text-[12px] text-gray-400">12:34</p>
                </div>

                <div className=" ml-190">
                  <p className="text-[16px] text-white border p-1 pl-5 pr-5 rounded">Start</p>
                </div>
              </div>

              <div className="flex w-275 p-3 gap-8 bg-gray-500/70 rounded cursor-pointer hover:bg-gray-600 transform hover:scale-101 duration-50">
                <MonitorPlay size={30} color="#dbdbdb" weight="bold" />
                <div className="flex flex-col">
                  <h1 className="text-[15px] font-medium text-white">Aula-1</h1>
                  <p className="text-[12px] text-gray-400">20:00</p>
                </div>

                <div className=" ml-214">
                  <p className="text-[16px] text-white border p-1 pl-5 pr-5 rounded">Start</p>
                </div>
              </div>

              <div className="flex w-275 p-3 gap-8 bg-gray-500/70 rounded cursor-pointer hover:bg-gray-600 transform hover:scale-101 duration-50">
                <MonitorPlay size={30} color="#dbdbdb" weight="bold" />
                <div className="flex flex-col">
                  <h1 className="text-[15px] font-medium text-white">Aula-2</h1>
                  <p className="text-[12px] text-gray-400">18:36</p>
                </div>

                <div className=" ml-214">
                  <p className="text-[16px] text-white border p-1 pl-5 pr-5 rounded">Start</p>
                </div>
              </div>

              <div className="flex w-275 p-3 gap-8 bg-gray-500/70 rounded cursor-pointer hover:bg-gray-600 transform hover:scale-101 duration-50">
                <MonitorPlay size={30} color="#dbdbdb" weight="bold" />
                <div className="flex flex-col">
                  <h1 className="text-[15px] font-medium text-white">Aula-3</h1>
                  <p className="text-[12px] text-gray-400">19:20</p>
                </div>

                <div className=" ml-214">
                  <p className="text-[16px] text-white border p-1 pl-5 pr-5 rounded">Start</p>
                </div>
              </div>
            </main>

          </div>
        </div>


      </div>
    </>
  )
}

export default App
