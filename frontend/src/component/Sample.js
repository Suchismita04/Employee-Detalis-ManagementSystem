



export default function GetData(){
const goals = [{
    names: "iitjee",
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
  {
  names: "gre",
    topics:[
      {
        name:'Physics',
        courses:['Optics','Rotational Motion','Laws & Motion']
  
      },
      {name:'Chemistry',
      courses:['Polymers','Hydrogen','P Block Element']
  
      },
      {
        name:'Mathematics',
        courses:['Calculas','Algebra','Trigonometry']
      }
    ]
  },
  {
    names: "neet",
      topics:[
        {
          name:'Physics',
          courses:['Optics','Rotational Motion','Laws & Motion']
    
        },
        {name:'Chemistry',
        courses:['Polymers','Hydrogen','P Block Element']
    
        },
        {
          name:'Mathematics',
          courses:['Calculas','Algebra','Trigonometry']
        }
      ]
    },
    {
      names: "jeemat",
        topics:[
          {
            name:'Physics',
            courses:['Optics','Rotational Motion','Laws & Motion']
      
          },
          {name:'Chemistry',
          courses:['Polymers','Hydrogen','P Block Element']
      
          },
          {
            name:'Mathematics',
            courses:['Calculas','Algebra','Trigonometry']
          }
        ]
      },]}