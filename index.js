#!/usr/bin/env node

const pkgJson = require('./package.json')
const welcome = require('cli-welcome')

welcome({
    title: pkgJson.name,
    description: pkgJson.description,
    version: pkgJson.version,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear: true
})


console.log(`
Hello,I'm Nikhilesh Navile! 👋

I am a Final year Student in Electronics and Communications Engineering @IIITDM Jabalpur Campus. Currently exploring Full Stack web Development. Always trying to learn new javascript libraries and frameworks.

🪶  twitter: https://twitter.com/nickynavile
💻 Github: https://github.com/nickynavile
`)
