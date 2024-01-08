import mongoose from "mongoose";

const conn = () => {
    mongoose.connect(process.env.DB_URI, {
        dbName: "bahadirakkasdb",
        //useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connect to the DB successfully");
    })
    .catch((err) => {
        console.log('DB connection error:', err);
    });
};

export default conn;
