const Item=require('../models/item');

exports.postItem=(req,res,next)=>{
    console.log(req.body);
    Item.create({
        item:req.body.item,
        description:req.body.description,
        price:req.body.price,
        quantity:req.body.quantity,
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

exports.editItem=(req,res,next)=>{
    const userId=req.params.userId;
    Item.destroy({where:{id:userId}}).then(()=>{
        if(req.body.quantity<=0){
            return Item.create({
            item:req.body.item,
            description:req.body.description,
            price:req.body.price,
            quantity:0
            })
        }
        return Item.create({
        item:req.body.item,
        description:req.body.description,
        price:req.body.price,
        quantity:req.body.quantity
        })
    })
    .then(result=>{
        res.status(201).json({newItemDetail:result})
    })
    .catch(err=>console.log(err));
}