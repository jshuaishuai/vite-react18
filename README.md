### 并发模式(concurrent mode)

-   在 React 18 中新加入的可选的并发渲染(concurrent rendering)机制
-   Concurrent 模式是一组 React 的新功能，可帮助应用保持响应，并根据用户的设备性能和网速进行适当的调整
-   在 Concurrent 模式中，渲染不是阻塞的。它是可中断的

> legacy 模式 ReactDOM.renders 会同步渲染，createRoot 会启用 concurrent 并发模式

并发模式

```js
ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
```

同步模式

```js
ReactDom.render(<App />,document.getElementById("root")!);
```

### 批量更新

在 React 18 之前更新状态有同步和异步的，在 Concurrent 模式中更新是以优先级为依据进行合并的，简单说都是批量更新

```js
export default class BatchState extends React.Component<Props> {
    state = { count: 0 };
    handleClick = () => {
        this.setState({ count: this.state.count + 1 });
        console.log(this.state.count);
        this.setState({ count: this.state.count + 1 });
        console.log(this.state.count);
        setTimeout(() => {
            this.setState({ count: this.state.count + 1 });
            console.log(this.state.count);
            this.setState({ count: this.state.count + 1 });
            console.log(this.state.count);
        });
    };
    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.handleClick}>+</button>
            </div>
        );
    }
}
```

> 输出 0 0 1 1
