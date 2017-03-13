# Tree Homework

###### In this exercise you'll show the ability to *GET* data from a server and format it into a tree structure.

*This exercise requires node for running an express server and reading file data. 
If you do not have node install you can download [Node](https://nodejs.org/en/download/).*


## Your Job 
- `GET` the data at http://localhost:8080/data 
- Convert server data into a **tree structure** (see example.js)
- Render tree with `$( '#jstree' ).jstree({ 'core': { 'data': treeStruct } });`
- **Note:** All your code will be written the in `src/index.html` file


## Getting Setup
1. Download codebase
2. Open a terminal in this directory 
3. Type `npm install` - this installs the node dependencies for this exercise
4. Type `npm run start` - this runs your local server at http://localhost:8080/


## Example
- The first time you load http://localhost:8080/ your see an example tree structure 
- In the `src/example.js` you can see an example tree structure and how this tree structure is rendered using jstree
- In your `src/index.html` you can comment out the exmaple.js script tag (it is not needed)


## More on the Data
- The data represents the WBS elements of the James Webb Space Telescope project. 
