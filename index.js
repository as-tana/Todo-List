const express = require('express');
const app = express();
const PORT = 3000;

let todos = []; // TODOリストを格納する配列

app.use(express.static('public')); // 静的ファイルの提供
app.use(express.json()); // JSONの解析

app.get('/todos', (req, res) => {
    res.json(todos);
});

app.post('/todos', (req, res) => {
    todos.push(req.body);
    res.status(201).json({ message: "Todo added successfully." });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
