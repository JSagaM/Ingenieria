import "../index.css";
// import backgroundImage from "../assets/imgs/signinbg.jpg";
import logo from "../assets/imgs/logo.jpg";
import { SimpleButton } from "./SimpleButton.jsx";

export function SignIn() {
  return (
    <div className="bg-[url('./assets/imgs/signinbg.jpg')] justify-center flex-wrap  gap-60 bg-cover bg-no-repeat bg-center flex items-center min-h-screen">
      <div className="  rounded-3xl bg-white p-12 grid items-center justify-center" >
        <img className="m-auto pb-10 " src={logo} alt="logo" />

        <h2 className="text-3xl font-main font-bold pb-7">Sign In</h2>

        <form className="w-[18rem] grid align-center gap-4 md:w-[20rem]">
          <label className="text-xs text-custom-dark font-medium">Name:</label>
          <input
            className="bg-background-main rounded-[4px]"
            type="text"
            placeholder=""
          />

          <label className="text-xs text-custom-dark font-medium">
            Lastname:
          </label>
          <input
            className=" bg-background-main rounded-[4px]"
            type="text"
            placeholder=""
          />

          <label className="text-xs text-custom-dark font-medium">
            Username:
          </label>
          <input
            className=" bg-background-main rounded-[4px]"
            type="text"
            placeholder=""
          />

          <label className="text-xs text-custom-dark font-medium">
            Password:
          </label>
          <input
            className=" bg-background-main rounded-[4px]"
            type="text"
            placeholder=""
          />

          <label className="text-xs text-custom-dark font-medium">
            Confirm Password:
          </label>
          <input
            className=" bg-background-main rounded-[4px]"
            type="text"
            placeholder=""
          />
        </form>

        <div className="grid gap-4 mt-7">
          <SimpleButton href="{#}" name="Sign In" />
          <a className="font-main font-semibold text-custom-dark" href="{#}">
            Have an account?
          </a>
        </div>
      </div>
<div>
<div className="space-y-10 w-[18rem] grid justify-center">
  <h2 className="text-custom-dark text-9xl hidden font-bold sm:block">Discover Phyral universe</h2>
  <p className="text-base hidden sm:block">Lorem ipsum dolor sit amet consectetur. Nibh volutpat elementum massa
    sollicitudin varius rhoncus sapien. Blandit ipsum eget tempor diam nunc tincidunt nunc 
    et. At blandit condimentum at tortor orci vulputate tincidunt tellus eros. Et blandit adipiscing vitae enim eget. Et adipiscing non arcu non
    eget. Dui porta fermentum lacus.
  </p>
</div>
</div>

    </div>

  );
}
