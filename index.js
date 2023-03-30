const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

const app = express();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());



var cors = require('cors')
app.use(cors())


const HotelBook=require('./models/hotelbook');




app.post('/hotelbook',async(req,res)=>{
    try{
     const hotelBook= await HotelBook.create(req.body)
     res.status(200).json(hotelBook);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 
 app.get('/hotelbook',async(req,res)=>{
    try{
        const  hotelBook= await  HotelBook.find({});
        res.status(200).json( hotelBook);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get   hotel Book by id
app.get('/hotelBook/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   hotelBook = await  HotelBook.findById(id);
        res.status(200).json( hotelBook);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update hotelBook by id
app.put('/hotelbook/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   hotelBook= await  HotelBook.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!hotelBook){
            return res.status(404).json({message:`cannot find any hotel Book with ${id}`})
        }
        const updatedHotelBook = await  HotelBook.findById(id);
        res.status(200).json( updatedHotelBook);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a hotel Book
app.delete('/hotelbook/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   hotelBook = await  HotelBook.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!hotelBook){
            return res.status(404).json({message:`cannot find any hotel Book with ${id}`})
        }
        
        res.status(200).json(hotelBook);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})










mongoose.set("strictQuery", false)
mongoose.connect('mongodb+srv://admin:Sunny2798@sunnyapi.kndypoa.mongodb.net/allapiresort?retryWrites=true&w=majority')
        .then(() => {
            console.log('connected to MongoDB')
            app.listen(4000, () => {
                console.log('Node api is running on port 4000')
            })
        }).catch((error) => {
            console.log(error)
        })