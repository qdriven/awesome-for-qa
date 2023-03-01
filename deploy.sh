# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vitepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master 

# if you are deploying to https://<USERNAME>.github.io/<REPO>

git push -f git@github.com:qdriven/qa-website-templates.git main:gh-pages