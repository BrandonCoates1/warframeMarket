const express = require("express");
const hbs = require("express-handlebars");
const path = require("path");
const app = express();
const { getItemDesc } = require("./lib/getData");
const { capitilize, getItem, removeItem } = require("./lib/functions");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({
    extended: true
}));

app.engine("hbs", hbs({
    extname: ".hbs"
}));

app.set("view engine", ".hbs");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/item", async (req, res) => {
    let search = req.query.search;
    search = search.toLowerCase().split(" ").join("_");

    let data = await getItemDesc(search);
    let allItems = await getItemDesc(search);
    
    allItems.payload.item.items_in_set.splice(removeItem(allItems.payload.item.items_in_set), 1);

    data.payload.item.items_in_set = getItem(data.payload.item.items_in_set, search);
    let item = data.payload.item.items_in_set;

    item[0].url_name = capitilize(item[0].url_name);

    let arr = item[0].url_name.split(" ");
    item[0].desc = `${arr[2]} component of the ${arr[0]} ${arr[1]} Warframe`;

    res.render("warframe", {allItems, data, listExists: true});
});

app.listen(3000, () => {
    console.log("Listening to port 3000");
});