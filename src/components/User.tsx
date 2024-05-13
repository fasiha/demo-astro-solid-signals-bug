import { Show, onMount, type Component } from "solid-js";
import { setUser, user } from "./signals";

export const User: Component = () => {
  onMount(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(savedUser);
  });

  const login = () => {
    localStorage.setItem("user", "ahmed");
    setUser("ahmed");
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser("");
  };

  return (
    <div>
      <Show when={user()} fallback={<button onClick={login}>Login</button>}>
        Hello {user()}! <button onClick={logout}>Logout</button>
      </Show>
    </div>
  );
};
