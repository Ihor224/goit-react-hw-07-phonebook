import { connect } from 'react-redux';
import { itemsSelectors, changeFilter } from '../../redux/contacts';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input type="text" value={value} onChange={onChange} className={s.input} />
  </label>
);

const mapStateToProps = state => ({
  value: itemsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
