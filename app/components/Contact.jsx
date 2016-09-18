import {Link} from 'react-router'

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }
  handleDelete(e) {
    this.props.deleteContact(this.props.data.id);
  }
  render() {
    return (
      <li className="media col-md-6 col-lg-4">
        <div className="thumbnail">
          <img className="media-object" src={"app/img/faces/" + this.props.data.imageId + ".jpg"} />
        </div>
        <div className="media-heading">
          <h3>
            {this.props.data.name}
            <small>
              <Link to={"/contacts/edit/" + this.props.data.id}><span className="glyphicon glyphicon-pencil"></span></Link>
              <a href="#" className="delete-contact" onClick={this.handleDelete.bind(this)}>
                <span className="glyphicon glyphicon-trash"></span>
              </a>
            </small>
          </h3>
        </div>
        <div className="media-body">
          <dl>
            <dt>Phone Number:</dt>
            <dd>{this.props.data.phone}</dd>
            <dt>Email:</dt>
            <dd>{this.props.data.email}</dd>
          </dl>
        </div>
        <hr />
      </li>
    );
  }
}

export default Contact;
