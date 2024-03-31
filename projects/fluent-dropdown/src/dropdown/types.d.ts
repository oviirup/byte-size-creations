import React from 'react';

export type DropdownProps = React.HTMLAttributes<HTMLDialogElement> & {
  /** set the id of the primary menu */
  isOpen: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  initial?: string;
};

export type DropdownContextProps = {
  initial: string;
  menu: string;
  closeMenu: () => void;
  getHeight: <El extends HTMLElement = HTMLElement>(el: El) => void;
  toggleMenu: React.Dispatch<React.SetStateAction<string>>;
};

export type DropdownItemProps = React.HTMLAttributes<HTMLElement> & {
  icon?: React.ReactNode;
  inset?: boolean;
  targetMenu?: string;
};

export type DropdownSubProps = React.HTMLAttributes<HTMLElement> & {
  menuId: string;
};

// allow custom css props
declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}
