import { component$ } from "@builder.io/qwik";

// @ts-ignore
import logoSrc from "~/assets/images/logo1.png?width=180&height=180&png";

export default component$(() => (
  <span class="self-center ml-1 text-2xl md:text-xl font-bold text-gray-900 whitespace-nowrap dark:text-white flex items-center">
    <img
      src={logoSrc}
      class="inline-block mr-1"
      width={90}
      height={90}
      alt="Qwind Logo"
      
    />
    
  </span>
));
