import {forwardRef} from "react";

export const LoginModal = forwardRef<HTMLDialogElement,object>((props, ref) => {
  return (
    <>
      <dialog ref={ref}>
        <h2>Login to Your Account</h2>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="Password" />
        <button>submit</button>
        <br />
        <button type="button" onClick={() => {
            if (ref!=null&& typeof ref !== "function" && ref.current){
                ref.current.close()
            }
        }}>Close</button>
      </dialog>
    </>
  );
});
