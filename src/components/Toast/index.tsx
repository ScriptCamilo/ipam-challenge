import * as RadixToast from '@radix-ui/react-toast';
import * as React from 'react';

import './styles.css';

interface ToastProps {
  title: string;
  description: string;
  children: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Toast(props: ToastProps) {
  const { title, description, children, open, setOpen } = props;

  return (
    <>
      <RadixToast.Root className="ToastRoot" open={open} onOpenChange={setOpen}>
        <RadixToast.Title className="ToastTitle">{title}</RadixToast.Title>
        <RadixToast.Description>
          {description}
        </RadixToast.Description>
        <RadixToast.Action className="ToastAction" asChild altText="Goto schedule to undo">
          {children}
        </RadixToast.Action>
      </RadixToast.Root>

      <RadixToast.Viewport className="ToastViewport" />
    </>
  );
}
