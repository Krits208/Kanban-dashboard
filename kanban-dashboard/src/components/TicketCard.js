import React from 'react';
import './TicketCard.css';

const TicketCard = ({ ticket }) => {
    return (
        <div className="TicketCard">
            <p className="TicketID">ID: {ticket["Ticket ID"]}</p>
            <h3>{ticket.Title}</h3>
            <p>{ticket.Description}</p>
        </div>
    );
};

export default TicketCard;
