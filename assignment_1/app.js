const http = require("http");
// const routes = require("./router");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  const listUser = ["Abdurahman", "Rahman"];
  if (url === "/") {
    // condition user req index
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write(`<head><title>Page Index</title></head>`);
    res.write(`<body>
        <h1>Welcome Node js</h1>
        <form action="/create-user" method="POST">
            <input type="text" name="username"/>
            <button type="submit">Send</button>
        </form>
    </body>`);
    res.write("</html>");
    return res.end();
  }

  if (url === "/users") {
    // res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Page Users</title></head>");
    res.write(`<body>
        <p>Hello world</p>
        <ul>
         ${listUser.map((e) => `<li>${e}</li>`).join("")}
        </ul>
    </body>`);
    res.write("</html>");
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];
    //   chunk data
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    // buffer data for parsed

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const user = parsedBody.split("=")[0];
      console.log(user);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
  res.write("<html>");
  res.write("<head><title>Page Not Found</title></head>");
  res.write(`<body>
    <p>Page Not Found</p>
  </body>`);
  res.write("</html>");
  return res.end();
});

server.listen(3000);
