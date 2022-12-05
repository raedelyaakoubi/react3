import "./App.css";
import Profile from "./profile/profile";
function App() {
  const handleAlert = e => {
    alert(e);
  };
  return (
    <header className="App-header">
    <Profile
      fullName="Raed EL Yaakoubi"
      bio="I am a GoMyCoder"
      profession="Web Deveolper"
      handleAlert={handleAlert}
    >
      <img src="public/maphoto.jpeg" width="200px" height="500px"></img>
    </Profile>
    </header>
  );
}
export default App;