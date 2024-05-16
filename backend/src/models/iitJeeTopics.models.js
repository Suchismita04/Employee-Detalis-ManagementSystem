import { Schema, model } from 'mongoose';


const topicSchema = new Schema({
  names:{type:String, default:"iitjee"} ,
   topics:[
    {
      name:{type:String, default:'Physics'},
      courses:['Optics','Rotational Motion','Laws & Motion']

    },
    {name: {type:String, default:'Chemistry'},
    courses:['Polymers','Hydrogen','P Block Element']

    },
    {
      name:{type:String, default:'Mathematics'},
      courses:['Calculas','Algebra','Trigonometry']
    }
  ]
},


);



const Topic = model('Topic', topicSchema);
export { Topic };



