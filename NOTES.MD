# 380. Loading CSS Files
- `npm install --save-dev style-loader css-loader`
- css-loader analyzes css imports
- style-loader takes all the css folders it finds and injects them into a html page.
- `npm install --save-dev postcss-loader`
- postcss-loader makes our css code work in older browsers. 
- `npm install --save-dev autoprefixer`
- We also need to tweak the `package.json` file.
- We're also not done. We need to support images too. 