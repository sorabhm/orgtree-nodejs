var assert = require('assert');
var app = require('../src/app');


describe('Org tree unit test case suite', function() {
    let inputData = [{
           "id": 100,
           "name": "Alan",
           "managerId": 150
         },
         {
           "id": 220,
           "name": "Martin",
           "managerId": 150
         },
         {
           "id": 150,
           "name": "Jamie"
         }];

    let outputData = [{
        "id": 150,
        "name": "Jamie",
        children: [{
          "id": 100,
          "name": "Alan",
          "managerId": 150,
          children:[]
        },
        {
          "id": 220,
          "name": "Martin",
          "managerId": 150,
          children:[]
        }]
    }];
    it('should have the expected parent at root', function() {
        assert.equal( app.process(inputData)[0].name, outputData[0].name);
    });

    it('should have equal number of children', function() {
        assert.equal(app.process(inputData)[0].children.length, outputData[0].children.length);
    });

    it('should print the org tree in tabular mode', function() {
        let node = {
                "id": 150,
                "name": "Jamie",
                children: [{
                  "id": 100,
                  "name": "Alan",
                  "managerId": 150,
                  children:[]
                }]
              };
        assert.equal(app.prettyPrint(node,0,[]),"<tr><td>Jamie</td></tr><tr><td>&nbsp;</td><td>Alan</td></tr>")
    })
});