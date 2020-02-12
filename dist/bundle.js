(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global['slang-ipsum'] = {}));
}(this, (function (exports) { 'use strict';

  // thanks man! Credit to https://gist.github.com/rviscomi/1479649
  // notice that copyright from above link not included as directed
  // since only the list of lorem ipsum words were used.
  const ipsum = [
    'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur',
    'adipiscing', 'elit', 'curabitur', 'vel', 'hendrerit', 'libero',
    'eleifend', 'blandit', 'nunc', 'ornare', 'odio', 'ut',
    'orci', 'gravida', 'imperdiet', 'nullam', 'purus', 'lacinia',
    'a', 'pretium', 'quis', 'congue', 'praesent', 'sagittis', 
    'laoreet', 'auctor', 'mauris', 'non', 'velit', 'eros',
    'dictum', 'proin', 'accumsan', 'sapien', 'nec', 'massa',
    'volutpat', 'venenatis', 'sed', 'eu', 'molestie', 'lacus',
    'quisque', 'porttitor', 'ligula', 'dui', 'mollis', 'tempus',
    'at', 'magna', 'vestibulum', 'turpis', 'ac', 'diam',
    'tincidunt', 'id', 'condimentum', 'enim', 'sodales', 'in',
    'hac', 'habitasse', 'platea', 'dictumst', 'aenean', 'neque',
    'fusce', 'augue', 'leo', 'eget', 'semper', 'mattis', 
    'tortor', 'scelerisque', 'nulla', 'interdum', 'tellus', 'malesuada',
    'rhoncus', 'porta', 'sem', 'aliquet', 'et', 'nam',
    'suspendisse', 'potenti', 'vivamus', 'luctus', 'fringilla', 'erat',
    'donec', 'justo', 'vehicula', 'ultricies', 'varius', 'ante',
    'primis', 'faucibus', 'ultrices', 'posuere', 'cubilia', 'curae',
    'etiam', 'cursus', 'aliquam', 'quam', 'dapibus', 'nisl',
    'feugiat', 'egestas', 'class', 'aptent', 'taciti', 'sociosqu',
    'ad', 'litora', 'torquent', 'per', 'conubia', 'nostra',
    'inceptos', 'himenaeos', 'phasellus', 'nibh', 'pulvinar', 'vitae',
    'urna', 'iaculis', 'lobortis', 'nisi', 'viverra', 'arcu',
    'morbi', 'pellentesque', 'metus', 'commodo', 'ut', 'facilisis',
    'felis', 'tristique', 'ullamcorper', 'placerat', 'aenean', 'convallis',
    'sollicitudin', 'integer', 'rutrum', 'duis', 'est', 'etiam',
    'bibendum', 'donec', 'pharetra', 'vulputate', 'maecenas', 'mi',
    'fermentum', 'consequat', 'suscipit', 'aliquam', 'habitant', 'senectus',
    'netus', 'fames', 'quisque', 'euismod', 'curabitur', 'lectus',
    'elementum', 'tempor', 'risus', 'cras'
  ];

  const slang = [
    'woke',
    'sheeple',
    'sus',
    'bruh',
    'brah',
    'dope',
    'dank',
    'heckin',
    'fine',
    'yolo',
    'fomo',
    'bae',
    'snack',
    'salty',
    'ship',
    'shook',
    'receipts',
    'extra',
    'yaas',
    'low key',
    'turnt',
    'mood',
    'lit',
    'baller',
    'wizard',
    'basic',
    'on fleek',
    'clap back',
    'hunty',
    'humble brag',
    'bye felicia',
    'slay',
    'adulting',
    'throwin shade',
    'trolls',
    'swerve',
    'ratchet',
    'stan',
    'gassed',
    'beat',
    'ghost',
    'fam',
    'savage',
    'jomo',
    'trill',
    'snatched',
    'hundo-p',
    'goat',
    'tbh',
    'yeet',
    'wig snatched',
    'suh',
    'blessed',
    'bounce',
    'swol',
    'can\'t even',
    'hangry',
    'crazy',
    'gucci',
    'finna',
    'canceled'
  ];

  function sentence({ wordCount, slangOnly = false } = {}) {
    const words = [...slang, ...(slangOnly ? [] : ipsum)];
    const sentenceWords = [];
    let sentenceLength = wordCount || 0;
    if (!wordCount) {
      while (sentenceLength < 4) {
        sentenceLength = Math.random() * 17;
      }
    }
    while (sentenceWords.length < sentenceLength) {
      const index = Math.floor(Math.random() * words.length);
      sentenceWords.push(words[index]);
    }
    sentenceWords[0] = sentenceWords[0][0].toUpperCase() + sentenceWords[0].slice(1);
    return `${sentenceWords.join(' ')}.`
  }

  function paragraph(sentenceCount) {
    let length = sentenceCount|| 0;
    if (!sentenceCount) {
      while (length < 3) {
        length = Math.random() * 10;
      }
    }
    const para = Array.from({ length }, () => sentence());
    return para.join(' ')
  }

  exports.paragraph = paragraph;
  exports.sentence = sentence;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
