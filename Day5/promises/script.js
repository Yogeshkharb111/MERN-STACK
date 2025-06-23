const request =window.fetch("https://dummyjson.com/products");
console.log(" : requests", request)
console.log(" : requests", request)

const sucessCb=(response)=>{
    console.log("Response", response);
    const pr2=response.json();

    pr2.then((data)=>{
        console.log("Data", data);
    })
}
const errorCb=(err)=>{
    alert("Unable to get products -->",err.message);
};
request.then(sucessCb).catch(errorCb);