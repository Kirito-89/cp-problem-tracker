import mongoose from 'mongoose';
const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
    try {
        const connectionState = mongoose.connection.readyState;

        if (connectionState === 1) {
            console.log('Already connected');
            return;
        }

        if (connectionState === 2) {
            console.log('connecting....');
            return;
        }

        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true, 
            bufferCommands: true
        });
        console.log('Connected');

    } catch (err) {
        console.log("Error:",err);
        throw new Error(err);
    }
};

export default connect;
