

const posts=[
    {title:'Post One',body:'This is post one',createdAt:new Date().getTime()},
    {title:'Post two',body:'This is post two',createdAt:new Date().getTime()},
    {title:'Post three',body:'This is post three',createdAt:new Date().getTime()},
];
let timeInterval;
function getPost(){
    clearInterval=timeInterval;
    return new Promise(()=>{
        timeInterval=setInterval(() =>{
            let output='';
            posts.forEach((post,index) => {
                output +=`<li>${post.title} created ${(new Date().getTime()-post.createdAt)/1000} seconds ago</li>`
            });
            document.body.innerHTML=output;
        },1000);
    });
}
// function creatPost(post,callback){
//     setTimeout(()=>{
//         posts.push({...post,createdAt:new Date().getTime()});
//         callback();
//     },2000);
// }
// function creat4thPost(post,callback){
//     setTimeout(()=>{
//         posts.push({...post,createdAt:new Date().getTime()});
//         callback();
//     },6000);
// }
// creatPost({title:'Post three',body:'This is post three'},getPost);
// creat4thPost({title:'Post four',body:'This is post four'},getPost);

function delPost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.pop();
              
            if(posts.length!=0){
                resolve();
                updateLastUserActivityTime();
            }
            else{
                reject("Array is empty")
            }      
             
        },1000);
    });    
}

function creat4thPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({...post,createdAt:new Date().getTime()});
            resolve();
            updateLastUserActivityTime();
        },1000);
    });
}   


function updateLastUserActivityTime(){
    clearInterval=timeInterval;
    return new Promise(()=>{
        timeInterval=setInterval(() =>{
            let output='';
            posts.forEach((post,index) => {
                output +=`<li>${post.title} created ${(new Date().getTime()-post.createdAt)/1000} seconds ago</li>`
            });
            output +=`Last updated at:-- ${(new Date())}`; 

            document.body.innerHTML=output;
            // document.body.innerHTML=output;
        },1000);
    });
}  

// creat4thPost({title:'Post four',body:'This is post four'}).then(updateLastUserActivityTime);
Promise.all([creat4thPost({title:'Post four',body:'This is post four'}), updateLastUserActivityTime(), delPost()])
// updateLastUserActivityTime();