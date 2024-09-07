import {
  SignedIn,
  SignedOut,
  SignUpButton,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <SignedOut>
            <SignUpButton
              mode="modal"
              className="btn btn-outline mr-4"
            ></SignUpButton>
            <SignInButton
              mode="modal"
              className="btn btn-primary"
            ></SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
