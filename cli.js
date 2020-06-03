#!/usr/bin/env node

const { sentence, paragraph } = require('./dist/bundle')

let count = undefined;
let countKey = 'wordCount'
let action = sentence
let slangOnly = false

process.argv.forEach(arg => {
  if (arg.startsWith('p')) {
    action = paragraph
    countKey = 'wordCount'
  }
  if (arg.startsWith('s')) {
    action = sentence
    countKey = 'sentenceCount'
  }

  const number = parseInt(arg)
  if (!isNaN(number)) {
    count = number    
  }

  if (arg === '--slang-only') {
    slangOnly = true
  }
})

console.log(action({ [countKey]: count, slangOnly }))