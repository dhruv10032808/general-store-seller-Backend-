const express=require('express');
const ItemController=require('../controllers/items')
const router=express.Router();

router.use('/add-item',ItemController.postItem)
router.use('/get-item',ItemController.getItem)
router.use('/edit-item/:userId',ItemController.editItem)

module.exports=router;