const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Josh Doe' },
    { id: 4, name: 'Jill Doe' },
    { id: 5, name: 'Jack Doe' },
]


exports.getUsers = (req, res) => {
    res.send(users);
}



// route that return a single user
exports.getUser = (req, res) => {
    const user = users.find(user => user.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');
    res.send(user);
}


// route that create a new user
exports.setUser = (req, res) => {
    console.log(req.body)
    const user = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(user);
    res.send(user);
}
