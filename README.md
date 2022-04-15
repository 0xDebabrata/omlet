## Inspiration
Omlet was inspired by the lack of good finance trackers that work with Indian banks. We believe effective money management is a byproduct of discipline. It starts with habits like budgeting and tracking our expenses. We wanted to build something that would make it easier to be disciplined by automating the boring stuff.  

## What it does
Omlet essentially keeps all your _transactions_ from all your bank accounts in one place. 
Every expense is _categorized_ and stored with context based data (like subscription services and recurring expenses). 
This allows Omlet to preemptively accommodate them in your _budget_. 
_Budgets_ are where you set up your saving goals or anything you want to save for. It gives you a holistic view of cash inflow and outflow, accompanied by useful, customisable charts and graphs.

## How we built it
For the purpose of this hackathon, we wanted to build a proof of concept. 
**Backend**
We use Golang to make RESTful APIs which serve two purposes:
1) To maintain state changes for the frontend
2) To enable CRUD functionalities for updating user data
API endpoints and server side code are written in Go and hosted on Linux runtimes on Heroku.
We use PostgreSQL to store user data, transactions and any new data that is generated through the app.
Some scripts for populating the databases with test data are written in Python. 
**Frontend**
We use React Native 

## Challenges we ran into
A significant number of Indian banks lack production grade APIs that provide transaction data to developers. So, we made test data and emulated what those APIs "should do" by making our own.
