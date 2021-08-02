import React, { FC } from "react";

interface Props {
    count: number;
}

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
