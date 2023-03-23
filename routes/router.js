const express=require('express');
const ItemController=require('../controllers/items')
const router=express.Router();

router.use('/add-item',ItemController.postItem)
router.use('/get-item',ItemController.getItem)
router.use('/delete-item/:userId',ItemController.deleteItem)

module.exports=router;