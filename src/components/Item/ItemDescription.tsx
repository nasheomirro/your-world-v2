import { WithComponentProps } from '@/utils/types';
import { twMerge } from 'tailwind-merge';

const ItemDescription: React.FC<WithComponentProps<'p'>> = ({
  innerRef,
  className,
  ...props
}) => (
  <p
    ref={innerRef}
    className={twMerge('my-2 block line-clamp-3', className)}
    {...props}
  />
);

export default ItemDescription;
