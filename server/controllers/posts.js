import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPost = async (req,res) => {
    try {
        const postMessage = await PostMessage.find();
        console.log(postMessage);
        res.status(200).json(postMessage);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

export const createPost =async (req,res) => {
    const post = req.body; //with post request we got the body contains the info to add....
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}

export const updatePost = async(req, res) => {
    const { id:_id } = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("No Post with that Id");
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(_id,{ ...post, _id},{new:true});
    res.json(updatedPost);
}