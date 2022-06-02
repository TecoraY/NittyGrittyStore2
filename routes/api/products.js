const express =require ('express');
const router = express.Router();
//database of products to export

const products=[
    {name: "Knit Dress", img:"https://img.shopstyle-cdn.com/sim/22/ab/22ab57d8fb2d5a3b0c5e05649cbc35bd_best/demi-crochet-dress.jpg"},
    {name: "Knit Set", img: "https://i.pinimg.com/originals/97/54/aa/9754aa54891927dba0e7d436d4aa7052.jpg"},
    {name: "Knit Crop Top", img: "https://i.pinimg.com/736x/21/1b/d1/211bd10c92b436686df2582c63507dc8.jpg"},
    {name: "Baby Fox", img: "https://dabblesandbabbles.com/wp-content/uploads/2019/06/Pocket-Fox.jpg"},
    {name: "Knit Vehicle", img: "https://crochet-news.com/wp-content/uploads/2021/05/happy-little-car-truck-and-plane-crochet-pattern.jpg"},
    {name: "Knit Turtle", img: "https://crochet-news.com/wp-content/uploads/2021/05/crochet-turtle-toy-pattern.jpg"},
    {name: "HoneyComb Blanket", img: "https://www.stylecraft-yarns.co.uk/Content/Images/Patterns/Bellissima%20DK/9614-1_zoom.jpg"},
    {name: "Knit Wall Art", img: "https://5.imimg.com/data5/BB/WG/SW/SELLER-13179332/draped-knee-length-skirt-500x500.jpg"},
    {name: "Round Knit Pillow", img: "https://www.whistleandivy.com/wp-content/uploads/2019/01/superchunkycrochetpillowfreecrochetpattern19-600x900.jpg"}
]
//@route  GET api/products
//@desc   Test route. will be a get request
router.get('/', (request, response) => response.send('Product route'));

module.exports= router;