var category = require('../model/categorymodel');

exports.Add_Category = async (req,res) =>{
    // var img = req.file.originalname;
    // req.body.cat_image = img;
    var data = await category.create(req.body)
    res.status(200).json({data})
}
exports.View_Category = async (req,res) => {
    if(!req.params.id){
        var data = await category.find();
    }else{
        var data = await category.findById(req.params.id)
    }
    res.status(300).json({data})
}