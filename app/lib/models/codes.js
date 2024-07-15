import { Schema, model,models } from "mongoose";


const UserSchema = new Schema({
    link: { type: String },
    date: { type: Date, required: true }, 
    difficulty: { type: String, required: true }, 
    topics: { type: [String], required: true }, 
}, {
    timestamps: true,
});


const Code=models.Code || model("Code",UserSchema)

export default Code; 
