import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
import connection from './../../../database/connection'
import User from './../../../database/userSchema'

export default function login(req,res){
    connection();
    if(req.method==='POST'){
        const details=req.body;
        User.findOne({email:details.email},(err,docs)=>{
            if(docs===null) res.status(200).json({})
            else{
                const pass=bcrypt.compareSync(details.password,docs.password);
                if(pass===true) res.status(200).json(docs)
                else res.status(200).json({})
            }
        })
    }
}