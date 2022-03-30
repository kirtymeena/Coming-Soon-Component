import './App.css';
import Card from './components/Card';

function App() {

  const visitWebsite = ()=>{
    window.location.href="https://www.frontendmentor.io?ref=challenge";
  }

  const visitProfile=()=>{
      window.location.href="https://www.frontendmentor.io/profile/kirtymeena"
  }
  
  return (
    <div className="App">
        <Card/>
        <footer>
            <p>
      Challenge by <span className="link" onClick={visitWebsite}>Frontend Mentor</span>. 
      Coded by <span className="link" onClick={visitProfile}>Kirty</span>.
    </p>
        </footer>
        
    </div>
  );
}



export default App;
