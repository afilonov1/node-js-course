#!/usr/bin/env node

// import { getMonthName } from './utils';
const {getMonthName} = require('./utils');

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv))
    .option('year', {
        alias: 'y',
        type: 'number',
    })
    .option('month', {
        alias: 'm',
        type: 'number',
    })
    .option('date', {
        alias: 'd',
        type: 'number',
    })
    .argv
const arguments = argv._;


// console.log(argv);
if (arguments.includes("current")) {
    if (argv.hasOwnProperty("year")) {
        console.log(new Date().getFullYear());
    } else if (argv.hasOwnProperty("month")) {
        const currentMonthOrder = new Date().getMonth() + 1;
        currentMonthOrder
        console.log(getMonthName(currentMonthOrder));
    } else if (argv.hasOwnProperty("date")) {
        console.log(new Date().getDate());
    } else {
        console.log(new Date());
    }
} else if (arguments.includes("add")) {
    const date = new Date();

    if (argv.hasOwnProperty("year")) {
        const additionalYears = argv.year || 0;
        date.setFullYear(date.getFullYear() + additionalYears);
    }
    if (argv.hasOwnProperty("month")) {
        const additionalMonths = argv.month || 0;
        date.setMonth(date.getMonth() + additionalMonths);
    } 
    if (argv.hasOwnProperty("date")) {
        const additionalDays = argv.date || 0;
        date.setDate(date.getDate() + additionalDays);
    }
    console.log(date);
} else if (arguments.includes("sub")) {
    const date = new Date();

    if (argv.hasOwnProperty("year")) {
        const additionalYears = argv.year || 0;
        date.setFullYear(date.getFullYear() - additionalYears);
    }
    if (argv.hasOwnProperty("month")) {
        const additionalMonths = argv.month || 0;
        date.setMonth(date.getMonth() - additionalMonths);
    } 
    if (argv.hasOwnProperty("date")) {
        const additionalDays = argv.date || 0;
        date.setDate(date.getDate() - additionalDays);
    }
    console.log(date);
}