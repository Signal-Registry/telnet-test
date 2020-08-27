const net = require("net");

let socket = net.connect({ host: "telehack.com", port: 23 }, function () {
  console.log("connected");
  socket.on('data', function (data) {
    let lines = `${data}`.split("\r\n")
    if(lines[lines.length-1] == '.'){
      console.log("Read finish")
      socket.write("weather\r\n", function(){
        console.log("Written")
      })
    }
  })

  setTimeout(()=>{
    // socket.write("weather\r\n", function(){
    //   console.log("Written")
    // })
    socket.destroy()
  },5000)

});

// console.log(socket)