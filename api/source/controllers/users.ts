/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface User {
    userId: Number;
    id: Number;
    title: String;
    body: String;
}

// getting all posts
const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    // get some posts
    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    let users: [User] = result.data;
    return res.status(200).json({
        message: users
    });
};

// getting a single post
const getUser = async (req: Request, res: Response, next: NextFunction) => {
    // get the post id from the req
    let id: string = req.params.id;
    // get the post
    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    let user: User = result.data;
    return res.status(200).json({
        message: user
    });
};

// updating a post
const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    // get the post id from the req.params
    let id: string = req.params.id;
    // get the data from req.body
    let name: string = req.body.name ?? null;
    let userName: string = req.body.userName ?? null;
    let email: String = req.body.email ?? null;
    // update the post
    let response: AxiosResponse = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, {
        ...(name && { name }),
        ...(userName && { userName }),
        ...(email && { email })
    });
    // return response
    return res.status(200).json({
        message: response.data
    });
};

// deleting a post
const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    // get the post id from req.params
    let id: string = req.params.id;
    // delete the post
    let response: AxiosResponse = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    // return response
    return res.status(200).json({
        message: 'user deleted successfully'
    });
};

// adding a post
const addUser = async (req: Request, res: Response, next: NextFunction) => {
    // get the data from req.body
    let name: string = req.body.name;
    let userName: string = req.body.userName ?? null;
    let email: String = req.body.email ?? null;
    // add the post
    let response: AxiosResponse = await axios.post(`https://jsonplaceholder.typicode.com/users`, {
        name,
        userName,
        email
    });
    // return response
    return res.status(200).json({
        message: response.data
    });
};

export default { getUsers, getUser, updateUser, deleteUser, addUser };