import mongoose from "mongoose";

const connectDB = async () => {
	try {
		const conn = await mongoose.connect("mongodb+srv://wasifhussain787:wasifhussain787@cluster0.bdw80hd.mongodb.net/threads?retryWrites=true&w=majority");
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		console.log(error)
		process.exit(1);
	}
};

export default connectDB;
