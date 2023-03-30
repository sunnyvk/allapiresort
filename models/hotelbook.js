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
                title: {
                    type: Array,
                
                },
                roomcapacity: [
                    {
                        max: {
                            type: String,
                        
                        },
                        min: {
                            type: String,
                    
                        },

                    }
                ],
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
                  
                }
            }
        ]

    },
)

const HotelBook = mongoose.model('HotelBook', hotelbookSchema);


module.exports = HotelBook;