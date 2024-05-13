var product = require('../model/prodcutmodel');

exports.Add_Product = async (req,res) => {

    // var image = await req.file.originalname;
    // req.body.thumbnail = image;

    // var img = await req.files.length;
    // var images = "";
    // for(var ind=0; ind<img; ind++)
    // {
    //     var images = images+','+req.files[ind].originalname;
    // }
    // req.body.thumbnail = req.files[0].originalname;
    // req.body.images=images
    
    var data = await product.create(req.body);
    if(data!=null)
    {
        res.redirect('/admin/addproduct');
    }
}

exports.View_Product = async (req,res) => {
    if(!req.params.id){
        var data = await product.find();
    }else{
        var data = await product.findById(req.params.id);
    }
    res.status(300).json({data})
}
