import "./App.css";
import BioData from "./components/BioData";
import ContactInfo from "./components/ContactInfo";
import InterestSection from "./components/InterestSection";
import PersonalInfo from "./components/PersonalInfo";
import SkillSection from "./components/SkillSection";
import SocialSection from "./components/SocialSection";

const allBioData = [
	{
		id: "1",
		name: "Mahir Asief",
		age: 27,
		email: "asiefmahir1@gmail.com",
		skills: ["Js", "React", "NodeJs"],
		socialLinks: ["fb/asiefmahir", "li/asiefmahir", "tw/asiefmahir"],
		interests: ["Ds Algo", "System Design"],
    phone: "02145245245245"
	},

  {
		id: "2",
		name: "Mahadi Hasan",
		age: 25,
		email: "mahadi@gmail.com",
		skills: ["Js", "React", "Node", "MongoDB", "bootstrap", "css"],
		socialLinks: ["fb/mahadi", "li/mahadi", "tw/mahadi"],
		interests: ["Aws", "ML", "AI"],
    phone: "02024121021020"
	},
  {
    id: "3",
		name: "Jamil Hasan",
		age: 28,
		email: "jamil@gmail.com",
		skills: ["Js", "React", "Node", "MongoDB"],
		socialLinks: ["fb/jamil", "li/jamil", "tw/jamil"],
		interests: ["Aws", "ML", "AI", "Distributed Systems"],
    phone: "01546545456"
  }
];

function App() {
	return (
		<div className="App">
      {allBioData.map(profile => (
        <BioData key={profile.id} name = {profile.name}>
            <PersonalInfo 
                name = {profile.name}
                age = {profile.age}
            />
            <ContactInfo 
              email = {profile.email}
              phone = {profile.phone}
            />
            <SkillSection 
                skills = {profile.skills}
            />
            <SocialSection 
                socialLinks = {profile.socialLinks}
            />
            <InterestSection 
                interests = {profile.interests}
            />
        </BioData>
      ))}
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
