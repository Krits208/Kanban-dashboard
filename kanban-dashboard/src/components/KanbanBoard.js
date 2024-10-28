import React, { useState } from 'react';
import KanbanColumn from './KanbanColumn';
import ticketsData from '../tickets.json';
import './KanbanBoard.css';

const KanbanBoard = () => {
    const [liveMode, setLiveMode] = useState(false);
    const initialTickets = {
        "To Do": [],
        "In Progress": [],
        "Blocked": [],
        "Done": []
    };

    ticketsData.forEach(ticket => {
        initialTickets[ticket.Status].push(ticket);
    });

    // Flatten the tickets array for the hook
    const allTickets = Object.values(initialTickets).flat();

    // Use the custom hook for live transitions


    return (
        <div className="KanbanBoard">
            <button onClick={() => setLiveMode(prev => !prev)}>
                {liveMode ? 'Disable Live Mode' : 'Enable Live Mode'}
            </button>
            {Object.keys(initialTickets).map(status => (
                <KanbanColumn key={status} status={status} tickets={initialTickets[status]} />
            ))}
        </div>
    );
};

export default KanbanBoard;

