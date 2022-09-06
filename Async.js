

// console.log('person1:shows tivcket');
// console.log('person2:shows tivcket');
// const preMovie=async ()=>{
//     const promiseWifeBringTicket=new Promise((resolve,reject)=>{
//         setTimeout(()=>
//             resolve('ticket'),
//         3000);
// });
//     const getPopcorn=new Promise((resolve,reject)=> resolve('popcorn'));
//     const addButter=new Promise((resolve,reject)=>resolve('Butter'));
//     const getColdDrnks=new Promise((resolve,reject)=>resolve("Soda"));

//     let tickets=await promiseWifeBringTicket;
//     console.log(`wife:I have the ${tickets}`);
//     console.log('husband:We should go in');
//     console.log('wife:No iam hungry');
//     let popcorn=await getPopcorn;
//     console.log(`husband:I got the ${popcorn}`);
//     console.log('husband:We should go in');
//     console.log('wife:No i need butter on top');
//     let butter=await addButter;
//     console.log(`husband:I got the ${butter} on top`);
//     console.log('husband:We should go in');
//     console.log('wife:No i also need drink with popcorn');
//     let drinks=await getColdDrnks;
//     console.log(`husband:I got  ${drinks} for us both`);
//     console.log('husband:We should go in, we are getting late');
//     console.log('wife:Yes! of course');
//     return tickets

// }
// preMovie().then((m)=>console.log(`person3:shows ${m}`));
// console.log('person4:shows tivcket');
// console.log('person5:shows tivcket');

const posts=[
    {title:'Post One',body:'This is post one',createdAt:new Date().getTime()},
    {title:'Post two',body:'This is post two',createdAt:new Date().getTime()},
    {title:'Post three',body:'This is post three',createdAt:new Date().getTime()},
];
 const printPosts=async ()=>{
    const getPost=new Promise((resolve,reject)=>{
            setTimeout(() =>{
                let output='';
                posts.forEach((post,index) => {
                    output +=`<li>${post.title} created ${(new Date().getTime()-post.createdAt)/1000} seconds ago</li>`
                });
                document.body.innerHTML=output;
            },1000);
        });

         function creatPost(post){
            new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    posts.push({...post,createdAt:new Date().getTime()});
                    resolve();
                },6000);
            });
        };
            const delPost=new Promise((resolve,reject)=>{                
                    setTimeout(()=>{
                        posts.pop();                          
                        if(posts.length!=0){
                            resolve();
                            // updateLastUserActivityTime();
                        }
                        else{
                            reject("Array is empty")
                        }                               
                    },1000);
                }); 

       
        const ordering=()=>{
            

        };
        await getPost;
        await creatPost({title:'Post four',body:'This is post four'});
        await delPost;
        let running=ordering();
        return running;
    
 };
 printPosts()