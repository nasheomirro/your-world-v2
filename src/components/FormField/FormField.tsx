import { WithComponentProps } from '@/utils/types';
import { twMerge } from 'tailwind-merge';

const FormField: React.FC<WithComponentProps<'div'>> = ({
  innerRef,
  className,
  ...props
}) => (
  <div
    ref={innerRef}
    className={twMerge('my-1 flex flex-col pr-3', className)}
    {...props}
  />
);

export default FormField;
