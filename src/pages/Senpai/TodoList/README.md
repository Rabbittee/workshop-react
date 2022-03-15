# Form for React

[無障礙表格](https://zh-hant.reactjs.org/docs/accessibility.html#accessible-forms)
[W3C](https://www.w3.org/WAI/tutorials/forms/labels/)

label 的 for 在 react 中要寫成 htmlFor

```JavaScript
<label htmlFor="namedInput">Name:</label>
<input id="namedInput" type="text" name="name"/>
// or
<label>
  <input type="text" name="name" />
</label>

```

在陣列新增資料

```JavaScript
const [dataList, setDataList] = useState(() => storage().get() || []);
function handleSubmit(addItem) {
  setDataList((list) => {
    return [...list, addItem];
  });

  storage.set(addItem)
}
```

## question

- 要把資料放在外層還是放在內層？

  > 外層，邏輯也放在外層處理，保持 component 的邏輯單純

- 還不知道該如何更改特定 item 的 done state
  > 在呼叫的時候帶入該 item 的 id
