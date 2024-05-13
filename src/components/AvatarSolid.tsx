import { type Component } from "solid-js";
import { user } from "./signals";

export const AvatarSolid: Component = () => {
  return (
    <div>
      <strong>User is "{user()}"</strong>
    </div>
  );
};
