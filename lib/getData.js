const fetch = require("node-fetch");
const url = "https://api.warframe.market/v1/items";

const getData = async () => {
    let data = await fetch(url);
    return await data.json();
}

const getItemDesc = async (search) => {
    let data = await fetch(`https://api.warframe.market/v1/items/${search}`);
    return await data.json()
}

module.exports = {
    getItemDesc,
    getData
}