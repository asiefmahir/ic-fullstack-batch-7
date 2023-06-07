import React from 'react'

const SocialSection = (props) => {
  return (
    <div className="social-links">
				<h2>My Social Media:</h2>
				<ul>
					{props.socialLinks.map(item => (
                        <li key={item}>{item}</li>
                    ))}
				</ul>
			</div>
  )
}

export default SocialSection