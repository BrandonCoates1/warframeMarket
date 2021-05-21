const capitilize = (string) => {
    let arr = string.split("_").join(" ").split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ")
}

const getItem = (item, search) => {
    let itemIndex = item.findIndex((item) => {
        return item.url_name === search
    });
    return item.slice(itemIndex, itemIndex + 1);
}

const removeItem = (item) => {
    let itemIndex = item.findIndex((item) => {
        return item.sub_icon === null
    });
    return itemIndex
}

module.exports = {
    capitilize,
    getItem,
    removeItem
}