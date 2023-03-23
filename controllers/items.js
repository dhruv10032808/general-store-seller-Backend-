const Item=require('../models/item');

exports.postItem=(req,res,next)=>{
    console.log(req.body);
    Item.create({
        price:req.body.price,
        dish:req.body.dish,
        tables:req.body.tables,
    }).then(result=>{
        res.status(201).json({newItemDetail:result})
    })
    .catch(err=>console.log(err))
}

exports.getItem=(req,res,next)=>{
    Item.findAll().then(result=>{
        res.status(201).json({newItemDetail:result})
    })
    .catch(err=>console.log(err))
}

exports.deleteItem=(req,res,next)=>{
    const userId=req.params.userId;
    Item.destroy({where:{id:userId}})
    .then(result=>{
        
        res.status(201).json({newItemDetail:result})
    })
    .catch(err=>console.log(err));
}