import { ReactComponent as ClickIcon } from '@/assets/click.svg';
import { ReactComponent as ArrowRightIcon } from '@/assets/arrow-right.svg';
import { ReactComponent as SettingsIcon } from '@/assets/settings.svg';
import { ReactComponent as MenuIcon } from '@/assets/menu-icon.svg';
import React from 'react';
import { twMerge } from 'tailwind-merge';

type SVGProps = React.SVGProps<SVGSVGElement> & {
  title?: string | undefined;
};

const createIcon =
  (Icon: React.FC<SVGProps>) =>
  ({ className, ...props }: SVGProps) =>
    <Icon className={twMerge('w-4', className)} {...props} />;

const Click = createIcon(ClickIcon);
const ArrowRight = createIcon(ArrowRightIcon);
const Settings = createIcon(SettingsIcon);
const Menu = createIcon(MenuIcon);

export const Icons = {
  Click,
  ArrowRight,
  Settings,
  Menu,
};
