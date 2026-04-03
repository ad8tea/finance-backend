# Finance Backend System

## Overview

This project is a backend system for managing financial records with role-based access control.

## Features

### Authentication

* User registration and login
* JWT-based authentication

### Roles

* Viewer: Can view data
* Analyst: Can view records and summaries
* Admin: Full access (create/manage records)

### Financial Records

* Create records (Admin only)
* View records (Admin, Analyst)
* User-specific data filtering

### Dashboard

* Total Income
* Total Expense
* Net Balance

## Tech Stack

* Node.js
* Express.js
* In-memory storage (for simplicity)

## API Endpoints

### Auth

* POST /auth/register
* POST /auth/login

### Records

* POST /records (Admin only)
* GET /records (Admin, Analyst)
* GET /records/summary

## Assumptions

* Data is stored in memory (resets on restart)
* Authentication uses JWT tokens

## How to Run

npm install
npm run dev

Server runs on:
http://localhost:5000

## Notes

This project focuses on backend design, access control, and API structure rather than production-level persistence.
