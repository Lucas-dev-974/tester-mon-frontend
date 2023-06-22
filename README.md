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