import './App.css';
import BioData from './components/BioData';


function App() {
  
  return (
    <div className="App">
        <BioData 
            bgColor="green"
            name="Mahir Asief"
            age={27}
            phone = "01565746765876587658768"
            email = "asiefmahir1@gmail.com"
            skills = {["Js", "React", "Node", "MongoDB"]}
            socialLinks={["fb/asiefmahir", 'li/asiefmahir', "tw/asiefmahir"]}
            interests={["Ds Algo", "System Design"]}
        />
        <hr />
        <BioData 
            name="Mahadi Hasan"
            age={25}
            phone = "0145676845"
            email = "mahadi@gmail.com"
            skills = {["Js", "React", "Node", "MongoDB", "bootstrap", "css"]}
            socialLinks={["fb/mahadi", 'li/mahadi', "tw/mahadi"]}
            interests={["Aws", "ML", "AI"]}
        />
    </div>
  );
}

// add(10, 20)

/**
 * Component ->
 *      1) It must be a function
 *      2) It should return 'something'
 *      3) that 'something' should be some html-ish code
 */

export default App;
