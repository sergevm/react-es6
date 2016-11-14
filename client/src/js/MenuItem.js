import React from 'react';
import {Link} from 'react-router';

export default class MenuItem extends React.Component
{
    constructor(props, context) {
        super(props);
        this.router = context.router;
    }
    render() {
        var {pathname, ...other} = this.props;
        let className = pathname.startsWith(this.props.to) ? 'active' : '';
        //let className = this.router.isActive(this.props.to, true) ? 'active' :'';
        
        return (<li className={className} role='presentation'>
                    <Link {...other}>
                        {this.props.children}
                    </Link> 
                </li>);
    }
}

MenuItem.propTypes = {
    to: React.PropTypes.string.isRequired,
    children: React.PropTypes.any,
    pathname: React.PropTypes.string
};

MenuItem.contextTypes = {
    router: React.PropTypes.object.isRequired
};