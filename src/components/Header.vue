<script setup lang="ts">


</script>

<template>
  <header>
    <div class="header">
      <div class="header-left">
        <div class="header-logo">
          <svg width="256" height="22" viewBox="0 0 256 221" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_112_48)">
              <path d="M204.8 0H256L128 220.8L0 0H97.92L128 51.2L157.44 0H204.8Z" fill="#41B883"/>
              <path d="M0 0L128 220.8L256 0H204.8L128 132.48L50.56 0H0Z" fill="#41B883"/>
              <path d="M50.5596 0L128 133.12L204.8 0H157.44L128 51.2L97.9196 0H50.5596Z" fill="#35495E"/>
            </g>
            <defs>
              <clipPath id="clip0_112_48">
                <rect width="256" height="221" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <span>Vue.js</span>
        </div>
        <button class="search-button">
          <img class="search-button-pic" src="./icons/search.svg" alt="search" />
          <span class="search-text">Search</span>
          <span class="search-btn-shortcut">⌘ K</span>
        </button>
      </div>
      <div class="navigation">
        <nav>
          <ul class="nav-menu">
            <li class="dropdown">
              <a href="#">Docs</a>
              <img class="nav-icon" src="./icons/arrow.svg" alt="Arrow">
              <ul class="dropdown-menu">
                <li><a href="#">Guide</a></li>
                <li><a href="#">Tutorial</a></li>
                <li><a href="#">Examples</a></li>
                <li><a href="#">Quick start</a></li>
                <li><a href="#">Glossary</a></li>
                <li><a href="#">Error reference</a></li>
                <li><a href="#">Vue 2 docs</a></li>
                <li><a href="#">Migration from Vue 2</a></li>
              </ul>
            </li>
            <li><a href="#">API</a></li>
            <li><a href="#">Playground</a></li>
            <li class="dropdown">
              <a href="#">Ecosystem</a>
              <img class="nav-icon" src="./icons/arrow.svg" alt="Arrow">
              <ul class="dropdown-menu">
                <li><strong>RESOURCES</strong></li>
                <li><a href="#">Partners</a></li>
                <li><a href="#">Developers</a></li>
                <li><a href="#">Themes</a></li>
                <li><a href="#">UI components</a></li>
                <li><a href="#">Certification</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">T-Shirt shop</a></li>
                <li><strong>OFFICIAL LIBRARIES</strong></li>
                <li><a href="#">Vue Router</a></li>
                <li><a href="#">Pinia</a></li>
                <li><a href="#">Tooling Guide</a></li>
                <li><strong>VIDEO COURSES</strong></li>
                <li><a href="#">Vue Mastery</a></li>
                <li><a href="#">Vue School</a></li>
                <li><strong>HELP</strong></li>
                <li><a href="#">Discord chat</a></li>
                <li><a href="#">GitHub discussions</a></li>
                <li><a href="#">DEV community</a></li>
                <li><strong>NEWS</strong></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Newsletters</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="#">About</a>
              <img class="nav-icon" src="./icons/arrow.svg" alt="Arrow">
              <ul class="dropdown-menu">
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Releases</a></li>
                <li><a href="#">Community guide</a></li>
                <li><a href="#">Code of conduct</a></li>
                <li><a href="#">Privacy policy</a></li>
                <li><a href="#">The documentary</a></li>
              </ul>
            </li>
            <li><a href="#">Sponsor</a></li>
            <li class="dropdown">
              <a href="#">Experts</a>
              <span class="new-p">NEW</span>
              <img class="nav-icon" src="./icons/arrow.svg" alt="Arrow">
              <ul class="dropdown-menu">
                <li><a href="#">Partners</a></li>
                <li><a href="#">Developers</a></li>
              </ul>
            </li>
          </ul>
        </nav>

        <button class="btn header-translation-btn">
          <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
            <path
              d="M9.515 17.23L13.873 6.23H14.896L19.254 17.23H18.173L16.983 14.18H11.785L10.596 17.23H9.515ZM1.635 14.346L0.927 13.638L5.823 8.722C5.25233 8.13867 4.68467 7.42067 4.12 6.568C3.55533 5.71533 3.137 4.936 2.865 4.23H3.945C4.189 4.79 4.558 5.43333 5.052 6.16C5.54533 6.88733 6.03833 7.50567 6.531 8.015C7.401 7.131 8.17367 6.16133 8.849 5.106C9.52367 4.05 9.97233 3.09133 10.195 2.23H0V1.23H6.115V0H7.115V1.23H13.231V2.23H11.234C10.9353 3.27667 10.4263 4.39133 9.707 5.574C8.98767 6.75733 8.16467 7.81067 7.238 8.734L9.773 11.338L9.388 12.368L6.531 9.436L1.635 14.346ZM12.123 13.276H16.646L14.384 7.465L12.123 13.276Z"
              fill="currentColor" />
          </svg>
        </button>

        <select id="theme-select">
          <option id="theme-system" value="system">System</option>
          <option id="theme-light" value="light">Light</option>
          <option id="theme-dark" value="dark">Dark</option>
        </select>

        <div class="buttons">
          <button class="btn header-btns">
            <img src="./icons/gith.svg" alt="github" />
          </button>
          <button class="btn header-btns">
            <img src="./icons/x.svg" alt="twitter" />
          </button>
          <button class="btn header-btns">
            <img src="./icons/disc.svg" alt="discord" />
          </button>
        </div>
      </div>
      <button class="menu-btn">
        <img class="menu-img" src="./icons/menu-sm.svg" alt="menu toggle button"/>
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  width: min(100%, 1500px);
  margin: 0 auto;
  padding: 10px 32px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eeeeee;
}


.header-left {
  display: flex;
  justify-content: flex-start;
}

.header-logo {
  display: flex;
  align-items: center;
}

.header-logo svg {
  width: 24px;
  margin-right: 10px;
}
.search-button {
  background: none;
  border: none;
  display: flex;
  align-items: center;
  padding-left: 16px;
  color: #8d8d8d;
  transition: color 0.3s ease-in-out;
}
.search-button img {
  width: 15px;
  margin-right: 10px;
  opacity: 0.7;
  transition: opacity 0.3s ease-in-out;
}
.search-btn-shortcut {
  display: flex;
  margin-left: 10px;
  color: #8d8d8d;
  padding: 2px 6px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  white-space: nowrap;
  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out;
}

.navigation {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
  padding: 0 10px;
}
.nav-menu {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;
}
.nav-menu li {
  margin-right: 10px;
  font-size: 13px;
  font-weight: 400;
  display: flex;
  align-items: center;
  cursor:pointer;
  color: #213547;
}
.nav-menu li:last-child {
  margin-right: 0px;

}
.nav-menu a {
  text-decoration: none;
  transition: color 0.3s ease-in-out;
  color: #213547;
}
.new-p {
  background-color: rgba(59, 142, 237, 1);
  color: white;
  padding: 1px 2px;
  border-radius: 6px;
  font-size: 10px;
  margin-left: 6px;
}
.header-btns {
  width: 20px;
  padding: 5px;
  margin-left: 10px;
  opacity: 0.7;
  border: none;
  background: none;
  cursor: pointer;
}

.header-btns img {
  width: 20px;
  height: 20px;
}
.nav-icon {
  width: 14px;
  padding-left: 4px;
}
.header-translation-btn {
  background: none;
  border: none;
  padding: 0 10px;
  cursor: pointer;
}
.dropdown {
  position: relative;
  padding: 12px 0;
}

.dropdown-menu {
  padding: 10px 0;
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  min-width: 180px;
  opacity: 0;
  visibility: hidden;
  list-style: none;
  transition: opacity .25s, visibility .25s;
}

.dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
}

.dropdown-menu li {
  padding: 0 18px;
  white-space: nowrap;
  line-height: 28px;
  width: 100%;
  color: rgba(180, 180, 180, 0.692);
  font-size: 10px;
  display: flex;
  justify-content: space-between;
}

.dropdown-menu li a {
  font-size: 13px;
  display: block;
  width: 100%;
  color: rgba(33, 53, 71, 1);
  text-decoration: none;
}

.dropdown-menu li a:hover {
  color: #4caf50;
}
.search-button:hover .search-btn-shortcut {
  color:  #4caf50;;
  border-color:  #4caf50;;
}
.menu-btn {
  display: none;
  background: none;
  border: none;
}
@media (max-width: 1024px) {
  .navigation,
  .search-button {
    display: none;
  }
  .menu-btn{
    display: block;
    width: 16px;
  }
}
</style>
