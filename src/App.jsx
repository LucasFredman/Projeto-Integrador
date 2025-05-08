import Header from './components/Header'
import Icon from './components/Icon'
import MainCard from './components/MainCard'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen text-gray-800 font-nunito">
      <div className="backdrop-blur-md bg-white/60 rounded-2xl shadow-lg p-10 max-w-xl w-full mt-12 mx-4">
        <Header />
        <Icon />
        <MainCard />
      </div>
      <Footer />
    </div>
  )
}

export default App
