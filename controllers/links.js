const links = require("../models/linkSchema")

require('dotenv').config();

const cloudinary = require('cloudinary').v2;
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME2, 
  api_key: process.env.API_KEY2, 
  api_secret: process.env.API_SECRET2,
  secure: true
});

// get all the link data
exports.linkdata = (req, res) => {
    links.find().sort({_id:-1})
    .exec((err, result) => {
        if(err){
            return res.status(500).json({
                error : err.message
            })           
        }
        return res.status(200).send(result);
    }) 
}


// delete only one item with id
exports.deletelinkdata = (req, res) => {
    links.deleteOne({_id: req.params.id})
    .exec((err, result) => {
        if(err){
            return res.status(500).json({
                error : err.message
            })           
        }
        return res.status(200).json({
            message: "Deleted Successfully"
        })
    })    
}



// add data to database
exports.addlinkdata = async (req, res) => {
    const {link, title, order, paragraph} = req.body;   

    var data
    if(!req.files){
        data = new links({
            link, title, order, paragraph
        });
    } else {
        const file = req.files.photo;
        await cloudinary.uploader.upload(file.tempFilePath, (err, result) => {  
            data = new links({
                link, title, order, paragraph, imagePath: result.secure_url
            });
        })
    } 

    if(!data){
        return res.status(500).json({
            error : "Can not add data"
        })         
    }
    data.save((err, result) => {
        if(err){
            return res.status(500).json({
                error : err.message
            })           
        }  
        return res.status(201).json({
            message : "Data added successfully"
        }) 
    })
}


// update the totalclick once every time api called
exports.updateClick = (req, res) => {
    links.findByIdAndUpdate({ _id: req.params.id},{
        $inc: {"totalclick": 1}          
    },{
        new: true
    }).exec((err, result) => {
        if(err){
            return res.status(500).json({
                error : err.message
            })           
        }
        return res.status(200).json({
            message: "Clicked"
        })
    })    
}











// exports.addlinkdata = (req, res) => {
//     const {link, title, order, paragraph} = req.body;   
    
//     if(!req.files){
//         const data = new links({
//             link, title, order, paragraph
//         });
//         data.save((err, result) => {
//             if(err){
//                 return res.status(500).json({
//                     error : err.message
//                 })           
//             }  
//             return res.status(201).json({
//                 message : "Data added successfully"
//             }) 
//         })
//     } else {
//         const file = req.files.photo;
//         cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
//             const data = new links({
//                 link, title, order, paragraph, imagePath: result.secure_url
//             });
//             data.save((err, result) => {
//                 if(err){
//                     return res.status(500).json({
//                         error : err.message
//                     })           
//                 }  
//                 return res.status(201).json({
//                     message : "Data added successfully"
//                 }) 
//             })
//         })
//     }   
// }