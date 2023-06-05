# Notes App

## Functionality
1. Folder List
- [x] Shown in the left-most sidebar (see screenshot above)
- [x] Folders listed in alphabetical order
- [x] Ability to create new folders

2. Notes List
- [x] Shown in the middle panel (see screenshot above)
- [x] Notes listed for the currently selected folder
- [x] Notes listed in order of most recently modified
- [x] Ability to create new notes in the selected folder
- [x] The first line of the note’s content is used as the title for the listing
- [x] Ability to select a note from the list and start editing it
- [x] Ability to delete currently selected note

3. Note Editor
- [x] Shown in the right-most panel (see screenshot above)
- [x] Ability to edit the note's content
- [x] Does NOT need to support WYSIWYG editing, simple text is sufficient
- [x] Should auto-save when the “Return/Enter” key is pressed on the keyboard

4. Extra Credit
- [x] Write unit tests. For the sake of time, you can just write a few tests to demonstrate this skill.
- [x] Ability to toggle (open/close) the Folder List sidebar
- [x] The second line of the note's content is used as a short text preview in the Notes List
- [ ] Display an alert or confirmation when your note has unsaved changes when you switch to a different note or folder
- [ ] Ability to search through all notes (by content) and display matching notes in the middle panel (Notes List). Clearing the search term would show all notes.

## Demo
[Loom Screen Recording](https://www.loom.com/share/69420a52cb984e8cab86b570397e3e4b)

![](./screen.gif)

## Test
[Link to tests](./src/App.test.js)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
