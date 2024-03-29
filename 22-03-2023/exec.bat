@echo off

set /p file=Enter filename:

echo executing %file%

tsc %file%".ts"

node %file%".js"