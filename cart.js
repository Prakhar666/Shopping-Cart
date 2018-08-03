var fruits= [
    { name: "mango",
      category: "fruits",
      price: "50",
      quant: "0"
    },

    { name: "grapes",
      category: "fruits",
      price: "40",
      quant: "0"
    },

    { name: "pineapple",
      category: "fruits",
      price: "40",
      quant: "0"
      },

      { name: "apple",
        category: "fruits",
        price: "100",
        quant: "0"
      },

      { name: "banana",
        category: "fruits",
        price: "30",
        quant: "0"
      },

      { name: "lychee",
        category: "fruits",
        price: "50",
        quant: "0"
      },

      { name: "strawberry",
        category: "fruits",
        price: "70",
        quant: "0"
      },

      { name: "blueberry",
        category: "fruits",
        price: "130",
        quant: "0"
      },

      { name: "avocado",
        category: "fruits",
        price: "60",
        quant: "0"
      },

      { name: "watermelon",
        category: "fruits",
        price: "60",
        quant: "0"
      }
    ]

var vegetables=[

      { name: "pumpkin",
        category: "vegetables",
        price: "50",
        quant: "0"
      },
      
      { name: "onion", 
        category: "vegetables",
        price: "30",
        quant: "0"
      },
      
      { name: "potato",
        category: "vegetables",
        price: "34",
        quant: "0" 
      },
       
      { name: "tomato",
        category: "vegetables",
        price: "40",
        quant: "0"
      },
      
      { name: 'cauliflower',
        category: "vegetables",
        price: "50",
        quant: "0"
      },
      
      { name: "palak",
        category: "vegetables",
        price: "22",
        quant: "0"
      },
      
      { name: "lemon",
        category: "vegetables",
        price: "40",
        quant: "0"
      },
      
      { name: "capsicum",
        category: "vegetables",
        price: "66",
        quant: "0"
      },
      
      { name: "carrot",
      category: "vegetables",
      price: "20",
      quant: "0"
      },
      
      { name: "mushroom",
      category: "vegetables",
      price: "60",
      quant: "0"
      },
      
      { name: "ginger",
      category: "vegetables",
      price: "80",
      quant: "0"
      }
    ]

var biscuits=[
      { name: "parle g",
      category: "biscuits",
      price: "20",
      quant: "0"
      },

      { name: "bournbon",
      category: "biscuits",
      price: "30",
      quant: "0"
      },
      { name: "marie gold",
      category: "biscuits",
      price: "20",
      quant: "0"
      },

      { name: "nutri choice",
      category: "biscuits",
      price: "80",
      quant: "0"
      },

      { name: "monaco",
      category: "biscuits",
      price: "10",
      quant: "0"
      },

      { name: "maska chaska",
      category: "biscuits",
      price: "20",
      quant: "0"
      },

      { name: "good day",
      category: "biscuits",
      price: "30",
      quant: "0"
      },

      { name: "nice time",
      category: "biscuits",
      price: "5",
      quant: "0"
      },

      { name: "oreo",
      category: "biscuits",
      price: "40",
      quant: "0"
      },

      { name: "milk rusk",
      category: "biscuits",
      price: "20",
      quant: "0"
      }
    ]

var dairy=[
      { name: "pizza cheese",
      category: "dairy",
      price: "78",
      quant: "0"
      },
      
      { name: "buttermilk",
      category: "dairy",
      price: "35",
      quant: "0"
      },

      { name: "milkmade",
      category: "dairy",
      price: "120",
      quant: "0"
      },

      { name: "cheese",
      category: "dairy",
      price: "112",
      quant: "0"
      },

      { name: "cream",
      category: "dairy",
      price: "65",
      quant: "0"
      },

      { name: "paneer",
      category: "dairy",
      price: "67",
      quant: "0"
      },

      { name: "butter",
      category: "dairy",
      price: "30",
      quant: "0"
      },

      { name: "mishti doi",
      category: "dairy",
      price: "20",
      quant: "0"
      },

      { name: "curd",
      category: "dairy",
      price: "20",
      quant: "0"
      },

      { name: "chach",
        category: "dairy",
        price: "12",
        quant: "0"
      },
    ]

    var combine=fruits.concat(vegetables);
    var combine1=combine.concat(biscuits);
    var combine2=combine1.concat(dairy);

    function Search()
    {
      var getVal=document.getElementById('search').value;
      var reg = new RegExp(getVal, "i");
      // var getData="";
      var getData="<table border=1><tr><th>Name</th><th>Category</th><th>MRP</th><th>Quantity</th></tr>";
      //var mycart = "<tr><td>Name</td><td>Quantity</td><tr>"
      for(var i=0;i<combine2.length;i++)
      {
        var elements=combine2[i].name;
        var result=reg.test(elements);
        console.log(result);
        if(result)
        {
          getData+="<tr><td>"+combine2[i].name+"</td> <td>"+combine2[i].category+"</td><td> "+combine2[i].price+"</td> <td><input type='number' name='number' id='"+combine2[i].name+"'></td></tr>";
        }
      }  

      getData+="</table>"
      document.getElementById("store").innerHTML = getData;
    }
    
    function Reset()
    {
        document.getElementById('search').value="";
        document.getElementById('store').innerHTML="";
        for(let i=0; i<combine2.length; i++)
        {
            combine2[i].quant=0;
        }
    }
    
    bill=0;
    var detail="<table>";
     // products="";
     
    function Add()
    {   
        
      products="<table><tr><th>Name</th><th>Quantity</th></tr>";
        for(let k=0; k<combine2.length; k++)
        {
          if(document.getElementById(combine2[k].name)!=null)
          {
          combine2[k].quant=document.getElementById(combine2[k].name).value;
              if(combine2[k].quant>0)
              {
                products+="<tr><td>"+combine2[k].name+"</td><td>"+combine2[k].quant+"</td></tr>";
                bill+= combine2[k].price*combine2[k].quant;
                detail+= "<tr><td>"+combine2[k].name+"</td><td>"+combine2[k].quant+"</td></tr>"+combine2[k].price+"</td></tr>"+bill+"</td></tr>";
              }
          }
        }
        products+="</table>";
        detail+="</table>";
        document.getElementById("product").innerHTML=products;
    }

    function Checkout()
    { 
      var total;
      localStorage.setItem("fprice",detail);
      localStorage.setItem("result",products);
      localStorage.setItem("total",bill);
    }
