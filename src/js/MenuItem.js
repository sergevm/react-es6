import React from 'react';
import {Link} from 'react-router';

export default class MenuItem extends React.Component
{
    constructor(props, context) {
        super(props);
        this.router = context.router;
    }
    render() {
        let className = this.router.isActive(this.props.to, true) ? 'active' :'';
        
        return (<li className={className} role='presentation'>
                    <Link {...this.props}>
                        {this.props.children}
                    </Link> 
                </li>);
    }
}

MenuItem.propTypes = {
    to: React.PropTypes.string.isRequired,
    children: React.PropTypes.any
};

MenuItem.contextTypes = {
    router: React.PropTypes.object.isRequired
};