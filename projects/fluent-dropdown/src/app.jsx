import { AwardIcon } from 'lucide-react';
import React from 'react';
import { Dropdown } from './dropdown';

const Menu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative flex">
      <button
        type="button"
        className="relative -m-2.5 inline-flex cursor-pointer items-center justify-center rounded-md p-2.5 text-zinc-700"
        onClick={() => setIsOpen((s) => !s)}>
        <span className="sr-only">Open main menu</span>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="fill-none start-[1.5] size-6 stroke-current">
          <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
      <Dropdown isOpen={isOpen} onOpenChange={setIsOpen} initial="primary">
        <Dropdown.Menu menuId="primary">
          <Dropdown.Item icon={<AwardIcon />}>Portfolio</Dropdown.Item>
          <Dropdown.Item icon={<AwardIcon />}>Make Reservation</Dropdown.Item>
          <Dropdown.Item icon={<AwardIcon />} targetMenu="settings">
            Settings
          </Dropdown.Item>
          <Dropdown.Item icon={<AwardIcon />} targetMenu="lang">
            Languages
          </Dropdown.Item>
          <Dropdown.Item icon={<AwardIcon />}>Affiliates</Dropdown.Item>
          <Dropdown.Item icon={<AwardIcon />}>Contact</Dropdown.Item>
        </Dropdown.Menu>
        <Dropdown.Menu title="Sub Menu" menuId="settings">
          <Dropdown.Item icon={<AwardIcon />}>Accout</Dropdown.Item>
          <Dropdown.Item icon={<AwardIcon />}>Preferences</Dropdown.Item>
          <Dropdown.Item icon={<AwardIcon />}>History</Dropdown.Item>
          <Dropdown.Item icon={<AwardIcon />}>Billing</Dropdown.Item>
        </Dropdown.Menu>
        <Dropdown.Menu title="Sub Menu" menuId="lang">
          <Dropdown.Item icon={<AwardIcon />}>English</Dropdown.Item>
          <Dropdown.Item icon={<AwardIcon />}>French</Dropdown.Item>
          <Dropdown.Item icon={<AwardIcon />}>Spanish</Dropdown.Item>
          <Dropdown.Item icon={<AwardIcon />}>Russian</Dropdown.Item>
          <Dropdown.Item icon={<AwardIcon />}>Hindi</Dropdown.Item>
          <Dropdown.Item icon={<AwardIcon />}>Arabic</Dropdown.Item>
          <Dropdown.Item icon={<AwardIcon />}>Japanese</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export const App = () => {
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center p-6 lg:grid-cols-[auto_1fr_auto] lg:px-8"
          aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="/logo.svg" alt="" />
            </a>
          </div>

          <div className="hidden justify-center gap-x-12 lg:flex">
            <a href="#" className="nav-link">
              Our Menu
            </a>
            <a href="#" className="nav-link">
              Services
            </a>
            <a href="#" className="nav-link">
              Reservation
            </a>
            <a href="#" className="nav-link">
              Gallery
            </a>
          </div>
          <Menu />
        </nav>
      </header>
      <main>
        <div className="relative isolate">
          <svg
            className="radial-mask absolute inset-x-0 -top-6 -z-10 h-[64rem] w-full stroke-zinc-200/60 lg:top-0"
            aria-hidden="true">
            <defs>
              <pattern
                id="grid_pattern"
                width={200}
                height={200}
                x="50%"
                patternUnits="userSpaceOnUse">
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid_pattern)" />
          </svg>
          <div
            className="absolute top-0 right-0 left-2/4 -z-10 -ml-24 overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true">
            <div className="bg-aura-gradient aspect-[801/1036] w-[50rem] opacity-40" />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl pt-36 px-6 pb-32 sm:pt-60 lg:pt-32 lg:px-8">
              <div className="mx-auto max-w-2xl items-center gap-x-14 lg:mx-0 lg:flex lg:max-w-none">
                <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold leading-none -tracking-wide text-zinc-900 sm:text-6xl">
                    Ultrices sagittis orci a scelerisque purus
                  </h1>

                  <p className="mt-6 text-lg leading-8 text-zinc-600 sm:max-w-md lg:max-w-none">
                    Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in
                    quis cupidatat mollit aute velit. Et labore commodo nulla
                    aliqua proident mollit ullamco exercitation tempor. Sint
                    aliqua anim nulla sunt mollit id pariatur in voluptate
                    cillum.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-indigo-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm outline-offset-2 outline-indigo-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2">
                      Get started
                    </a>
                    <a
                      href="https://github.com/oviirup/byte-size-creations/tree/main/projects/fluent-dropdown"
                      target="_blank"
                      className="text-sm font-semibold leading-6 text-zinc-900">
                      GitHub Repo <span aria-hidden="true">{'->'}</span>
                    </a>
                  </div>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <Image src="https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?q=80&w=500" />
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <Image src="https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=500" />
                    <Image src="https://images.unsplash.com/photo-1560624052-449f5ddf0c31?q=80&w=500" />
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <Image src="https://images.unsplash.com/photo-1613946069412-38f7f1ff0b65?q=80&w=500" />
                    <Image src="https://images.unsplash.com/photo-1583426189374-8090f9dd26cf?q=80&w=500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

const Image = (props) => {
  return (
    <img
      className="aspect-[2/3] w-full rounded-xl border border-zinc-200/50 bg-zinc-900/10 object-cover shadow-lg"
      {...props}
    />
  );
};
