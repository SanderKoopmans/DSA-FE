import { Component } from 'react';
import { UpOutlined, DownOutlined } from '@ant-design/icons';

import "./card.css";

class Card extends Component {

    constructor(props) {
        super(props);
        this.state = { expanded: false };

    }

    toggleExpand = () => this.setState(prevState => ({ expanded : !prevState.expanded }))

    
    render() {
        return (
            <div className="card">
                <div className="card-title">
                    <span>{this.props.title}</span>
                    {this.state.expanded ? <UpOutlined onClick={this.toggleExpand} data-testid="UpArrow" /> : <DownOutlined onClick={this.toggleExpand} data-testid="DownArrow"/>}
                </div>
                { this.state.expanded && (<div>
                    {this.props.children}
                </div>)}
            </div>
        ) 
    }

}

export default Card;
