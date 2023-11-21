import mongoose from "mongoose";



const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB Connected");
    } catch (error) {
        console.log("DB Connection Error", error);
    }
};

export default dbConnection;