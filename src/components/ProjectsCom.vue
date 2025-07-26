<script setup>
import { ref } from "vue";
import cboBanner from "@/assets/images/cboBanner.png";
import ghostBanner from "@/assets/images/ghostBanner.png";
import eovBanner from "@/assets/images/eovBanner.png";
import lostBanner from "@/assets/images/lostBanner.jpg";
import recipeBanner from "@/assets/images/recipeBanner.jpg";
import bookingBanner from "@/assets/images/bookingBanner.jpg";

defineProps({
  projects: {
    type: Boolean,
    default: true,
  }
});
const companyProjects = ref([
  {
    type: "Cabel",
    name: "Activity website",
    skills: ["Vue", "HTML", "SASS", "javascript", "RESTful API"],
    webUrl: "https://feliciaho.github.io/cbo_20240129",
    githubUrl: "https://github.com/feliciaho/cbo_20240129",
    img: cboBanner,
  },
  {
    type: "Ghost",
    name: "Christmas website",
    skills: ["HTML", "SCSS", "jQuery", "RESTful API"],
    webUrl: "https://feliciaho.github.io/ghost_20231220",
    githubUrl: "https://github.com/feliciaho/ghost_20231220",
    img: ghostBanner,
  },
  {
    type: "EOV",
    name: "official website",
    skills: ["Pug", "SASS", "jQuery", "Gulp", "Gitlab CICD"],
    webUrl: "https://eov.mangot5.com/eov/index",
    githubUrl: "https://github.com/feliciaho/eov",
    img: eovBanner,
  },
  {
    type: "LostArk",
    name: "Info website",
    skills: ["Vue", "Pug", "SASS", "jQuery", "Gulp", "Gitlab CICD"],
    webUrl:
      "https://landing.mangot5.com/template/lostark/event/250327_pletze/index.html",
    githubUrl: "https://github.com/feliciaho/250327_pletze",
    img: lostBanner,
  },
]);
const sideProjects = ref(
  [
    {
      type: "sideProjects",
      name: "Recipe website",
      skills: [
        "Vue3",
        "Vite",
        "Pinia",
        "Javascript",
        "RESTful API",
        "Github Actions",
      ],
      webUrl: "https://feliciaho.github.io/recipeWeb_new/#/homeView",
      githubUrl: "https://github.com/feliciaho/recipeWeb_new",
      figma: false,
      img: recipeBanner,
    },
    {
      type: "sideProjects",
      name: "Homestay website",
      skills: [
        "Figma MCP",
        "Vue3",
        "Vite",
        "Pinia",
        "Javascript",
        "RESTful API",
        "Github Actions",
      ],
      webUrl: "https://feliciaho.github.io/bookingWeb/#/homeView",
      githubUrl: "https://github.com/feliciaho/bookingWeb",
      figma: true,
      figmaUrl: "https://www.figma.com/design/IWVbELJiG1oS9CLWX8PUBx/Hotel-Booking-Web?node-id=0-1&p=f",
      img: bookingBanner,
    },
  ],
)
</script>
<template>
  <div class="project" v-for="(i, key) in projects ? sideProjects : companyProjects" :key="i">
    <!-- text -->
    <div class="secText">
      <h2 class="projectTitle">Project {{ key + 1 }}</h2>
      <p>{{ i.type }}<span>{{ i.name }}</span></p>
      <div class="skillWrap">
        <label v-for="(skill, index) in i.skills" :key="index + 'skill'">{{ skill }}</label>
      </div>
      <!-- icon -->
      <div class="linkWrap">
        <a target="_blank" rel="noreferrer noopener" :href=i.githubUrl>
          <div class="githubIcon">Github
            <svg role="img" class="svgImg_sec" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12">
              </path>
            </svg>
          </div>
        </a>
        <a target="_blank" rel="noreferrer noopener" :href=i.figmaUrl v-if="i.figma === true">
          <div class="figmaIcon">Figma
            <img src="../assets/images/figma.png" alt="">
          </div>
        </a>
      </div>
    </div>
    <!-- banner -->
    <div class="banner"><a :href=i.webUrl target="_blank">
        <img :src=i.img></a>
      <div class="mask">
        <label class="seemore">see more</label>
      </div>
    </div>
  </div>
</template>
