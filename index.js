const http = require("http");
const fs = require("fs");


const port = 3000;

const hostname = "127.0.0.1"




 const handleReadFile =(filename,statuscode,req,res)=>{


    fs.readFile(filename,statuscode,'utf-8',(err,data)=>{

             
        if(err){
           console.log(err)
        }
        else{

           res.write(data)
           res.end()
        }

   })






 }






 const server = http.createServer((req,res)=>{



      if(req.url==='/')
      {
         handleReadFile('./pages/home.html',200,req,res)
      
      }
      else if(req.url==='/about')
      {
         handleReadFile('./pages/about.html',200,req,res)
      
      }
    else  if(req.url==='/contact')
      {
         handleReadFile('./pages/contact.html',200,req,res)
      
      }
     else if(req.url==='/courses')
      {
         handleReadFile('./pages/course.html',200,req,res)
      
      }

      else{
                
            handleReadFile('404.html',404,req,res)

      }





 })

server.listen(port, hostname, () => {
  console.log(`server is listening at http://${hostname}:${port}`);
});
