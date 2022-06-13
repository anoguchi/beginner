# Getting Started with CSS

That star * indicates all of the elements inside of your document. Universal selector has no specificity to it.
If you are comparing two styles, they're exactly the same, the HTML element versus the universal selector, the universal selector loses. It's very easily overwritten.

Pseudo-classes example:

```
Qualquer botão sobre o qual o ponteiro do usuário esteja passando sobre

button:hover {
  color: blue;
}
```

The double colon :: is a pseudo element as opposed to a pseudo class. Is often having to do with some functionality. So before the text or after the text.

```
*,
*::before,
*::after {
  box-sizing: inherit;
}
```

Margins collapse when they encounter each other. If they are different (like one has 1rem and other has 2rem) values the biggest wins. This wierd applies in vertical direction.

One of the things that Grid does that Flexbox does not is Grid can overlap two cells on top of each other.


## Best Practices

Inside text always put links with underlines.