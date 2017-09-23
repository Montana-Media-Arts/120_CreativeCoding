# THIS IS A LEVEL 1 HEADER

## THIS IS A LEVEL 2 HEADER (note the space between the '#' and heading text)

### THIS IS A LEVEL 3 HEADER (That space is necessary)

#### THIS IS A LEVEL 4 HEADER (That space is necessary)



## Paragraphs

This is a paragraph. This paragraph requires no extra markup to signify it as such.

An empty line between text blocks signifies a new paragraph.

Above these paragraphs are headers. Notice that there is a new-blank-line after each header before the proceeding content. The use of new lines is important in markup.

## Inline Syntax Markup

To mark certain words as bold we surround them with two **asterisks**. To mark certain words as emphasized or italic we surround them with a single *asterisk* or _underline dashes_.


## Links

Link text is placed between square brackets, and the associated URL link follows between parenthesis. [This is an example link](https://michaelmusick.com) Notice that there are no spaces between the square brackets and the parenthesis. When rendered only the text between the brackets will be shown, the URL or link between the paranthesis will be hidden.

# Images

Similar to links, images are added with an exclamation mark, followed by square brackets with an image description, followed by the exact or relative url to the image in parenthesis. Again notice that there are no spaces between the exclamation mark, square brackets, or paranthesis.

![This is an Example Image](../imgs/markdown_example_in_atom.jpg)

Do you see how the image URL is proceeded with two periods? This tells the system to go up one directory (or folder) relative to whereever _this_ file is stored.

# Formatted Code

We can identify code in a paragraph using the back-tick character. As with other inline markups, the specified text is surrounded on both sides with a back tick mark. The back-tick is the leftmost key on the number line, below the esc key on most American keyboards. `var Der = 20`.

We can write code blocks by surrounding our lines of code witha line of three backticks on the top and bottom. After the opening set of backticks, you should write the language you are writing (ie. markdown, html, css, javascript). See [https://help.github.com/articles/creating-and-highlighting-code-blocks/] for more info. This code will maintain its formatting, including tabs, new lines, spaces, etc.

```html
<body>
	<h1>HTML Code Example</h1>
	<p>This is a Formatted HTML code block, within our markdown example document.<p>
</body>
```

## Lists

Lists are simply line items prepended with dashes to create an unordered list, or numbers to create an ordered list. (NOTE: you must add a blank line between the paragraph and the first list item. Also, you should not have blank lines between list items that belong to the same list.)

- list item 1
- list item 2


1. List item 1
2. List item 2

- this is a hierarchical list
	- it has multiple levels of list items
	- each level is distinguished through a tab
- lists can also be mixed together
	1. With ordered lists
	2. inside unordered lists
		- and unordered lists
		- inside ordered lists

## HTML inside Markdown

Lastly, you can further extend markdown with HTML. This is particularly useful for adding embedded videos from [YouTube](youtube.com).
