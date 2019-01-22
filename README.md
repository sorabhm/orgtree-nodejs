# orgtree-nodejs
Creating an org tree from sample input data

This project is developed using node js v8.x. So please ensure to have the relevant version installed on your local machine.

Once above is ready, execute command "npm install" to install all the required dependencies. On successful completion of the download, run the following command on the console to start the Http server

node src/app.js

This will start the Http server on port 8181 and can be accessed using the URL http://localhost:8181

You should see an Org chart in a tabular format on accessing the above page.

To executed the test cases, run the command "npm test". Currently there are 3 test cases only covering the positive scenarios.

# Improvement Areas:
1) Remove the usage of recursion to draw the chart in tabular format
2) Reduce the number of loops to parse & process the input data, it increases the time complexity of the program
3) Improve the test cases by may be adding chai expect library and to match the object patterns
