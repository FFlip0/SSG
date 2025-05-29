---
title: bash
layout: yo
---
`.sh` files are bash files

# controls
`CTRL+C` Stops running command
`CTRL+L` Clears terminal, same as the clear command 

# basics?


```bash
# Hello World
echo "[text]"
echo [text]

# Create a file
touch [new-file-name]

# Create a folder
mkdir [new-folder-name]

# List files and folders in current directory
ls

# Change directory (relative path)
cd ./sub-folder/
# Change directory (absolute path)
cd /home/ 
# Change directory backwards
cd ../

# Moving files/folders
mv [original-file/folder] [new-file/folder-locaiton]/ 

# Copy files/folders
cp [original-file/folder] [new-file/folder-location]/

# Rename file
mv [old-file/folder-name] [new-file/folder-name]

# Delete file
rm [file]
# Delete folder 
rm -r [folder]

# Clear terminal
clear
```


```bash
# Ping a IP/Domain
ping [ip/domain]
```


```bash
# You can set a vairble like this
myVar="String1"
echo $myVar # String1

# Set a new value for this varible
myVar="String2"
echo $myVar #String2



```