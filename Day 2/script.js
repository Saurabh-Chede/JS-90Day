// const success = false;
// const promise = new Promise((resolve, reject) => {
//     if (success) {
//         resolve("done");
//         console.log("hero");
//     } else {
//         reject("fail");
//         console.log("ggjs");
//     }
// });

// promise
// .then((result) =>{
//     console.log('suceess',result);
// })
// .catch((err) =>{
//     console.log('failed',err);
    
// })

function orderPizza() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const isDelivered = 0
            if(isDelivered){
                resolve("🍕 Pizza delivered!")
            }
            else{
                reject("❌ Pizza delivery failed.")
            }
        },4000)
    })
}

async function eatDinner () {
    console.log('waiting...');

    try{
        const pizza = await orderPizza()
        console.log(pizza);
        console.log('Eating pizza');
        
    }
    catch(err){
        console.log(err);
        console.log('feeling hungry');
        
        
    }
    
}

// eatDinner()

async function getUser () {
    console.log('waiting...');

    try{
        const pizza = await fetch("https://jsonplaceholder.typicode.com/users/1")
        const data = await pizza.json()
        console.log(data);
        
    }
    catch(err){
        console.log(err);
        console.log('arey kidhar hai data',err);
        
        
    }
    
}

// getUser()

 function renderingUI () {
    const dataCollection = setTimeout(()=>{

        const nameData = {
            user:'SAURABH',
            age : 27
        }

        const result = console.log(nameData.age);
        console.log(nameData);
        console.table(nameData)
        
        

    },5000)
}

// renderingUI()

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  console.log("✅ Full User Data:");
  console.table(data); // shows array of objects as table

  console.log("📌 Specific Columns:");
  console.table(data.map((user) => ({
    ID: user.id,
    Name: user.name,
    Email: user.email,
    City: user.address.city
  })));
}

// fetchUsers();





