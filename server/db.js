import { connect } from 'mongoose';
const mongoURI = process.env.MONGOURI;
const connectToMongo = async () => {
    await connect(mongoURI);
}
export default connectToMongo;