import React from 'React';
import { Link } from 'react-router';

const Photo = React.createClass({
    render(){
        
        return (
            <figure className="grid-figure">
                <div className="gris-photo-wrap">
                    <Link to={`/view/${this.props.post.code}`}>
                       {this.props.post.caption}                    
                    </Link>
                </div>
            </figure>
        )
    }
});

export default Photo;