import { createApp } from "vue";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";
import tennisBallIcon from "@/assets/img/tennis-ball-icon.jpg";

import App from "@/App.vue";

const applyBranding = () => {
  document.documentElement.lang = "nl";
  document.title = "Coach Rodney";

  const links = [
    { rel: "icon", type: "image/jpeg" },
    { rel: "apple-touch-icon", type: "image/jpeg", sizes: "180x180" },
  ];

  links.forEach(({ rel, type, sizes }) => {
    let link = document.querySelector(`link[rel="${rel}"]`);

    if (!link) {
      link = document.createElement("link");
      link.rel = rel;
      document.head.appendChild(link);
    }

    link.type = type;
    link.href = tennisBallIcon;

    if (sizes) {
      link.sizes = sizes;
    }
  });
};

applyBranding();
createApp(App).mount("#app");
