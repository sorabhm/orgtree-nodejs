let data = require ('./data.js');
var http = require('http');

const process = function(input) {
    let org = [];
    let orgTable = {};
    input.forEach( orgNode => {
        orgTable[orgNode.id] = { ...orgNode, children: [] };
    });

    input.forEach( orgNode => {
        if(!orgNode.managerId) {
            org.push(orgTable[orgNode.id]);
        } else {
            orgTable[orgNode.managerId].children.push(orgTable[orgNode.id]);
        }
    });

    return org;
}

const prettyPrint = function(obj,counter,builder) {
    builder.push("<tr>");
    for(var i=0; i<counter; i++) {
        builder.push("<td>&nbsp;</td>");
    }
    builder.push("<td>", obj.name, "</td>");

    if(!obj.managerId) {
        for(var i=0; i<counter; i++) {
            builder.push("<td>&nbsp;</td>");
        }
    }

    builder.push("</tr>");
    counter++;
    if(obj.children && obj.children.length>0) {
        obj.children.forEach( o => str = prettyPrint(o,counter,builder));
    }
    return builder.join("");
}


var server = http.createServer(function(req, res) {
    var orgTree = process(data);
    res.write("<html><h1>Org Tree for Furphy</h1>");
    res.write("<table border='2px solid'>");
    orgTree.forEach((node) => {
        res.write(" " + prettyPrint(node,0,[]));
    });
    res.write("</table></html>");
    res.end();
});

server.listen(8181, function(err) {
    if(err) {
        console.log("Exception thrown during the server startup", err.stack);
    } else {
        console.log("Server listening on port 8181");
    }
});

module.exports = {
    process: process,
    prettyPrint: prettyPrint
}