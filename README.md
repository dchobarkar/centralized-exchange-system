# Decentralized Centralized Exchange System

## About the Project

The **Decentralized Centralized Exchange System** is a hybrid cryptocurrency exchange platform where users can trade tokens in a decentralized manner while maintaining the benefits of a centralized system for enhanced performance and security. Users can connect their wallets, trade tokens on the Solana blockchain, and view transaction history.

## Features

- **Decentralized Token Exchange** on Solana blockchain.
- **Centralized User Management** with authentication via NextAuth.js.
- **Trade Cryptocurrency** using Solana SPL tokens.
- **Real-time Price Data** using APIs (Axios).
- **User Authentication**: Google login with `next-auth`.
- **Prisma ORM** for database interactions with PostgreSQL.
- **Hybrid Architecture**: Leveraging both decentralized and centralized mechanisms.

## Tech Stack

- **Frontend**: React, Next.js, Tailwind CSS
- **Backend**: Next.js API routes, Prisma ORM
- **Blockchain Integration**: Solana Web3.js, Solana SPL Token
- **Authentication**: NextAuth.js with Google Provider
- **Database**: PostgreSQL (Managed via Prisma ORM)
- **Containerization**: Docker (Optional)

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

- **Node.js**: Ensure you have Node.js installed.
- **PostgreSQL**: Install PostgreSQL on your machine and create a new database.
- **Solana CLI**: Install Solana CLI for blockchain interactions.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/dchobarkare/decentralized-centralized-exchange-system.git
   ```

2. Navigate to the project directory:

   ```bash
   cd decentralized-centralized-exchange-system
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Fill in the required environment variables in the `.env` file:

   - `DATABASE_URL` for PostgreSQL connection.
   - `NEXTAUTH_SECRET` for NextAuth authentication.
   - `NEXTAUTH_URL` set to your domain.

5. Run the Prisma migrations to set up the database schema:

   ```bash
   npx prisma migrate dev
   ```

### Development Setup

1. **Run the development server**:

   ```bash
   npm run dev
   ```

2. Open `http://localhost:3000` to view the app in the browser.

### Build for Production

1. To build the application for production, use the following command:

   ```bash
   npm run build
   ```

2. Start the production server:

   ```bash
   npm run start
   ```

## Usage

- Visit `http://localhost:3000` after starting the app.
- Log in using Google via NextAuth.
- View token balances, make trades, and track transactions.

## **Contributing**

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## **License**

Distributed under the MIT License. See `LICENSE.txt` for more information.

## Contact

Darshan Chobarkar - [@dchobarkar](https://www.linkedin.com/in/dchobarkar/) - contact@darshanwebdev.com

Project Link: [https://github.com/dchobarkar/decentralized-centralized-exchange-system](https://github.com/dchobarkar/decentralized-centralized-exchange-system)
