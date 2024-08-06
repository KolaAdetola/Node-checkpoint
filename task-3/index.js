const fs=require('fs')
fs.writeFileSync('welcome.txt','Hello Node!!!',(err)=>{
    if(err) {
        console.log(err.stack);
        return;
    }
    console.log("File created");
})
fs.readFile('hello.txt','utf8',(err,data)=>{
    if(err) {
        console.log(err.stack);
        return;
    }
    console.log(data.toString());
});