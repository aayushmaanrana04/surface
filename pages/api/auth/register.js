import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
import connection from './../../../database/connection'
import User from './../../../database/userSchema'

export default function register(req,res){
    connection();
    if(req.method==='POST'){
        const details=req.body;

        User.findOne({email:details.email},(err,docs)=>{
            if(docs!==null) res.status(409).json({})
            else{
                const hash=bcrypt.hashSync(details.password,10);
                User.create({email:details.email,password:hash})
                .then(result => res.status(201).json(result))
            }
        })

    }
}