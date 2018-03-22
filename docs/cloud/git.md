# GIT

---

# Initiation

**Go to Working Directory**
```
git init
```

**Example of adding Git Server:**
```
git remote add TFMS11 Z:\\TFMS11.git
```

# Config

```
git config
```

## Set email
```
git config --global user.email "user1@live.com"
```

## Use Windows Credential Manager
<http://stackoverflow.com/questions/15381198/remove-credentials-from-git/15382950#15382950>
```
git config --global credential.helper wincred
```


# Branches

## Create Branch

```
git branch alliance_etl
git checkout alliance_etl
# OR
git checkout -b alliance_etl
```

## Delete branch

**Locally:**
```
git branch -D <branchName>
```

**Remote:**
```
git push origin --delete <branchName>
```


# File Management
## Revert File Changes
**First run:**
```
git status
```

**Then to revert:**
```
git checkout -- <file>
```

**Revert all Changes:**
```
git checkout .
```

# Commit Management
## Squash
```
git reset HEAD~10 # squash last 11 commits (right after master)
git add -A
git commit --amend
```