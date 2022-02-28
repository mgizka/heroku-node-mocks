var pathMappings = {
    "/hansen-pi/v1/inventory/api/portfolioitem/query": "/pi/query.json",
    "/hansen-cpq/v1/api/wrapperService/productToQuote": "/cpq/productToQuote.json",
    "/hansen-cpq/v1/api/quotes/7e77eec1-e47f-4a40-bb10-88f2df4781cc/convertToOrder": "/cpq/convertToOrder.json",
    "/hansen-cpq/v1/api/orders/f48cf9f0-4f90-421d-902f-2967f2a9cc4c/submit": "/cpq/submit.json"
}

module.exports = function() {
    this.getJSON = function(reqPath) {
        let fileName = pathMappings[reqPath];
        if (fileName) {
            const fs = require("fs");
            return rawdata = fs.readFileSync("./hansen/" + fileName);
        }
        return null;
    }
}