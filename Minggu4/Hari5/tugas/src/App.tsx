
import './App.css'
import AdvancedUploadForm from './components/AdvancedUploadForm'
import DynamicTeamForm from './components/DynamicTeamForm'
import MultiStepForm from './components/MultiStepForm'
import RegisterForm from './components/RegisterForm'

function App() {
  

  return (
    <>
    <div>
      <br />
      <h1 style={{ textAlign: "center"}}>Soal 1</h1>
      <RegisterForm/>
      <br /><br /><br />
      <h1 style={{ textAlign: "center"}}>Soal 2</h1>
      <MultiStepForm/>
      <br /><br /><br />
      <h1 style={{ textAlign: "center"}}>Soal 3</h1>
      <DynamicTeamForm/>
      <br /><br /><br />
      <h1 style={{ textAlign: "center"}}>Soal 4</h1>
      <AdvancedUploadForm/>
      <br /><br />
    </div>
    </>
  )
}

export default App
