/*
import mongoose from "mongoose"

// dlta mini model jorao zaka da ba orderItems ke wachao de mini model ke ba producrId aw quantity rashe

const orderItemsSchema = new mongoose.Schema({

    user: {
        type : String ,
        required: true
    },

    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
})    





const orderSchema = new mongoose.Schema({

        orderItem: {
            // os ba dlta mini model variable pasdte ko
            type: [orderItemsSchema]
        },
        orderStatus: {
            type: String,
            // dlta enum use kao enum enumeration de matlb "choices"
            enum: ["PENDING", "CANCELED", "DELIVERED"],
            default: "PENDING"
        },
        address: {
            type: String,
            required: true
        },
        

}, {timestamps: true})

export const Order = mongoose.model("Order", orderSchema)
*/
// ----------------------------------------------------------------------


/*
import mongoose from "mongoose";

// Define the orderItemsSchema (mini model for order items)
const orderItemsSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

// Define the updated orderSchema
const orderSchema = new mongoose.Schema({
    user: {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User", // Reference to the User model
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        }
    },
    products: {
        type: [orderItemsSchema], // Array of order items (cart)
        required: true
    },
    orderStatus: {
        type: String,
        enum: ["PENDING", "CANCELED", "DELIVERED"],
        default: "PENDING"
    },
    address: {
        type: String,
        required: true
    }
}, { timestamps: true });

// Create and export the Order model
export const Order = mongoose.model("Order", orderSchema);
*/

// --------------------------------------------------------

import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user: {
     
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      zipcode: {
        type: Number,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    orderStatus: {
      type: String,
      enum: ["PENDING", "CANCELED", "DELIVERED"],
      default: "PENDING",
    },
  }, { timestamps: true });
  export const Order = mongoose.model("Order", orderSchema);