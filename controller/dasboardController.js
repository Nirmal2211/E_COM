
exports.Index = async (req, res) => {
    res.render('dasboard')
}

exports.Simpal_table = async (req, res) => {
    res.render('categorytable')
}

exports.Addcategory = async (req, res) => {
    res.render('addcategory')
}

exports.AddProduct = async (req, res) => {
    res.render('addproduct')
}

exports.Calendar = async (req,res) => {
    res.render('calendar')
}