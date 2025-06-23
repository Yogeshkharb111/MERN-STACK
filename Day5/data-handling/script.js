console.log("hello")

let newDate=null;

const handleDateChange=(e)=>{
    newDate =new Date(e.target.value);
    console.log(":newDate:", newDate);
    const targetMillisecods=newDate.getTime();
    console.log(": targetMilliseconds:", targetMillisecods);
    const currentTimeInMilliseconds =Date.now()
    console.log(": currentTimeInMilliseconds:", currentTimeInMilliseconds);
    const diffInSeconds=(targetMillisecods-currentTimeInMilliseconds) / 1000;
    console.log(": diffInSeconds:", diffInSeconds);

}