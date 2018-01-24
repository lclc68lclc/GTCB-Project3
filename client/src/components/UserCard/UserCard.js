//-------------- Imports ----------------------//
	import React from "react"
	import "./UserCard.css"
	import { Card, Image } from 'semantic-ui-react'
//--------------------------------------------//

//-------------- UserPageRepCard Div -----------------//
	var userCard = props =>
		<div className = "UserCard">
			<Card>

				<div className = "cardDiv">
					<Image src={props.imageSource} size='small' circular />
				</div>
				
				<Card.Content>
					<Card.Header> {props.Name}</Card.Header>
					<Card.Meta> {props.Meta} </Card.Meta>
				 	<Card.Description> {props.District}</Card.Description>
			 	</Card.Content>
			 </Card>
		</div>
	export default userCard;