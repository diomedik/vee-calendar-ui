# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Tech stack
 - Antd - Library which provides a lot of UI components, which very scalable and flexible. 
 - Dayjs - A better way to work with Date in JS. This library provides a lot of methods to work with Date and also lighweight.
 - Apollo - This library provide to us a lot of methods to work with GraphQl queries
 - RRule - a library to work with iCalendar standard

 ### Folder structure 
  - Atomic design structure folder
  This structure folder design provides a lot of oportunities in future to scale and update application,
  we shouldn't waste a lot of time to find some component, because we know how our components stored in application
  All components store in folders, for now - Atoms and Moleculas, but in future if application will grow
  we can easily add new folders Organisms, Templates and Pages.

### Libraries
 --- Antd 
 This library provides ready to use UI components, which we can easily modify and make apply styles which we needed.
 There are a lot of Props in any components, which give us a full control over components

 --- Dayjs
 This is a better alternative to work with Dates in JS. This library very lightweight, around 2KB. Easy to integrate in 
 any project and component. Also this library works perfect with Antd, because of a lot of components use Dayjs format
 under the hood.

 --- Apollo
 The main reasen why we use this lib instead of Redux, because Appolo provides a lot of methods to work GraphQL queries. In case
 if we use Redux, we need some additional lib to parse GraphQL queries, for example react-query, but Apollo has it under the hood.
 Also, Apollo provides to us state manager and cache manager, we can store and manupulate data without any additional libs.

 --- RRule
 RRule.js is a valuable tool when working with scheduling and event management systems that involve recurring patterns. It provides a convenient and reliable way to handle various types of recurring events, such as daily, weekly, monthly, or yearly occurrences, as well as more complex patterns. RRule.js simplifies the implementation of recurrence rules, saving development time and ensuring accurate and consistent scheduling functionality.



