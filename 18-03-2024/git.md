### Created global repo

```
> Created a repo name Sample
```

### Created local repo

```
$ mkdir Sample
$ cd Sample
```

### GIT initialization

```
$ git -v
# version of git in use

$ git config --global user.name=<github username>
$ git config --global user.email=<github email>
# git configuration for global access of github connection in our system

$ git init
# git initialization

> Created a file 1.txt with content "text1"

$ git add *
# add all file from unstaged to staged mode

$ git commit -m "commit1"
# commiting in local with message commit1

$ git branch -M main
# making this the main branch

$ git remote add origin https://github.com/M3PH1ST023/Sample.git
# adding remote repo connection to this current local repo

$ git push -u origin main
# pushes to main branch in origin

> Now we can observe the changes o9n global also

$ git rm -r <file name>
# remove file or folder
```

### Basic commands

```
> git push origin <branch>
# from local to remote push in specific branch

> git pull
# pull copies of all remote repo from the branch

> git fetch
# fetch the latest updates done from repo
```

### GIT status and log

```
$ git status
# get the status of git repo happening in local

$ git log
# gives all commit ids and other operation with id

$ git show <commit-id>
# gives the difference in the specific commit before and after commit

```

### Branch management

```
> git branch -a
# list all branches

> git branch <new branch name>
# creates a branch name

> git push origin <branch name>
# push a local branch to github

> git checkout <branch name>
# switch branch

> git checkout -b <branch name>
# create a new branch and switch to it

> git branch -d <branch name>
# deletes a branch

> git push origin --delete <branch name>
# delete remote branch
```

#### Reference

[git source](https://git-scm.com/docs)

[git using UI in VS Code](https://www.youtube.com/watch?v=i_23KUAEtUM)

[Markup syntax link](https://www.markdownguide.org)
