import json
from faker import Faker
import random

# Initialize Faker
fake = Faker()

# Define statuses
statuses = ["To Do", "In Progress", "Blocked", "Done"]

# Number of tickets to generate
num_tickets = 10000

# Function to generate a single ticket
def generate_ticket(ticket_id):
    return {
        "Ticket ID": ticket_id,
        "Title": fake.sentence(nb_words=5),
        "Description": fake.text(max_nb_chars=100),
        "Status": random.choice(statuses)
    }

# Generate tickets
tickets = [generate_ticket(ticket_id=i+1) for i in range(num_tickets)]

# Save tickets to a JSON file
with open("tickets.json", "w") as f:
    json.dump(tickets, f, indent=4)

print("Generated tickets saved to tickets.json")
