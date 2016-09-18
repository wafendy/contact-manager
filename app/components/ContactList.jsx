import {Link} from 'react-router'
import Contact from './Contact'

class ContactList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: JSON.parse(localStorage.getItem('contacts') || '[]')
    }
  }
  deleteContact(contactId) {
    var contacts = this.state.contacts

    for (var i = 0; i < contacts.length; i++) {
      if (contacts[i].id == contactId) {
        contacts.splice(i, 1);
        break;
      }
    }

    localStorage.setItem('contacts', JSON.stringify(contacts));
    this.setState({contacts: contacts})
  }
  render() {
    var _this = this
    return (
      <div>
        <h2 className="page-header text-center">List of contacts</h2>
        <p className="text-center">
          <Link to="/contacts/new" className="btn btn-lg btn-outline">Add Contact</Link>
        </p>
        <ul className="media-list row contacts-container">
          {
            this.state.contacts.map(function(contact) {
             return <Contact key={contact.id} data={contact} deleteContact={_this.deleteContact.bind(_this)} />;
            })
          }
        </ul>
      </div>
    );
  }
}

export default ContactList;
