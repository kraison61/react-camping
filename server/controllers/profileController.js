const renderError = require("../utils/renderError");

exports.createProfile = (req, res, next) => {
  try {
    // const { firstname, lastname, clerkid } = req.body;
    //Code Body

    if (false) {
      renderError(400, 'ไปล่ะน๊าา สู้ ๆ');
    }
    
    // console.log(firstname, lastname, clerkid);
    res.json({ message: "Hello Create ProfileController" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
