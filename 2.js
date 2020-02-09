//file
const http=require('http');
const fs=require('fs');




const server=http.createServer((req,res)=>
{
    const url=req.url;
    if(req.url==='/')
    {
        res.write('<html><body><form action="/msg" method="POST"><input type="text" name="box>');
   res.write('<button type="submit">add</button></form>');
        res.write('</body></html>');
         return res.end();
    }
    if(url==='/msg' && req.method==='POST') 
    {
        //res.setHeader('Content-Type','text/html123');
          fs.writeFileSync('msg.txt','hello text');
          res.statusCode =302;
          res.setHeader('Content-Type','text/html123')
        res.write('<h1>Message received');
        
        return res.end();
    }
    res.write('<html>');
    res.write('<head>');
    return res.end();
   
});
server.listen(4000);