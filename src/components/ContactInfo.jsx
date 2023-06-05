import React from 'react'

const ContactInfo = (props) => {
  return (
    <div className="contact-info">
				<h2>My Contact Info:</h2>
				<p>
					<strong>email:</strong> {props.email}
				</p>
				<p>
					<strong>phone:</strong> {props.phone}
				</p>
			</div>
  )
}

export default ContactInfo