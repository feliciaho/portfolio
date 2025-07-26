<script setup>
import { ref } from "vue";
const experiences = ref([
  {
    type: "Frontend Designer",
    name: "Happytuk",
    time: "April, 2024~April, 2025",
    skills: ["Pug", "SASS", "jQuery", "Gulp", "Vue.js", "Git", "Gitlab CICD"],
    list: [
      "協助官網與活動頁面開發，使用 Pug、Sass、jQuery 建構響應式網頁",
      "將 Vue.js 導入公司原有專案，建立模組化架構，提升前端開發效率30%與後續維護性。",
      "參與 GitLab CI/CD 自動部署流程，提升部署準確性與自動化程度，減少部署時間 20%。",
      "與韓國遊戲廠商跨語言協作，負責前端需求溝通與時程協調",
      "導入 Copilot 與 Cursor 等 AI 工具至開發流程，提升開發效率50%",
      "指導新進成員學習切版與框架開發，強化團隊整體開發能力",
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
      "Vue.js",
      "Git",
    ],
    list: [
      "串接 RESTful API 實現資料讀寫功能，支援前後端整合開發流程。",
      "負責遊戲官網與活動頁 UI 設計與前端開發，實作 HTML / SCSS / jQuery 響應式互動頁面",
      "協助團隊導入 Vue.js 框架，優化專案效能20%與可維護性",
      "主導設計活動 Banner 與主視覺，並協助網站 UI 優化提升點擊率與風格統一",
    ],
  },
])

</script>
<template>
  <section class="s1" id="s1">
    <h1 class="secTitle">Experiences</h1>
    <div class="project_s1" v-for="(i, index) in experiences" :key="index + 'experiences'">
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
