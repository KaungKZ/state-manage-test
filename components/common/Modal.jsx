import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { classNames } from "../../contexts/function/common";

export default function Modal({
  isOpen,
  setIsOpen,
  title,
  bannerIcon = null,
  children,
  loading,
}) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        open={isOpen}
        className="relative z-10"
        onClose={() => {
          if (loading) return {};

          return setIsOpen(false);
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {/* children */}
              <Dialog.Panel className="min-w-[710px] relative max-w-3xl text-center transform overflow-hidden rounded-lg bg-white pt-8 pr-8 pb-6 pl-8 text-left align-middle shadow-xl transition-all">
                {bannerIcon && bannerIcon()}
                <Dialog.Title
                  as="h5"
                  className={classNames(
                    bannerIcon ? "mt-6" : "",
                    "font-bold text-gray-500 mt-8"
                  )}
                >
                  {title}
                </Dialog.Title>
                {children}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="dialog-close-icon absolute right-0 top-0 hover:bg-gray-200 transition w-9 h-9 bg-gray-100 flex justify-center items-center rounded-tr-lg rounded-bl-lg"
                >
                  <i className="fas fa-times text-lg" />
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
