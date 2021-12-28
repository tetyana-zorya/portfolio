<template>
<div>
  <v-app-bar dense elevation="0" color="#282630">
    <!-- color="#E5E5E5" -->
    <v-spacer></v-spacer>
    <!-- <v-icon>mdi-github</v-icon> -->
  </v-app-bar>
  <v-app-bar :prominent="prominent" elevation="0" color="#282630">
      <span class="toolbar-left" :style="toolbarMarginLeft"><router-link :to="{name: 'home'}" tag="a" class="toolbar-items">Home</router-link></span>
      <span class="toolbar-link" :style="toolbarMargin"><router-link :to="{name: 'about'}" tag="a" class="toolbar-items">About</router-link></span>
      <v-spacer></v-spacer>
        <span class="toolbar-link" :style="toolbarMargin"><router-link :to="{path: '/#projects'}" class="toolbar-items">Projects</router-link></span>
        <span class="toolbar-right" :style="toolbarMarginRight"><a class="toolbar-items">Other</a></span>
  </v-app-bar>
  </div>
</template>

<script>

export default {
  name: 'navbar',
  computed: {

    prominent() {
      if (this.$route.name == 'home') {
        return true
      }
      else {return false}
    },

    toolbarMargin: function() {
      if (this.$route.name == 'home') {
        return { '--top': '1.5em'}
      }
      else return { '--top': '0em'}
    },

    toolbarMarginRight: function() {
      if (this.$route.name == 'home') {
        return { '--rightMargin': '16em', '--marginTop': '1.5em'}
      }
      else return { '--rightMargin': '0em', '--marginTop': '0em'}
    },

    toolbarMarginLeft: function() {
      if (this.$route.name == 'home') {
        return { '--leftMargin': '16em', '--marginTop': '1.5em'}
      }
      else return { '--rightMargin': '0em', '--marginTop': '0em'}
    }

  },

  
}
</script>

<style lang="scss" scoped>
#bar {
  height: 400px;
}
.toolbar-items {
  z-index: 100000;
  color: #FFFF;
  font-size: 15px;
  text-decoration: none !important;
}
.toolbar-items:hover {
  position:relative;
  bottom:.2em;
}
.toolbar-link {
  padding:1em;
  position:relative;
  top:var(--top);
  //margin-top: 
}
.toolbar-left {
  padding:1em;
  text-decoration: none !important;
  //margin-top: var(--marginTop);
  margin-left: var(--leftMargin);
  position:relative;
  top:var(--marginTop);
}
.toolbar-right {
  padding:1em;
  text-decoration: none !important;
  margin-top: var(--marginTop);
  margin-right: var(--rightMargin)
}

</style>
