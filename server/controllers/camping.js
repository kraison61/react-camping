exports.listCamping = (req, res) => {
  try {
    // code body
    console.log("Hello Controller");
    // console.log(ounDev)
    res.send("Hello Controllers");
  } catch (error) {
    console.log(error.message)
    res.status(500).json({message:'Server Error'})
  }
};

exports.readCamping = (req, res) => {
  try {
    
    res.send('Hello READ Detail')
  } catch (error) {
    console.log(error.message)
    res.status(500).json({message:'Server Error'})
  }
};

exports.createCamping = (req,res) =>{
    try {
        res.send("Create Camping")
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:"Server Error"})
    }
}

exports.updateCamping = (req,res) => {
    try {
        res.send('Update Camping')
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:'Server Error'})
    }
}

exports.deleteCamping =(req,res) => {
    try {
        res.send('Delete Camping')
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:'Server Error'})
    }
}

