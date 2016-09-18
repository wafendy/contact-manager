import {Link} from 'react-router'

class ContactForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      id: this.getUniqueKey(),
      imageId: this.getRandomNumber(),
      name: '',
      email: '',
      phone: '',
      isEdit: this.props.params.contactId
    }
  }
  componentDidMount() {
    if(this.state.isEdit) {
      var contacts = JSON.parse(localStorage.getItem('contacts') || '[]');

      for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].id == this.props.params.contactId) {
          this.setState({
            id: contacts[i].id,
            imageId: contacts[i].imageId,
            name: contacts[i].name,
            email: contacts[i].email,
            phone: contacts[i].phone
          })
          break;
        }
      }
    }
  }
  handleNameChange(e) {
    this.setState({name: e.target.value});
  }
  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }
  handlePhoneChange(e) {
    this.setState({phone: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    var name = this.state.name.trim();
    var email = this.state.email.trim();
    var phone = this.state.phone.trim();
    if (!name || !email || !phone) {
      return;
    }

    var editing = this.state.isEdit;

    var contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    var stateClone = Object.assign({}, this.state);
    delete stateClone.isEdit;

    if(editing) {
      for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].id == this.props.params.contactId) {
          contacts[i].name = this.state.name;
          contacts[i].email = this.state.email;
          contacts[i].phone = this.state.phone;
          break;
        }
      }
    } else {
      contacts.push(stateClone)
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
    this.context.router.push('/');
  }
  getUniqueKey() {
    return ("0000" + (Math.random()*Math.pow(36,4) << 0).toString(36)).slice(-4)
  }
  getRandomNumber() {
    return Math.floor(Math.random() * 15) + 1
  }
  render() {
    if(this.state.isEdit) {
      this.formTitle = 'Edit'
    } else {
      this.formTitle = 'Create'
    }

    return (
      <div>
        <h2 className="page-header text-center">{this.formTitle} Contact</h2>
        <form role="form" className="form-horizontal contract-form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label className="col-sm-4 control-label">Full name:</label>
            <div className="col-sm-6">
              <input type="text" className="form-control contact-name-input" value={this.state.name} onChange={this.handleNameChange.bind(this)} />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-4 control-label">Email address:</label>
            <div className="col-sm-6">
              <input type="email" className="form-control contact-email-input" value={this.state.email} onChange={this.handleEmailChange.bind(this)} />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-4 control-label">Telephone number:</label>
            <div className="col-sm-6">
              <input type="tel" className="form-control contact-tel-input" value={this.state.phone} onChange={this.handlePhoneChange.bind(this)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-4 col-sm-3">
              <button type="submit" className="btn btn-outline btn-lg btn-block">Submit</button>
            </div>
            <div className="col-sm-3">
              <Link to={`/`} className="btn btn-outline btn-lg btn-block">Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

ContactForm.contextTypes = {
    router: function() {
      React.PropTypes.func.isRequired
    }
};

export default ContactForm;
