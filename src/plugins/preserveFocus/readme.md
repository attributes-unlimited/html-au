# Preserve Focus

It is not recommended to re-render forms, but if you do this plug-in attempts to keep focus and cursor position on the form-ish element

```
<div form-ish
  au-preserve-focus 
  au-trigger="input">
  <input name="first_name" value="${this.model.first_name}"/>
</div>

```


