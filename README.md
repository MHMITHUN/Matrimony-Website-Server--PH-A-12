# Islamic Matrimony - Server

Backend API server for the Islamic Matrimony Platform built with Node.js, Express, and MongoDB.

## Features

- RESTful API endpoints for biodata management
- JWT-based authentication
- Premium membership system
- Contact request with payment integration
- Admin dashboard with statistics
- Success story management
- Server-side search and pagination

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Payment**: Stripe Integration

## API Endpoints

### Authentication
- `POST /api/auth/jwt` - Get JWT token
- `GET /api/auth/me` - Get current user
- `GET /api/auth/admin/:email` - Check admin status

### Biodata
- `GET /api/biodata` - Get all biodatas with filters
- `GET /api/biodata/premium` - Get premium biodatas
- `GET /api/biodata/:id` - Get single biodata
- `POST /api/biodata` - Create/update biodata
- `POST /api/biodata/request-premium` - Request premium status

### Admin
- `GET /api/admin/users` - Get all users
- `PATCH /api/admin/users/:id/make-admin` - Make user admin
- `PATCH /api/admin/users/:id/make-premium` - Make user premium
- `GET /api/admin/premium-requests` - Get premium requests
- `PATCH /api/admin/approve-premium/:biodataId` - Approve premium
- `GET /api/admin/contact-requests` - Get contact requests
- `PATCH /api/admin/approve-contact/:id` - Approve contact request

## Environment Variables

Create a `.env` file with:
```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_key
CLIENT_URL=http://localhost:5173
```

## Installation

```bash
npm install
npm run dev
```

## Admin Credentials

- **Email**: admin@islamicmatrimony.com
- **Password**: Admin@123
