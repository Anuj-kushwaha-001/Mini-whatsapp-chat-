const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(() => {console.log("connection successful");

})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

let allChats = [
    {
    from: "neha",
    to: "priya",
    msg:"send me your exam sheets",
    created_at : new Date(),
    },
    {
        from: "rohit",
        to: "manju",
        msg:"please teach me database",
        created_at : new Date(),
        },
        {
            from: "ravi",
            to: "shivam",
            msg:"is your sbi po is clear",
            created_at : new Date(),
            },
            {
                from: "muskan ",
                to: "diksha",
                msg:"how is your village looks ",
                created_at : new Date(),
                },
                {
                    from: "pintu",
                    to: "anuj",
                    msg:"all the best for your exam !",
                    created_at : new Date(),
                    },
                    {
                        from: "akash",
                        to: "anuj",
                        msg:"please be concentrate on goal.",
                        created_at : new Date(),
                        },
]



Chat.insertMany(allChats);

