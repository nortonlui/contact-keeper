import React from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
  const contactContext = React.useContext(ContactContext);
  const text = React.useRef('');
  const { filterContact, clearFilter, filtered } = contactContext;

  React.useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  }, [filtered]);

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterContact(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter Contacts..."
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
