import { Input as BaseInput } from '@nextui-org/react';
import { forwardRef } from 'react';

const Input = forwardRef(props => {
  const { classNames, ...otherProps } = props;

  return (
    <BaseInput
      size="lg"
      placeholder=" "
      variant="bordered"
      labelPlacement="outside"
      classNames={{ inputWrapper: `shadow-none ${classNames}` }}
      {...otherProps}
    />
  );
});

export default Input;
