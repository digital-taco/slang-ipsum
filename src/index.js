import { ipsum, slang } from './words'

export function sentence({ wordCount, slangOnly = false } = {}) {
  const words = [...slang, ...(slangOnly ? [] : ipsum)]
  const sentenceWords = []
  let sentenceLength = wordCount || 0;
  if (!wordCount) {
    while (sentenceLength < 4) {
      sentenceLength = Math.random() * 17
    }
  }
  while (sentenceWords.length < sentenceLength) {
    const index = Math.floor(Math.random() * words.length)
    sentenceWords.push(words[index])
  }
  sentenceWords[0] = sentenceWords[0][0].toUpperCase() + sentenceWords[0].slice(1)
  return `${sentenceWords.join(' ')}.`
}

export function paragraph(sentenceCount) {
  let length = sentenceCount|| 0;
  if (!sentenceCount) {
    while (length < 3) {
      length = Math.random() * 10
    }
  }
  const para = Array.from({ length }, () => sentence())
  return para.join(' ')
}