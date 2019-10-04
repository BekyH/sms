<template>
<nav>
    <v-toolbar color="primary" class="white--text"  >
        <v-toolbar-title>{{title}}</v-toolbar-title>
        <v-flex md6 offset-2>
            <v-toolbar-items>
                <v-btn text class="white--text">Home</v-btn>
                <v-btn text class="white--text">Aboutus</v-btn>
                <v-btn text class="white--text">Contactus</v-btn>
                <v-btn text class="white--text">register</v-btn>
            </v-toolbar-items>

        </v-flex>
     
    </v-toolbar>
</nav>
</template>
<script>
export default {
    data: () => ({
        title:'this is vuejs'
  }),
}
</script>
