# わからん
## 引数はどこへ？
```App.js
Class App extends Component {
  render(){
    <TodoInput addTodo={this.addTodo} />
  }
}
```
```App.js
Class App extends Component {
  addTodo(title) {
    const { 
      tasks,
      uniqueId
     }  = this.state;

    tasks.push({
      title,
      id: uniqueId,
    });

    this.setState({
      tasks,
      uniqueId: uniqueId + 1,
    });
  }
}
```
### 説1
メソッド呼び出し時に引数はいらない。
### 説2
stateはどっからでも呼び出し可能。
## 答え
this.addTodoでは、addTodoプロパティに対し、関数オブジェクトを渡しているだけ。  
関数は末尾に()をつけることで初めて呼び出される。  
addTodoプロパティに渡された関数オブジェクトaddTodoは、TodoInputdo.jsで次のように実行される。
```JavaScript
his.props.addTodo(inputValue);
```

## onChangeプロパティに関数オブジェクトを渡しているのはなぜ？しかも引数あり
```
class TodoInput extends Component {
  handleChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <input placeholder="New Todo" value={this.state.inputValue} onChange={this.handleChange} />
      </div>
    );
  }
}
```

### 説1
onChangeがそういう設定
### 答え
Reactでは全てのイベントをSynthetic Eventとして扱う。理由はクロスブラウザ対応のため。  
eはイベントが発生した時に、Synthetic Eventとしてイベントハンドラに渡す役割を持つ。
e.targetの中身がinputタグだった。
```
<input placeholder="New Todo" value="a" data-cip-id="jQuery342845639">
```
[参考](http://udomomo.hatenablog.com/entry/2017/10/14/125704)

## spread operatorじゃなきゃダメな理由は？
```
    const list = this.props.tasks.map(todo => {
      return <TodoItem {...todo} key={todo.id} />
    });
```
todoはオブジェクト。...todoもオブジェクト。なぜ、todoではエラーになるのか。

## 答え
{値}だけじゃダメ。属性名={値}が原則で。ただし、まとめて属性を送りたい時は{...値}として送ることができる。