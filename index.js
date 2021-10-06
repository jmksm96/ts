"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/2';
axios_1["default"].get(url).then(function (res) {
    var todo = res.data;
    var title = todo.title;
    var id = todo.id;
    var completed = todo.completed;
    console.log("\n  id: " + id + "\n  title: " + title + "\n  completed: " + completed);
});
