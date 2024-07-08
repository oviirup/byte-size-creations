import clsx from 'clsx';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { twMerge } from 'tailwind-merge';

/**
 * Creates a formatted className from given arguments
 *
 * @param {...any} args - String, array, or object
 * @returns {string} Sanitized class-names
 */
export function cn(...args) {
  return twMerge(clsx(args));
}

const TIMEOUT = 250;

/** @type {React.Context<import('./types').DropdownContextProps>} */
const DropdownContext = React.createContext({
  initial: 'primary',
  menu: 'primary',
  closeMenu: () => {},
  toggleMenu: (menu) => {},
  getHeight: (el) => {},
});
const useDropdown = () => React.useContext(DropdownContext);

/** @type {React.FC<import('./types').DropdownProps>} */
const DropdownRoot = ({
  isOpen,
  onOpenChange,
  className,
  initial = 'primary',
  ...props
}) => {
  const [activeMenu, setActiveMenu] = React.useState(initial);
  /** @type {React.MutableRefObject<HTMLDialogElement | null>} */
  const dialogRef = React.useRef(null);
  /** @type {React.MutableRefObject<HTMLDivElement | null>} */
  const wrapperRef = React.useRef(null);

  const closeMenu = () => onOpenChange(false);
  /** @type {React.MouseEventHandler<HTMLDivElement>} */
  const closeModal = (event) => {
    if (event.target === event.currentTarget) closeMenu();
  };

  const getHeight = (/** @type {HTMLElement} */ el) => {
    if (!wrapperRef.current || !el) return;
    const targetHeight = el.offsetHeight;
    wrapperRef.current.style.setProperty('height', `${targetHeight}px`);
  };

  // get the initial height
  React.useEffect(() => {
    if (isOpen) {
      setActiveMenu(initial);
      wrapperRef.current && getHeight(wrapperRef.current);
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      {...props}
      className={cn(
        'group absolute top-full -right-2 left-auto z-50 mt-2 bg-transparent *:transition-all *:duration-[--transition-duration]',
        className,
      )}
      data-position="top right"
      style={{ '--transition-duration': `${TIMEOUT}ms` }}>
      <CSSTransition
        nodeRef={wrapperRef}
        in={isOpen}
        timeout={TIMEOUT}
        classNames={{
          enter: `-translate-y-2 scale-75 opacity-0 shadow-none [&+*]:opacity-0 [&+*]:backdrop-saturate-100`,
          exit: `-translate-y-2 scale-75 opacity-0 shadow-none [&+*]:opacity-0 [&+*]:backdrop-saturate-100`,
        }}
        onEnter={() => dialogRef.current?.show()}
        onExited={() => dialogRef.current?.close()}>
        <div
          className="relative inset-0 z-10 w-52 origin-top-right overflow-hidden rounded-lg border border-zinc-300 bg-white shadow-xl [&_ul]:py-2"
          ref={wrapperRef}>
          <DropdownContext.Provider
            value={{
              initial,
              menu: activeMenu,
              toggleMenu: setActiveMenu,
              closeMenu,
              getHeight,
            }}>
            {props.children}
          </DropdownContext.Provider>
        </div>
      </CSSTransition>
      <div
        className="fixed inset-0 -z-10 bg-black/10 backdrop-saturate-50"
        onClick={closeModal}
      />
    </dialog>
  );
};

/** @type {React.FC<import('./types').DropdownItemProps>} */
const DropdownItem = ({ icon, inset, targetMenu, ...props }) => {
  const { toggleMenu, closeMenu } = useDropdown();
  /** @type {React.MouseEventHandler<HTMLElement>} */
  const handleClick = (event) => {
    if (typeof targetMenu === 'string') toggleMenu(targetMenu);
    else setTimeout(() => closeMenu(), 5);
    props.onClick?.(event);
  };
  return (
    <li
      className={cn(
        'flex h-10 cursor-pointer items-center gap-2 px-3 text-sm text-zinc-800 transition-colors select-none hover:bg-zinc-500/10',
        !icon && inset && 'pl-9',
      )}
      {...props}
      onClick={handleClick}>
      <span className="[&>.lucide]:mr-1 [&>.lucide]:size-4 [&>.lucide]:text-current">
        {icon}
      </span>
      {props.children}
      {targetMenu && (
        <ChevronRight size={12} className="ml-auto stroke-zinc-400" />
      )}
    </li>
  );
};

/** @type {React.FC<import('./types').DropdownSubProps>} */
const DropdownMenu = ({ title, menuId, ...props }) => {
  const { menu, initial: primary, toggleMenu, getHeight } = useDropdown();
  /** @type {React.MutableRefObject<HTMLUListElement | null>} */
  const menuRef = React.useRef(null);
  const isPrimary = menuId === primary;

  return (
    <CSSTransition
      nodeRef={menuRef}
      in={menu === menuId}
      timeout={TIMEOUT}
      unmountOnExit
      classNames={{
        enter: `translate-x-full data-[primary]:-translate-x-full`,
        enterActive: `!translate-x-0 transition-all duration-[--transition-duration]`,
        exit: `absolute`,
        exitActive: `translate-x-full transition-all duration-[--transition-duration] data-[primary]:-translate-x-full`,
      }}
      onEnter={() => menuRef.current && getHeight(menuRef.current)}>
      <ul
        {...props}
        data-menu={menuId}
        data-primary={isPrimary ? '' : undefined}
        className="inset-x-0 top-0"
        ref={menuRef}>
        {!isPrimary && (
          <li
            className="group/li mb-1 flex h-10 cursor-pointer items-center gap-2 border-b border-zinc-100 px-2 pb-1 select-none"
            onClick={() => toggleMenu(primary)}>
            <button className="rounded p-1 group-hover/li:bg-zinc-500/10">
              <ArrowLeft size={16} className="stroke-zinc-500" />
            </button>
            <span className="text-sm text-zinc-500">{title}</span>
          </li>
        )}
        {props.children}
      </ul>
    </CSSTransition>
  );
};

export const Dropdown = Object.assign(DropdownRoot, {
  Item: DropdownItem,
  Menu: DropdownMenu,
});
