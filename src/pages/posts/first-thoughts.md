---
layout: ../../layouts/markdown.astro
title: "Comprehensive Markdown Test"
author: "Jack"
date: 2025-04-22
description: "A test file demonstrating common Markdown features"
tags: ["markdown", "test", "reference", "documentation"]
---

# Markdown Comprehensive Test File

This document showcases common Markdown syntax elements.

## Basic Text Formatting

This is **bold text** and this is also __bold text__.

This is *italic text* and this is also _italic text_.

This is ***bold and italic text*** and this is also ___bold and italic___.

This is ~~strikethrough text~~.

## Headings

# Heading Level 1
## Heading Level 2
### Heading Level 3
#### Heading Level 4
##### Heading Level 5
###### Heading Level 6

## Lists

### Unordered Lists

* Item 1
* Item 2
  * Nested item 2.1
  * Nested item 2.2
* Item 3

- Alternative item 1
- Alternative item 2
  - Nested item
- Alternative item 3

### Ordered Lists

1. First item
2. Second item
   1. Nested item 2.1
   2. Nested item 2.2
3. Third item

### Task Lists

- [x] Completed task
- [ ] Incomplete task
- [ ] Another task

## Links

[Basic link to Google](https://www.google.com)

[Link with title](https://www.example.com "Example Website")

Automatic link: <https://www.example.com>

Reference-style link: [Reference link][reference]

[reference]: https://www.reference.com "Reference Website"

## Images

![Astro](https://picsum.photos/200/300)

## Blockquotes

> This is a blockquote
>
> > This is a nested blockquote
>
> Back to the first level

## Code

Inline `code` with backticks

```
# Code block without syntax highlighting
print("Hello World")
```

```python
# Code block with syntax highlighting
def hello_world():
    print("Hello, World!")
    return True
```

## Horizontal Rules

Three or more hyphens:

---

Three or more asterisks:

***

Three or more underscores:

___

## Tables

| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
| Cell 7   | Cell 8   | Cell 9   |

| Left-aligned | Center-aligned | Right-aligned |
|:-------------|:--------------:|-------------:|
| Left         | Center         | Right        |
| Text         | Text           | Text         |

## Footnotes

Here's a sentence with a footnote.[^1]

[^1]: This is the footnote text.

## Definition Lists

Term
: Definition for the term

Another Term
: Another definition
: A second definition

## Escaping Characters

\*This text is surrounded by literal asterisks\*

## HTML in Markdown

<div style="color: red;">
  This is <strong>HTML</strong> in Markdown