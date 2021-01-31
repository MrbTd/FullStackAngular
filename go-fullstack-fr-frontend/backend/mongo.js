const mongoose=require('mongoose')


if(process.argv.length <3 ){
    console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const url='mongodb+srv://MrbTd:'+password+'@cluster0.erpt2.mongodb.net/data-thing?retryWrites=true&w=majority'

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
mongoose.connection.on("suced",()=>{console.log("Running !!!")})


const thingSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    userId: { type: String, required: true },
    price: { type: Number, required: true },
});
const Thing =mongoose.model('Thing',thingSchema)

if(process.argv.length===3)
{
    Person.find({}).then(result => {
        result.forEach(resulta => {
          console.log(resulta)
        })
        mongoose.connection.close()
      })
   
}
else
{
    const thing = new Thing({
        title: process.argv[3],
    description: process.argv[4],
    imageUrl:  process.argv[5],
    userId:  process.argv[6],
    price:  process.argv[7]
      });
  
      thing.save().then(result => {
        console.log('added ',title," ",description)
        mongoose.connection.close()
      })
     
}