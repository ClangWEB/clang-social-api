const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const userSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: [true, "First Name is required"],
        trim: true,
        text: true,
    },
    last_name: {
        type: String,
        required: [true, "Last Name is required"],
        trim: true,
        text: true,
    },
    username: {
        type: String,
        required: [true, "Username is required"],
        trim: true,
        text: true,
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    picture: {
        type: String,
        default: "https://res.cloudinary.com/diqbu4moc/image/upload/v1671131824/Clang-Social/default_pic_xh1ebl.png",
        trim: true,
    },
    cover: {
        type: String,
        trim: true,
    },
    gender: {
        type: String,
        required: [true, "Gender is required"],
        trim: true,
    },
    bYear: {
        type: Number,
        required: true,
        // required: [true, "Birth Year is required"],
        trim: true,
    },
    bMonth: {
        type: Number,
        required: true,
        // required: [true, "Birth Month is required"],
        trim: true,
    },
    bDay: {
        type: Number,
        required: true,
        // required: [true, "Birth Date is required"],
        trim: true,
    },
    verified: {
        type: Boolean,
        default: false,
    },
    friends: [{
        type: ObjectId,
        ref: "User",
    }],
    following: [{
        type: ObjectId,
        ref: "User",
    }],
    followers: [{
        type: ObjectId,
        ref: "User",
    }],
    requests: [{
        type: ObjectId,
        ref: "User",
    }],
    search: [
        {
            user: {
                type: ObjectId,
                ref: "User",
                required: true,
            },
            createdAt: {
                type: Date,
                required: true,
            },
        },
    ],
    details: {
        bio: {
            type: String,
        },
        otherName: {
            type: String,
        },
        // hobby: {
        //     type:String
        // },
        job: {
            type: String,
        },
        workPlace: {
            type: String,
        },
        highSchool: {
            type: String,
        },
        college: {
            type: String,
        },
        currentCity: {
            type: String,
        },
        hometown: {
            type: String,
        },
        relationship: {
            type: String,
            enum: ["Single", "In a Relationship", "Married", "Divorced", ""],
        },
        instagram: {
            type: String,
        },
        otherLinks: {
            type: String,
        }
    },
    savedPosts: [
        {
            post: {
                type: ObjectId,
                ref: "Post",
            },
            savedAt: {
                type: Date,
                required: true,
            },
        },
    ],
},
    {
        timestamps: true,
    }
);
module.exports = mongoose.model("User", userSchema);