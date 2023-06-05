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
		<div className={props.bgColor ? 'green bio-data' : 'bio-data'}>
			<h2>Bio Data of {props.name}</h2>
			<div className="personal-info">
				<p>
					<strong>name:</strong> {props.name}
				</p>
				<p>
					<strong>age:</strong>{props.age}
				</p>
			</div>
			<div className="contact-info">
				<h2>My Contact Info:</h2>
				<p>
					<strong>email:</strong> {props.email}
				</p>
				<p>
					<strong>phone:</strong> {props.phone}
				</p>
			</div>
			<div className="skills">
				<h2>My Skills:</h2>
				<ul>
					{props.skills.map(item => (
                        <li key={item}>{item}</li>
                    ))}
				</ul>
			</div>
			<div className="social-links">
				<h2>My Social Media:</h2>
				<ul>
					{props.socialLinks.map(item => (
                        <li key={item}>{item}</li>
                    ))}
				</ul>
			</div>
			<div className="interests">
				<h2>My Interests:</h2>
				<ul>
					{props.interests.map(item => (
                        <li key={item}>{item}</li>
                    ))}
				</ul>
			</div>
		</div>
	);
};

// function add (a, b) {
//     return a + b
// }

// add(10, 20)

// add(100, 200)


export default BioData
