module.exports=function(app){
    app.get("/",function(req, res){
    res.render("index.html")
    });
    app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    if (username === 'admin' && password === 'admin') {
    res.send('Login successful');
    }
    else {
    res.send('Login failed');
    }
    })
    }
   