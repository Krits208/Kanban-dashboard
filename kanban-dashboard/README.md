A web-based Kanban dashboard that organizes tasks into columns representing different statuses.
Each ticket can move through the states To Do, In Progress, Blocked, and Done based on predefined allowed transitions
The project uses React for the front end and Redux to enforce Finite State Automaton (FSA) rules for
ticket status transitions.

In the project directory, you can run:
npm install

### `npm start`
git clone https://github.com/yourusername/Kanban-Dashboard.git
cd Kanban-Dashboard

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
Kanban-Dashboard/
│
├── public/                      # Public assets
│
├── src/
│   ├── components/              # React components
│   │   ├── KanbanBoard.js       # Main Kanban board component
│   │   ├── KanbanColumn.js      # Column component for each status
│   │   └── TicketCard.js        # Card component for each ticket
│   │
│   ├── redux/                   # Redux-related files
│   │   ├── ticketActions.js     # Action creators for ticket transitions
│   │   ├── ticketReducer.js     # Reducer for ticket state management
│   │   └── store.js             # Redux store configuration
│   │
│   ├── tickets.json             # Sample data for initial tickets
│   ├── App.js                   # Main app component
│   ├── index.js                 # Entry point, includes Redux Provider
│   └── styles/                  # CSS files for styling components
│
├── README.md                    # Project documentation
└── package.json                 # Project dependencies and scripts
