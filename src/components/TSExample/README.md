# Component Example
It is nice to store component files inside their own folder. In this way when we are prepared when we need more than a single file per component.
Content example:
- Component definition (*.jsx)
- Component specific CSS (*.module.css / *.css)
- Documentation (ex. this README.md)
- Tests
- Type definitions (*.d.ts)

## Note
Since the folder is carrying the name of the component. We are using the generic *index.tsx(/index.jsx/index.js)* name.
This makes our import statements a little bit cleaner.