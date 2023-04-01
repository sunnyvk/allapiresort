const mongoose = require('mongoose')

const hotelbookSchema = mongoose.Schema(
    {
        imgurl: {
            type: String,

        },
        title: {
            type: String,
        
        },
        content: {
            type: String,

        },
        bookingurl: {
            type: String,

        },
        availableroom: [
            {
                imgurl: {
                    type: String,
            
                },
                title2: {
                    type: String,
                
                },
                roomcapacity: 
                    {
                        max: {
                            type: String,
                        
                        },
                        min: {
                            type: String,
                    
                        }
                    },
                
                perRoom: {
                    type: String,
                   
                },
                adults: {
                    type: String,
                 
                },
                chlidren: {
                    type: String,
               
                },
                room: {
                    type: String,
                  
                },
                leftroom: {
                    type: String,
                    
                },
                perRoomPerWithBreakFast: {
                    type: String,
                  
                },
                nonCancel:{
                    type: String,
            
                },
                Guest_Reviews:{
                    type: String,
            
                },
                Room_Amenities:{
                    type: String,
            
                },
                Wardrobe:{
                    type: String,
            
                },
                Bedside_Table:{
                    type: String,
            
                },
                Fan:{
                    type: String,
            
                },
                Balcony:{
                    type: String,
            
                },
                House_Keeping:{
                    type: String,
            
                },
                Room_Rate:{
                    type: String,
            
                },
                pernightroom:{
                    type: String,
            
                }
            }
        ]

    },
)

const HotelBook = mongoose.model('HotelBook', hotelbookSchema);


module.exports = HotelBook;
