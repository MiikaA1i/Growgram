import Layouts from "./components/Layouts"
import  Grid  from "./components/Grid"
import Hero from "./components/Hero"  

function App() {
  return (

    <Layouts>
      <main>
         <Hero />
         <Grid />
      </main>
    </Layouts>
  )
}

export default App
