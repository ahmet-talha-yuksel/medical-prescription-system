# Medical Information System — Prescription Management

**CENG 475 | Project 9: Medical Information System Recipe Application**

> **Project status:** Planning / repository setup. The application is not implemented yet.

## Overview

This project is a web-based medical prescription and medicine inventory management system developed for the **CENG 475** course. It is intended to help doctors create prescriptions, pharmacists process prescriptions and maintain stock, and administrators manage users and monitor system activity.

The application will be built primarily with **React, HTML, CSS, and JavaScript**, following the course requirements. It will connect to a database to store users, medicines, prescriptions, and related records.

**Note:** This is an educational prototype. It must not be used for real medical decisions or real patient data.

## Project Objectives

- Provide sign-up and sign-in functionality.
- Support three different user roles with role-based authorization.
- Let doctors create and manage prescriptions.
- Let pharmacists review and fill prescriptions based on available inventory.
- Automatically update medicine stock when a prescription is filled.
- Give administrators a dashboard for user and inventory management.
- Demonstrate database **CREATE, READ, UPDATE, and DELETE (CRUD)** operations through a user-friendly website.
- Use React components, props, state, and JavaScript functionality throughout the application.

## User Roles and Permissions

| Feature | Admin | Doctor (Medic) | Pharmacist |
| --- | :---: | :---: | :---: |
| Sign in and view role-specific pages | Yes | Yes | Yes |
| Create and manage user accounts / roles | Yes | No | No |
| Add, edit, or delete medicines | Yes | No | Limited* |
| View medicine inventory | Yes | Yes | Yes |
| Create prescriptions | No | Yes | No |
| View relevant prescriptions | Yes | Own | Assigned / pending |
| Approve and fill prescriptions | No | No | Yes |
| View system activity and settings | Yes | No | No |

*Pharmacists may update stock quantities, but only admins can delete medicine records or change restricted medicine details. Exact permissions will be finalized during implementation.*

> User registration will not automatically grant administrator privileges. Role assignment and sensitive operations must be checked on the backend, not only in the React interface.

## Main Features

### 1. Authentication and Authorization
- Registration, sign-in, and sign-out.
- Passwords stored securely (hashed, never in plaintext).
- Role-specific navigation and protected pages.
- Unauthorized-action warnings and access restrictions.

### 2. Prescription Management
- Doctors create prescriptions with medicine, dosage, quantity, and instructions.
- Doctors can view their submitted prescriptions.
- Pharmacists can review and mark prescriptions as filled.
- Prescription status tracking: `Pending`, `Filled`, `Cancelled`.
- Stock availability is verified before filling a prescription.

### 3. Medicine Inventory
- List and search available medicines.
- Add, edit, and delete medicine records according to permissions.
- Track stock quantities and identify low-stock items.
- Decrease stock automatically when prescriptions are filled.
- Prevent transactions that would result in negative stock.

### 4. Admin Dashboard
- View users and their roles.
- Oversee medicine inventory and prescription statistics.
- Review activity logs.
- Manage system-wide settings where applicable.

### 5. Alerts and User Experience
- Success/error alerts after form submissions and database operations.
- Confirmation dialogs before destructive actions.
- Clear validation messages for required or invalid inputs.
- Warnings for insufficient stock, duplicate entries, or unauthorized actions.
- Responsive, easy-to-navigate pages for a desktop browser.

## Planned Technology Stack

| Layer | Technology |
| --- | --- |
| Frontend | React (JavaScript), HTML5, CSS3 |
| Frontend tooling | Vite (proposed) |
| Routing | React Router (proposed) |
| Backend / API | Node.js + Express (proposed) |
| Database | SQLite (proposed; local or remote DB is allowed by the assignment) |
| Version control | Git and GitHub |
| Demo browser | Google Chrome or Microsoft Edge |

The main emphasis is on **React, vanilla JavaScript, HTML, and CSS**. The backend and database are supporting tools for data persistence and CRUD operations; the final setup can be adjusted if needed.

## Planned Project Structure

```text
ceng475-medical-prescription-system/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── AlertMessage.jsx
│   │   │   ├── MedicineTable.jsx
│   │   │   ├── MedicineForm.jsx
│   │   │   ├── PrescriptionForm.jsx
│   │   │   └── PrescriptionList.jsx
│   │   ├── pages/
│   │   │   ├── LoginPage.jsx
│   │   │   ├── RegisterPage.jsx
│   │   │   ├── DoctorDashboard.jsx
│   │   │   ├── PharmacistDashboard.jsx
│   │   │   └── AdminDashboard.jsx
│   │   ├── services/
│   │   ├── styles/
│   │   └── App.jsx
│   └── package.json
├── server/
│   ├── routes/
│   ├── middleware/
│   ├── database/
│   └── package.json
├── README.md
└── .gitignore
```

*This tree is the proposed structure, not a list of files already implemented.*

## Planned Database Entities

- **Users:** `id`, `name`, `email`, `password_hash`, `role`.
- **Medicines:** `id`, `name`, `description`, `stock_quantity`, `unit`.
- **Prescriptions:** `id`, `doctor_id`, `patient_reference`, `status`, `created_at`.
- **PrescriptionItems:** `id`, `prescription_id`, `medicine_id`, `dosage`, `quantity`, `instructions`.
- **ActivityLogs:** `id`, `user_id`, `action`, `created_at`.

The actual database schema will be defined during implementation. Prescription fulfillment and inventory deductions should be handled in a single database transaction.

## Course Evaluation Criteria (100 Points)

| Requirement | Points | Implementation Plan |
| --- | ---: | --- |
| Course-compatible scope: HTML, CSS, React, vanilla JavaScript | 25 | React pages and custom styled components |
| Correct functionality and working solution | 15 | End-to-end prescription and inventory workflows |
| Sign-up, sign-in, and security | 5 | Authentication and protected actions |
| Warning mechanisms | 5 | Alerts, validation, stock warnings, confirmations |
| Database use, integrity, and CRUD | 10 | Persistent database with SELECT, INSERT, UPDATE, DELETE |
| User roles and authorization | 10 | Admin, Doctor, Pharmacist |
| At least 5 components in separate files; props and state | 10 | Reusable components, React hooks, props |
| Documentation and code quality | 10 | README, clear naming, explanatory code comments |
| User-friendly design | 10 | Responsive layout and straightforward navigation |
| **Total** | **100** | |

## Development Roadmap

- [x] Define the project scope and create the initial README.
- [ ] Initialize the React application and shared CSS structure.
- [ ] Build sign-up, sign-in, sign-out, and role-based routing.
- [ ] Set up the backend API and database.
- [ ] Implement medicine management and CRUD operations.
- [ ] Implement prescription creation and status tracking.
- [ ] Add pharmacist fulfillment and automatic stock updates.
- [ ] Build the administrator dashboard.
- [ ] Add validation, confirmation dialogs, and alerts.
- [ ] Test role permissions, data integrity, and key workflows.
- [ ] Document setup steps and verify the demo in Chrome or Edge.

## Installation and Running

**Not available yet.** The React and backend applications will be initialized in the next development step. The exact installation and run commands will be documented here as soon as the code and `package.json` files are added.

## Team

The assignment requires **exactly three students**.

| Student | Student Number | Responsibilities |
| --- | --- | --- |
| Member 1 | TBD | TBD |
| Member 2 | TBD | TBD |
| Member 3 | TBD | TBD |

## Demonstration Checklist

Before submission, verify that:

- [ ] Users can register and sign in.
- [ ] Each role sees only its permitted functions.
- [ ] Doctors can create prescriptions.
- [ ] Pharmacists can fulfill prescriptions when stock is sufficient.
- [ ] Inventory is updated after fulfillment, with no negative stock.
- [ ] CRUD operations persist in the database.
- [ ] Forms show validation and warning messages.
- [ ] At least five separate React components use props and/or state.
- [ ] The project can be run using the documented instructions.
- [ ] The site is usable in Chrome or Microsoft Edge.

---

**Course:** CENG 475  
**Project:** Project 9 — Medical Information System Recipe Application  
**Purpose:** Academic coursework only
