import { twMerge } from 'tailwind-merge';
import { WithComponentProps } from '@/utils/types';

const Modal: React.FC<WithComponentProps<'div'>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        'fixed top-0 left-0 z-50 h-full w-full overflow-y-auto overflow-x-hidden',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Modal;