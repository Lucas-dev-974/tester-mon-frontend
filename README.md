## Start
    npm install 
    npm run dev

## Setup JEST with SolidJS

    npm install --save-dev jest 
    npm install --save-dev @babel/preset-typescript
    npm install --save-dev @testing-library/jest-dom
    npm install --save-dev solid-jest
    npm install --save-dev jest-environment-jsdom
    npm install --save-dev @solidjs/testing-library
    npm install --save-dev @testing-library/user-event
    npm install --save-dev @babel/preset-typescript

    npm install --save-dev jest @babel/preset-typescript @testing-library/jest-dom solid-jest jest-environment-jsdom @solidjs/testing-library @testing-library/user-event @babel/preset-typescript
## Create .babelrc
    cat > .babelrc <<- EOF
    {
        "presets": [
            "@babel/preset-env",
            "babel-preset-solid",
            "@babel/preset-typescript"
        ]
    }
    EOF

Or just create file manually and add

    {
        "presets": [
            "@babel/preset-env",
            "babel-preset-solid",
            "@babel/preset-typescript"
        ]
    }
    

## Create a babel config file
Create a babel.config.js and paste:

    module.exports = {
        presets: [
            ['@babel/preset-env', {targets: {node: 'current'}}],
            '@babel/preset-typescript',
        ],
    };

## Config JEST in packjage.json
Add: 

    "jest": {
        "preset": "solid-jest/preset/browser",
        "setupFilesAfterEnv": [
        "<rootDir>/node_modules/@testing-library/jest-dom/extend-expect"
        ],
        "testEnvironment": "jsdom"
    },

    "scripts": {
        ...,
        "test": "jest"
    }