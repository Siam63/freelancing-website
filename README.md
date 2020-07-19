## Local setup
1. To clone the repo locally: `git clone https://github.com/wrahman0/project-unify.git`
2. Node uses many different versions. To run this repo, make sure you are on v12.18.2. To do so, first install it with `nvm install 12.18.2`, then switch your node to use it with `nvm use 12.18.2` 
3. If this is the first time running the app, install all the dependencies with `npm install`
4. `npm start` will run the app locally

## Directory Structure
```
├── public/          babel generated static files. Do not add to this unless you have reason
├── src/             frontend source code
    └── stylesheets/ all the site wide styles. All new styles need to be imported here.
    ├── components/  all the react components
```

## TODOs
- [x] Convert css to sass for more powerful styling
- [x] Update readme with proper guidance
- [ ] [this](https://storybook.js.org/) looks promising, should we use it? Its recommended from [here](https://create-react-app.dev/docs/developing-components-in-isolation/)
- [ ] [Add testing](https://create-react-app.dev/docs/running-tests)