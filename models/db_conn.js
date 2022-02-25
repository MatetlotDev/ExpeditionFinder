const mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// DB connection
export default async function dbConnect() {
    mongoose.connect(process.env.DB_URI,
        options,
        function (err) {
            console.log(err);
        }
    );
}