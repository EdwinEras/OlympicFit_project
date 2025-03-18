const mongoose = require("mongoose");

const Schema = mongoose.Schema;
 
// MongoDB Connection

mongoose.connect("mongodb+srv://<username>:<password>0.0qju8.mongodb.net/olympicgym?retryWrites=true&w=majority&appName=Cluster0", {

    useNewUrlParser: true,

    useUnifiedTopology: true

})

.then(() => console.log("MongoDB Connected..."))

.catch(err => console.error("MongoDB Connection Failed:", err));

/**

* =====================================

* Membership Plan Schema

* Created: Feb 21, 2025

* Description: Stores details of membership plans.

* =====================================

*/

const MembershipPlanSchema = new Schema({

    plan_name: String, // Name of the membership plan

    plan_code: { type: String, unique: true, required: true }, // Unique plan code (Required)

    package_price: Number, // Price of the plan

    duration: Number, // Duration of the plan (e.g., in months)

    status: Boolean // Plan status (active/inactive)

});

const MembershipPlan = mongoose.model("MembershipPlan", MembershipPlanSchema);
 
/**

* =====================================

* Media Schema

* Created: Feb 21, 2025

* Description: Stores uploaded media files with promotions.

* =====================================

*/

const MediaSchema = new Schema({

    media_code: { type: String, unique: true, required: true },

    media_path: { type: String, required: true }, // File path of the media (Required)

    uploaded_at: { type: Date, default: Date.now }, // Auto-generated timestamp for uploads

    description: String // Description of the media

});

const Media = mongoose.model("Media", MediaSchema);
 
/**

* =====================================

* User Schema

* Created: Feb 21, 2025

* Description: Stores user profile information.

* =====================================

*/

const UserSchema = new Schema({

    first_name: String, // User's first name

    last_name: String, // User's last name

    date_of_birth: Date, // Date of birth

    email: { type: String, unique: true }, // Unique email for the user

    phone_number: String, // Phone number

    username: { type: String, unique: true }, // Unique username

    password_hash: String, // Encrypted password

    gender: String, // User gender

    last_updated_date: { type: Date, default: Date.now }, // Auto-updated timestamp
 
    // User's membership details

    memberships: {

        start_date: Date, // Membership start date

        end_date: Date, // Membership end date

        plan_code: { type: mongoose.Schema.Types.ObjectId, ref: "MembershipPlan" }, // Linked to MembershipPlan

        status: Boolean, // Membership active/inactive

        renewal_date: Date // Next renewal date

    },
 
    // Media files associated with the user

    media: [{ type: mongoose.Schema.Types.ObjectId, ref: "Media" }],
 
    // Employee-related details

    employee: {

        years_experience: Number, // Years of experience

        specialization: String, // Specialization field

        type: String, // Employment type (e.g., full-time, part-time)

        employment_status: String // Current employment status

    },

    // Promotions applied to the user

    promotions: [{

        promotion_code: String, // Promotion code

        discount_value: Number // Discount amount

    }],

});

const User = mongoose.model("User", UserSchema);
 
/**

* =====================================

* Review Schema

* Created: Feb 21, 2025

* Description: Stores user reviews for schedules.

* =====================================

*/

const ReviewSchema = new Schema({

    user_id: { type: Schema.Types.ObjectId, ref: "User" }, // Reference to the User model

    schedule_id: [{ type: Schema.Types.ObjectId, ref: "Schedule" }], // Linked schedules

    rating: Number, // Rating given by user

    feedback: String, // User feedback

    created_at: { type: Date, default: Date.now } // Auto-generated timestamp

});

const Review = mongoose.model("Review", ReviewSchema);
 
/**

* =====================================

* FAQ Schema

* Created: Feb 21, 2025

* Description: Stores frequently asked questions by users.

* =====================================

*/

const FAQSchema = new Schema({

    user_id: { type: Schema.Types.ObjectId, ref: "User", required: false }, // Optional user reference

    ques_code: { type: String, unique: true, required: true }, // Unique question code (Required)

    ques_text: { type: String, required: true }, // Question text (Required)

    answer_text: { type: String, required: true }, // Answer text (Required)

    created_at: { type: Date, default: Date.now } // Auto-generated timestamp

});

const FAQ = mongoose.model("FAQ", FAQSchema);
 
/**

* =====================================

* Class Schema

* Created: Feb 21, 2025

* Description: Stores information about different classes.

* =====================================

*/

const ClassSchema = new Schema({

    class_name: String, // Name of the class

    class_code: { type: String, unique: true }, // Unique class identifier

    category: String, // Category of the class

    capacity: Number, // Maximum capacity of students

    difficulty_level: String, // Class difficulty level

    description: String, // Description of the class

    is_active: Boolean, // Class status (active/inactive)

    // Class schedule details

    schedule: {

        start_time: String, // Class start time

        end_time: String, // Class end time

        location: String, // Class location

    },

    // Associated media files

    media_code: [{ type: mongoose.Schema.Types.ObjectId, ref: "Media" }]

});

const Class = mongoose.model("Class", ClassSchema);
 
//  Export All Models for Use in Other Parts of the App

module.exports = { User, MembershipPlan, Media, Class, FAQ, Review };

 