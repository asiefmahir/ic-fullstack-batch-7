/**
 * 
 * props = {
 *      name: "mahir asief",
 *      age: 27,
 *      skills = ["js", "react", 'node']
 * }
 */


const BioData = (props) => {
    console.log(props, "props");
	return (
		<div className='bio-data'>
			<h2>Bio Data of {props.name}</h2>
			{props.children}
			{/* <PersonalInfo 
				name = {name}
				age = {age}
			/>
			<ContactInfo 
				email = {email}
				phone = {phone}
			/>
			<SkillSection 
				skills = {skills}
			/>
			<SocialSection 
				socialLinks = {socialLinks}
			/>
			<InterestSection 
				interests = {interests}
			/> */}
			<hr />
		</div>
	);
};

// function add (a, b) {
//     return a + b
// }

// add(10, 20)

// add(100, 200)


export default BioData
