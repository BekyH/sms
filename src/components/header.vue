<template>
<nav>
    <v-toolbar color="primary" class="white--text"  >
        <v-app-bar-nav-icon class="white--text" @click.stop="drawer!=drawer" ></v-app-bar-nav-icon>
        <v-toolbar-title>{{title}}</v-toolbar-title>
        <v-flex md6 offset-2>
            <v-toolbar-items>
                <v-btn text to="/home" class="white--text">Home</v-btn>
                <v-btn text to="/about" class="white--text">Aboutus</v-btn>
                <v-btn text to="/contact" class="white--text">Contactus</v-btn>
                <v-btn text to="/register" class="white--text">register</v-btn>
            </v-toolbar-items>

        </v-flex>
     
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer" class="indigo">

    </v-navigation-drawer>
</nav>
</template>
<script>
export default {
    data: () => ({
        title:'this is vuejs',
        drawer:false

  }),
}
</script>
