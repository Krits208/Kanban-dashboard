import React from 'react';
import TicketCard from './TicketCard';
import './KanbanColumn.css';

const KanbanColumn = ({ status, tickets }) => {
    return (
        <div className="KanbanColumn">
            <h2>{status} ({tickets.length})</h2>
            <div className="TicketList">
                {tickets.map(ticket => (
                    <TicketCard key={ticket["Ticket ID"]} ticket={ticket} />
                ))}
            </div>
        </div>
    );
};

export default KanbanColumn;
