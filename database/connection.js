import mongoose from "mongoose";

const connection = () => {
  mongoose.connect("mongodb+srv://anant0070:6399anant@cluster0.o49lghj.mongodb.net/?retryWrites=true&w=majority");
};

export default connection;
