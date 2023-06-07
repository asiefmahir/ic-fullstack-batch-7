import "./App.css";
// import BioData from "./components/BioData";
// import ContactInfo from "./components/ContactInfo";
// import InterestSection from "./components/InterestSection";
// import PersonalInfo from "./components/PersonalInfo";
// import SkillSection from "./components/SkillSection";
// import SocialSection from "./components/SocialSection";

// const allBioData = [
// 	{
// 		id: "1",
// 		name: "Mahir Asief",
// 		age: 27,
// 		email: "asiefmahir1@gmail.com",
// 		skills: ["Js", "React", "NodeJs"],
// 		socialLinks: ["fb/asiefmahir", "li/asiefmahir", "tw/asiefmahir"],
// 		interests: ["Ds Algo", "System Design"],
//     phone: "02145245245245"
// 	},

//   {
// 		id: "2",
// 		name: "Mahadi Hasan",
// 		age: 25,
// 		email: "mahadi@gmail.com",
// 		skills: ["Js", "React", "Node", "MongoDB", "bootstrap", "css"],
// 		socialLinks: ["fb/mahadi", "li/mahadi", "tw/mahadi"],
// 		interests: ["Aws", "ML", "AI"],
//     phone: "02024121021020"
// 	},
//   {
//     id: "3",
// 		name: "Jamil Hasan",
// 		age: 28,
// 		email: "jamil@gmail.com",
// 		skills: ["Js", "React", "Node", "MongoDB"],
// 		socialLinks: ["fb/jamil", "li/jamil", "tw/jamil"],
// 		interests: ["Aws", "ML", "AI", "Distributed Systems"],
//     phone: "01546545456"
//   }
// ];

// function App() {
// 	return (
// 		<div className="App">
//       {allBioData.map(profile => (
//         <BioData key={profile.id} name = {profile.name}>
//             <PersonalInfo 
//                 name = {profile.name}
//                 age = {profile.age}
//             />
//             <ContactInfo 
//               email = {profile.email}
//               phone = {profile.phone}
//             />
//             <SkillSection 
//                 skills = {profile.skills}
//             />
//             <SocialSection 
//                 socialLinks = {profile.socialLinks}
//             />
//             <InterestSection 
//                 interests = {profile.interests}
//             />
//         </BioData>
//       ))}
// 		</div>
// 	);
// }

// add(10, 20)

/**
 * Component ->
 *      1) It must be a function
 *      2) It should return 'something'
 *      3) that 'something' should be some html-ish code
 */

import {useState} from 'react'

export const App = () => {
  console.log("I am being invoked");

  // let count = 0
  // state
  const [counter, setCounter] = useState(0);

  const increaseHandler = (payload) => {
      setCounter(counter + payload) // 1 + 1 = 2

      // counter = 2;

      // counter++;
      console.log(counter, 'from increaseHandler');
  };

  const decreaseHandler = (payload) => {
    // counter--;
    setCounter(counter - payload) //
    console.log(counter, 'from decreaseHandler');
  }
  return (
    <div className="App">
      <h2>
        The value of the counter is {counter}
      </h2>
      <button onClick={() => increaseHandler(1)}>Increase By 1</button>
      <button onClick={() => increaseHandler(10)}>Increase By 10</button>

      <button onClick={() => decreaseHandler(1)}>Decrease By 1</button>
      <button onClick={() => decreaseHandler(5)}>Decrease By 5</button>


    </div>
  )
}

// function add (a, b) {
//   return a + b
// }

// add (10, 20)
// add(30, 20)
// export {};
