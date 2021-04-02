const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Enter Product Name'],
        trim: true,
        maxLength: [100, 'Product Name Can not exced 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please Enter product price'],
        maxLength: [5, 'product price can not exced 5 character'],
        default: 0.0
    },
    desctription: {
        type: String,
        required: [true, 'Please Enter Product description'],
    },
    ratings:{
        type: Number,
        default: 0
    },
    images: [
        {
            title: {type:String},
            url: {type:String}
        }
    ],
    category: {
        type: String,
        required: [true, 'Please select category for this product'],
        enum: {
            values: [
                'Electronics',
                'Cameras',
                'Laptops',
                'Accessories',
                'Headphones',
                'Food',
                'Sports',
                'Home'
            ],
            message: 'Please select category for products'
        }
    },
    seller: {
        type: String,
        required: [true, 'Please enter product seller']
    },
    stock: {
        type: Number,
        required: [true, 'Please Enter product stocks'],
        maxLength: [5, 'Product stock value can not exced 5 character'],
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Product', productSchema);