'use client';

import { Toaster as Sonner } from 'sonner';

const Toaster = ({ ...props }) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-[#13131A] group-[.toaster]:text-[#EDEDED] group-[.toaster]:border group-[.toaster]:border-white/[0.08] group-[.toaster]:shadow-lg group-[.toaster]:rounded-xl',
          description: 'group-[.toast]:text-[#9CA3AF]',
          actionButton:
            'group-[.toast]:bg-white group-[.toast]:text-[#0B0B0F]',
          cancelButton:
            'group-[.toast]:bg-white/[0.05] group-[.toast]:text-[#EDEDED]',
          success: 'group-[.toaster]:text-[#EDEDED]',
          error: 'group-[.toaster]:text-[#EDEDED]',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
