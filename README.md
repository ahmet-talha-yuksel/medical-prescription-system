# Medical Prescription Management System

Frontend scaffold for the CENG 475 React course project, using React, Vite,
JavaScript (JSX), React Router, and plain CSS.

The original project proposal is preserved in [CENG475_README.md](CENG475_README.md).
Its planned structure and installation notes describe the earlier planning stage;
this README documents the current frontend setup.

## Getting started

Use Node.js 22.22.0 or newer (Node.js 24 LTS recommended) and npm.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173`.
Stop the server with Ctrl+C. After the initial installation, only `npm run dev`
is needed to start development. Use `npm ci` for a clean installation from the
committed lockfile.

```sh
npm run build    # Create the production bundle in dist/
npm run preview  # Preview that bundle locally
```

## Current scope

- All eleven pages are minimal placeholders with working routes.
- Shared components and the dashboard layout are ready for later development.
- `AuthContext` supplies a null value; no authentication state is implemented.
- `ProtectedRoute` passes through to its child routes. It does not protect pages yet.
- All module links are visible and accessible during scaffolding.
- Service modules export empty objects with TODO comments. They make no requests.
- No forms, mock data, CRUD, database operations, or business logic are implemented.
- The shared modal and loading components are placeholders for future UI work.

## Routes

| URL | Page |
| --- | --- |
| `/login` | Login |
| `/register` | Register |
| `/admin` | Admin dashboard |
| `/admin/users` | User management |
| `/doctor` | Doctor dashboard |
| `/doctor/patients` | Patient list |
| `/doctor/prescriptions` | Prescription list |
| `/doctor/prescriptions/create` | Create prescription |
| `/pharmacist` | Pharmacist dashboard |
| `/pharmacist/inventory` | Medicine inventory |
| `/pharmacist/fulfillment` | Prescription fulfillment |

The root URL and unknown URLs redirect to `/login`.
Routes are defined in `src/routes/AppRouter.jsx`, and dashboard links are defined
in `src/components/layout/DashboardLayout.jsx`. A future production host must
serve `index.html` for frontend routes to support direct links and page refreshes.

## Folder structure

```text
medical-prescription-system/
├── public/
│   └── .gitkeep
├── src/
│   ├── assets/
│   │   └── .gitkeep
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── Alert.jsx
│   │   │   └── LoadingSpinner.jsx
│   │   └── layout/
│   │       └── DashboardLayout.jsx
│   ├── pages/
│   │   ├── auth/
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── admin/
│   │   │   ├── AdminDashboard.jsx
│   │   │   └── UserManagement.jsx
│   │   ├── doctor/
│   │   │   ├── DoctorDashboard.jsx
│   │   │   ├── PatientList.jsx
│   │   │   ├── PrescriptionList.jsx
│   │   │   └── CreatePrescription.jsx
│   │   └── pharmacist/
│   │       ├── PharmacistDashboard.jsx
│   │       ├── MedicineInventory.jsx
│   │       └── PrescriptionFulfillment.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── hooks/
│   │   └── .gitkeep
│   ├── services/
│   │   ├── api.js
│   │   ├── authService.js
│   │   ├── userService.js
│   │   ├── prescriptionService.js
│   │   └── medicineService.js
│   ├── routes/
│   │   ├── AppRouter.jsx
│   │   └── ProtectedRoute.jsx
│   ├── styles/
│   │   ├── global.css
│   │   ├── auth.css
│   │   ├── admin.css
│   │   ├── doctor.css
│   │   └── pharmacist.css
│   ├── utils/
│   │   └── .gitkeep
│   ├── App.jsx
│   └── main.jsx
├── .gitattributes
├── .gitignore
├── CENG475_README.md
├── README.md
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

`.gitkeep` files preserve empty directories in Git. `node_modules/` and `dist/`
are generated locally and ignored.

## Team responsibilities

| Developer | Planned branch | Primary ownership |
| --- | --- | --- |
| 1 | `feature/auth-admin` | `pages/auth/`, `pages/admin/`, `context/AuthContext.jsx`, `routes/`, `styles/auth.css`, `styles/admin.css`; authentication, users, navigation and authorization |
| 2 | `feature/doctor-prescriptions` | `pages/doctor/`, `styles/doctor.css`; patients and prescriptions |
| 3 | `feature/pharmacy-inventory` | `pages/pharmacist/`, `styles/pharmacist.css`; inventory and fulfillment |

These are planned branch names; setup does not create branches or push changes.
Each developer can work in their module after the scaffold is shared. Coordinate
changes to routes, navigation, shared components, services, global CSS, and package
files to reduce merge conflicts. Keep API access in `services/` when backend work
begins, and reuse `components/common/` and `components/layout/` across modules.

## Dependencies

Runtime: `react`, `react-dom`, `react-router`.
Development: `vite`, `@vitejs/plugin-react`.
Exact installed versions are recorded in `package-lock.json`.

On November 18, 2026, `npm audit --omit=dev` reports zero vulnerabilities.
The full audit reports five high-severity findings in Vite's development
dependency chain, all traced to the same
[picomatch advisory](https://github.com/advisories/GHSA-fc5q-39xc-vjpf), which has
no published patch. Recheck this when updating the development dependencies.

Routing uses the declarative API documented in the
[React Router installation guide](https://reactrouter.com/start/declarative/installation).
Build tooling follows the [Vite guide](https://vite.dev/guide/).
