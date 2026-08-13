import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "dns";

dotenv.config({ quiet: true });

// if (process.env.NODE_ENV === "development") {
//   dns.setServers(["8.8.8.8", "8.8.4.4"]);
// }


export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  } 
};

