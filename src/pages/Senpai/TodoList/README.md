# Form for React

[無障礙表格](https://zh-hant.reactjs.org/docs/accessibility.html#accessible-forms)
[W3C](https://www.w3.org/WAI/tutorials/forms/labels/)

label 的 for 在 react 中要寫成 htmlFor
```JavaScript
<label htmlFor="namedInput">Name:</label>
<input id="namedInput" type="text" name="name"/>
```

## question
資料在外層傳進去的要怎麼去修改...
要把資料放在外層還是放在內層？
