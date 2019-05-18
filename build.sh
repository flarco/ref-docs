vuepress build
rm -rf docs
mv .vuepress/dist docs
git add docs
git commit -m "release $(date) [skip ci]"

git push
