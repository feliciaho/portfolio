<script setup>
import { ref } from "vue";
const experiences = ref([
  {
    type: "Frontend Designer",
    name: "Happytuk",
    time: "April, 2024~April, 2025",
    skills: ["Pug", "SASS", "jQuery", "Gulp", "CICD", "Vue", "Git"],
    list: [
      "負責開發並維護官網及活動頁，使用 Pug、SASS 和 JavaScript，jQuery 實現響應式設計和互動功能。",
      "使用 Vue 框架，協助公司將遊戲活動頁面從 JavaScript、jQuery 過渡到 Vue 開發模式。",
      "使用 Gulp 進行前端自動化工具，提升開發效率。",
      "使用 Git 進行版本控制，並進行 CICD 部署。",
      "視覺設計：負責製作網頁主視覺、遊戲 banner。",
    ],
  },
  {
    type: "Website Designer",
    name: "Digeam",
    time: "April, 2023~April, 2024",
    skills: [
      "HTML",
      "SCSS",
      "jQuery",
      "javascript",
      "RESTful API",
      "Vue",
      "Git",
    ],
    list: [
      "負責開發並維護官網及活動頁，使用 HTML、SCSS 和 JavaScript，jQuery 實現響應式設計和互動功能。",
      "引入並整合 Vue 框架，協助公司從 JavaScript、jQuery 過渡到 Vue 開發模式。",
      "RESTful API 串接，實現與後端系統的數據交互和通知。",
      "視覺設計：負責製作網頁主視覺、遊戲 banner。",
    ],
  },
])

</script>
<template>
  <section class="s1" id="s1">
    <h1 class="secTitle">Experiences</h1>
    <div class="project_s1" v-for="(i, index) in experiences" :key="index+'experiences'">
      <!-- text -->
      <div class="secText_s1">
        <div class="secTitleWrap">
          <p>{{ i.type }}<span>{{ i.name }}</span></p>
          <p class="time">{{ i.time }}</p>
        </div>
        <div class="skillWrap">
          <label v-for="(skill, index) in i.skills" :key="index + 'skill'">{{ skill }}</label>
        </div>
        <ul class="list">
          <li v-for="(i, index) in i.list" :key="index + 'list'">{{ i }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
