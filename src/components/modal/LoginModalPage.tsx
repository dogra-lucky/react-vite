import {useRef} from "react";
import {LoginModal} from "./LoginModal";

export const LoginModalPage = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleOpen = () => {
    modalRef.current?.showModal();
  };

  return (
    <>
      <p>Click below to sign in.</p>
      <button onClick={handleOpen}>Open Login</button>
         <LoginModal ref={modalRef} />
    </>
  );
};
