# Form for React

[無障礙表格](https://zh-hant.reactjs.org/docs/accessibility.html#accessible-forms)
[W3C](https://www.w3.org/WAI/tutorials/forms/labels/)

label 的 for 在 react 中要寫成 htmlFor

```JavaScript
<label htmlFor="namedInput">Name:</label>
<input id="namedInput" type="text" name="name"/>
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

- 資料在外層傳進去的要怎麼去修改...
- 要把資料放在外層還是放在內層？
- 點了新增資料之後，畫面上有更新，但卻沒有新增到 localStorage，要等下一次才會把這次的 data 給新增上去
- 還不知道該如何更改特定 item 的 done state
