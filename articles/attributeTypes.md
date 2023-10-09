# Attribute types

One of the ergonomic's I'm not happy about is remembering what each attribute needs.

Here is my guide to sorting this out.

## selector types
These types are css selectors appropriate for use with querySelector() or closest

## url types
These use querystring params to pass information around

## Enumeration types
There is a discrete list of values that can be used.

au-swap="innerHTML" or "outerHTML"

## verbs

This is a modifier for selector and attribute types.

This can be thought of as an enumeration type at the beginning of a selector or url type.

- post
- get
- patch

## Variable
au-host is a variable type. If functions as a placeholder for the host variable. 


## attributes list

- au-ced verb + url
- au-server verb + url
- au-target verb + selector
- au-include verb + selector
- au-trigger enumeration
- au-swap  enumeration
- au-host variable

## shorthand

Some attributes and verbs are automatically added if missing. 

They come form the defaults in the configs, or huristics try to figue the out based on other values.


