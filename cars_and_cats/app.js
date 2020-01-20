var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request, response){
    console.log("client request url", request.url );

    if (request.url === '/cars'){
        fs.readFile('views/index.html', "utf8", function(errors, contents) {
            response.writeHead(200, {'Content-Type' : 'text/html'});
            response.write(contents);
            response.end();

        });

    }
    if(request.url === '/stylesheets/style.css'){
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
        response.writeHead(200, {'Content-Type': 'text/css'});
        response.write(contents);
        response.end();
        })
    }
    else if(request.url === '/images/gtr.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/gtr.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }
    else if(request.url === '/images/typeR.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/typeR.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }
    else if(request.url === '/images/mercedes.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/mercedes.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }
    
    if (request.url === '/cats'){
        fs.readFile('views/cats.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cat1.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }
      else if(request.url === '/images/cat2.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }
      else if(request.url === '/images/cat3.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat3.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }

    if(request.url === '/cars/new'){
        fs.readFile('views/new_car.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        })

    }

});

server.listen(6789);