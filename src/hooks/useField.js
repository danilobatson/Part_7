import { useState } from 'react';

const useField = (name) => {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const resetField = () => {
    setValue('');
  };

  return {
    props: {
      name,
      value,
      onChange,
    },
    resetField,
  };
};

export default useField;
