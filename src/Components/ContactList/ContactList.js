import { connect } from 'react-redux';
import { itemsOperations, itemsSelectors } from '../../redux/contacts';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={s.item}>
        <p className={s.text}>{name}</p>
        <p className={s.number}>{number}</p>
        <button onClick={() => onDeleteContact(id)} className={s.btn}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

const mapStateToProps = state => ({
  contacts: itemsSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(itemsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
