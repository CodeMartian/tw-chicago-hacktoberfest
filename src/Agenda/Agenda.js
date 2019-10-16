import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Agenda.css";
import AgendaCard from "../AgendaCard/AgendaCard";

const Agenda = () => {
	return (
		<div className='Agenda'>
			<h1 className='header'>
				<span className='highlight'>Agenda</span>
			</h1>
			<p className='message'>
				Below is an outline of the evening to get you excited! Some things may
				change a bit, and we're still getting a few of the details in order, so
				check back for updated information!
			</p>
			<Accordion>
				<AgendaCard
					header='Introduction to Hacktoberfest'
					time='5:10 PM'
					duration='~ 5 minutes'
					details='We will give a short introduction to the Hacktoberfest event, its sponsors, and TW involvement in Hacktoberfest'
					eventKey='0'
				/>
				<AgendaCard
					header='Open Source Lightning Talk'
					time='5:15 PM'
					duration='~ 5 minutes'
					details='We give a small talk that explains the community of open source and what defines open source'
					eventKey='1'
				/>
				<AgendaCard
					header='First Pull Request Workshop'
					time='5:20 PM'
					duration='~ 20 minutes'
					details='Austin and Jeff will present a very small walkthrough of an open source contribution to help you get started'
					eventKey='2'
				/>
				<AgendaCard
					header='Hack time!'
					time='5:40 PM'
					duration='~ 2 hours'
					details='Time to code!'
					eventKey='3'
				/>
				<AgendaCard
					header='Experience Sharing & Feedback'
					time='7:40 PM'
					duration='remaining time'
					details='A voluntary opportunity to show what you have worked on, share your experience, and give us feedback! 
          The rest of the time can also be used to just socialize for the rest of Pub Night!'
					eventKey='4'
				/>
				<AgendaCard header='Pub Night' time='Coming soon...' duration='Coming soon...' details='Coming soon...' eventKey='5' />
			</Accordion>
		</div>
	);
};

export default Agenda;
