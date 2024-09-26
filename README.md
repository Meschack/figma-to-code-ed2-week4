# Medical Appointment Booking Platform

A modern and responsive platform for booking medical appointments, built with [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/). The platform leverages [Clerk](https://clerk.dev/) for user management and authentication, providing a secure and seamless experience for patients and doctors.

## Cover Picture

![Doctor Group](./public/og.jpg)

## Features

- **User Authentication**: Secure user registration and login powered by Clerk.
- **Appointment Booking**: Easy-to-use interface for patients to book appointments with the doctor.
- **Real-Time Availability**: View the doctor's up-to-date availability and schedule appointments accordingly.
- **Appointment Management**: Patients can view, modify, and cancel their appointments.
- **Doctor Dashboard**: A comprehensive view for the doctor to manage appointments and patient information.
- **Responsive Design**: Fully responsive layout, optimized for both desktop and mobile devices.
- **TypeScript**: Strongly typed components and logic for enhanced code quality and maintainability.
- **Tailwind CSS**: Customizable and utility-first styling for fast and efficient design.
- **Next.js**: Server-side rendering (SSR) and static site generation (SSG) for optimal performance and SEO.

## Preview

Check out the live preview of the application by following this link: [https://doctrin.vercel.app](https://doctrin.vercel.app)

To access the doctor dashboard, use the following credentials:

- Email: `meshachgbewezoun@gmail.com`
- Password: `password-doctrin`

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+)
- [Pnpm](https://pnpm.io)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Meschack/figma-to-code-ed2-week4.git medical-appointment-platform

   cd medical-appointment-platform
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up environment variables:

   Create a `.env.local` file in the root of the project and add your configuration. For example:

   ```bash
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="YOUR CLERK PUBLISHABLE KEY"
   CLERK_SECRET_KEY="YOUR CLERK SECRET KEY"
   DATABASE_URL="YOUR DATABASE URL"
   DOCTOR_CLERK_ID="YOUR DOCTOR CLERK USER ID"
   ```

4. Start the development server:

   ```bash
   pnpm run dev
   ```

   The application should now be running on [http://localhost:3000](http://localhost:3000).

### Build

To create a production build:

```bash
pnpm run build
```

### Deployment

The project is ready to be deployed on platforms like Vercel, Netlify, or any server that supports Node.js.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## Acknowledgments

- [Clerk](https://clerk.dev) for user authentication and management.
- [Shadcn UI](https://ui.shadcn.com/docs) to browse reusable components.
- The open-source community for the amazing tools and libraries.
