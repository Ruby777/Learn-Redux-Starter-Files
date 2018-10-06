import React from 'React';
import Photo from './Photo';

const PhotoGrid = React.createClass({

  render() {
    return (
      <div className="photo-grid">
        console.log(props.data);
        {this.props.posts.map((post, i) => <Photo {...
          this.props} key={i} i={i} post={post} />)}
          console.log(props.data);
      </div>
    )
  }
});

export default PhotoGrid;