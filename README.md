# Real-Time Chat App

This is a real-time chat application built using the MERN stack along with Socket.io for real-time communication. The frontend is styled using TailwindCSS and DaisyUI. The app supports authentication and authorization using JWT, online user status, global state management, and media upload via Cloudinary.

## Features

- **Tech Stack**: MERN (MongoDB, Express, React, Node.js), Socket.io, TailwindCSS, DaisyUI  
- Authentication and Authorization with JWT  
- Real-time messaging with Socket.io  
- Online user status tracking  
- Global state management using Zustand  
- Client-side and server-side error handling  
- Free deployment setup instructions included  


## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/chatapp.git
cd chatapp
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory and add:

<details>
<summary>.env example</summary>

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5001
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret

NODE_ENV=development
```
</details>

### 3. Install Dependencies

```bash
# For backend
cd server
npm install

# For frontend
cd ../client
npm install
```

### 4. Run the Application

```bash
# In the /server directory
npm run dev

# In the /client directory
npm start
```

### 5. Access the App

```text
After starting both server and client:

🔗 Open your browser and navigate to:
http://localhost:[your-client-port]

💡 Default React port is usually http://localhost:3000
```

### 6. Notes

```text
- Ensure MongoDB is running locally or via MongoDB Atlas
- Cloudinary credentials are required for media upload
- JWT_SECRET must be strong and unique
- Server and client should run on different ports (e.g., 5001 and 3000)
```
