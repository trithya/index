 const http=require('http');
//const http1=require('./http');
const server=http.createServer((req,res)=>{
  //   console.log(req.url,req.method,req.headers,);
    if(req.url==='/')
    {
        // res.setHeader('Content-Type','text/html123');
        // res.write('<html><body>Hello World</body></html>');
       res.write('<html><body><form action="/msg" method="POST" ><input type="text" name="firstname"><button type="submit" value="Submit">add</button></form>');
  res.write('</body></html>');
   return res.end();
    }
    // else{
    //     res.setHeader('content-type','text/html');

    //     res.write('<html><body>Hello test</body></html>');
    
    // }
    if(req.url==='/msg' && req.method==='POST') 
    {
        res.setHeader('Content-Type','text/html123');

        res.write('done');
        return res.end();
    }
    res.write('invalid');
    res.write(res.url);
    return res.end();
//process.exit();
});
server.listen(3000);
