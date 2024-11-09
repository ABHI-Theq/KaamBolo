import User from './model/Schema.js'
import mongoose from 'mongoose'
 async function connectDB() {
    await mongoose.connect(process.env.CONN_STR, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Database connected successfully'))
    .catch((err) => console.error('Database connection error:', err));

    // Example: mongoose.connection to handle events
    mongoose.connection.on('connected', () => {
        console.log('Mongoose connected to DB');
    });

    mongoose.connection.on('error', (err) => {
        console.error('Mongoose connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose disconnected');
    });
}
  
export default connectDB
