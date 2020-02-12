

[https://zachintosh.github.io/slang-ipsum/](https://zachintosh.github.io/slang-ipsum/)

# slang-ipsum

In a world where another lorem ipsum generator shouldn't be needed, it was. **Slang Ipsum** gives you the newest flavor of lorem ipsum generated text yet - the kind our "fellow kids" will be happy to read.<sup>1</sup>

Bask in the hunnit-p dank dopeness of this heckin woke generator. So yolo. So lit.<sup>2</sup>

> <sup>1. Probably not, truthfully, since kids nowadays can't read.</sup><br />
> <sup>2. The author is aware of his inability to properly use slang.</sup>

# API

slang-ipsum exports two function: `sentence()` and `paragraph()`.

## sentence()

```js
import { sentence } from '@digital-taco/slang-ipsum'
// OR if in Node
const { sentence } = require('@digital-taco/slang-ipsum')

const slangText = sentence({ wordCount: 7, slangOnly: true })
// Result:
// At crazy gucci posuere at consectetur swerve congue hangry.
```

`sentence` takes an options object, which has two options. Both are optional.

|Option|Default|Description|
|------|-------|-----------|
|wordCount|Randomized between 4 - 17|The number of words in the generated sentence.|
|slangOnly|false|If true, only slang words are used. All lorem ipsum words are removed.|

## paragraph()

```js
import { paragraph } from '@digital-taco/slang-ipsum'
// OR if in Node
const { paragraph } = require('@digital-taco/slang-ipsum')

const slangParagraph = sentence({ sentenceCount: 5, slangOnly: false })
/** Result:
 Himenaeos magna woke amet bye felicia. Erat et aliquet habitant ipsum bounce cras turpis torquent sapien lacinia beat luctus brah a metus mauris. Ut inceptos fames non curabitur etiam rhoncus et stan nullam donec ac ultrices adulting quisque quis gravida. Ante nibh ad yaas vitae varius savage mollis varius nisl bruh humble brag lit ut. Gassed bye felicia rutrum dope pellentesque fringilla velit.
 */
```

`paragraph` takes an options object, which has two options. Both are optional.

|Option|Default|Description|
|------|-------|-----------|
|wordCount|Randomized between 3 - 10|The number of sentences in the generated paragraph.|
|slangOnly|false|If true, only slang words are used. All lorem ipsum words are removed.|
