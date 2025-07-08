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
            const isDelivered = true
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

eatDinner()


