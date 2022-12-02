import { ComponentPropsWithInnerRef } from '@/utils/types';
import { twMerge } from 'tailwind-merge';

const Header: React.FC<ComponentPropsWithInnerRef<'div'>> = ({
  innerRef,
  className,
  ...props
}) => <div className={twMerge('mb-5 flex flex-col items-start gap-4', className)} ref={innerRef} {...props} />;

export default Header;