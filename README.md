# @composi/create-composi-app

Package to create projects ready to use @composi/core to create desktop and mobile websites, PWAs and hybrid apps.


## Install

```sh
npm install --save-dev @composi/create-composi-app
```
If you're on Mac or Linux you may need to run the above command with `sudo`, depending on how you have NPM set up. Check the NPM docs for information about how to handle permissions to avoid having to use `sudo`.

### Help

After installing create-composi-app, you can get help at any time:

```bash
create-composi-app -h
// or:
create-composi-app --help
```

### Version

You can find out what version of create-composi-app you are using as follows:

```bash
create-composi-app -v
// or:
create-composi-app --version
```

## Create New Project

To create a new project, you open your terminal and type in create-composi-app followed by the `-n` flag and the name for the project. This will create a project with that name on your desktop:

```bash
create-composi-app -n MyProj
```

When providing a name, create-composi-app will always use the name as provided. However, for the package.json file it has to use a valid name. This means it makes the name lowercase. It also converts spaces to hyphens.

If you want to use a multi-word name with spaces, you need to enclose it in quotes:

```bash
create-composi-app -n "My Project"
```
Although the project folder will be "My Project", the package name will be "my-project".

## Provide Path for New Project

When you only provide a name for a project, create-composi-app creates it on the Desktop. However, you can provide an argument with the flag `-p` as the path for where you want the new project created. Of course this path needs to follow the naming conventions of your operating system:

```bash
# For Mac and Linux:
create-composi-app -n "My App" -p "~/Desktop/dev/personal"

# For Windows:
create-composi-app -n "My App" -p "~\Desktop\dev\personal"
```

## Install Dependencies and launch project.

After creating a project, `cd` to it and run:

```bash
npm i
```
When the install finishes, you can build and launch the new project with:

```bash
npm start
```
This will also launch watchers for the projects source folder, which includes all the CSS, images and JavaScript for you project. When a change is detected, it will rebuild that part and reload the browser.


## Create Deployment Version

When you are done developing your app, you can get a development version. To do so, from within the project, run:

```bash
npm run build:production
```

This will create a new copy of your project using the same name with "-production' appended. For example, if the project's name was "My App", the production version would be "My App-production".

The production version leaves behind everything that was needed for development. In the folder you will find the index.html file and the dist folder. The paths in the index.html are aboslute, so the dist folder can be placed wherever the production server needs it to be.

## Other Tasks to Run

The new project comes configured to build and launch the project with

```bash
npm start
```
You can also run ESLint on the JavaScript in your project's src folder:
```bash
npm run lint
```

You can run Prettier on the JavaScript in your project's src folder:
```bash
npm run format
```
And, in the case your project's dist folder has gotten messy and your not sure what you need in there, you can clean it out with:

```bash
npm run clean
```
After cleaning out the dist folder, you can run `npm run build:fresh` to get just the files you need in the dist folder.

## Less Typing

You can use an alias to create a shortcut so you don't have to  type out `create-composi-app`. For macOS and Linux, open your .bashprofile and add the following line:

```bash
alias cca="create-composi-app"
```
Restart the terminal. Now you should be able to use `create-composi-app` by typeing `cca`.

For Windows, in the command prompt enter:

```bash
doskey cca=create-composi-app
```
