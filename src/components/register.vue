<template>
<v-container>
    <v-flex offset-2 md6>
        <v-card>
            <v-card-title>Registeration</v-card-title>
            <v-form v-model="valid" ref="form">
                <v-flex offset-1>
                <div class="textfield">
                    
                <v-text-field label="FirstName" :rules="FnameRules" required></v-text-field>
                <v-text-field label="LastName" :rules="LnameRules" required></v-text-field>
                <v-text-field label="section"  :rules="sectionRules"></v-text-field>
                <v-text-field label="email" required :rules="emailRules"></v-text-field>
                <v-text-field label="phoneno" required :rules="PhoneNoRules"></v-text-field>
                <v-select label="Gender" :items="options"></v-select>
                    
                </div>
                <v-card-actions>
                    <v-btn color="primary">Submit</v-btn>
                </v-card-actions>
                </v-flex>
            </v-form>
        </v-card>
    </v-flex>
</v-container>
</template>
<style>
.textfield{
    width: 400px;
}
</style>

<script>
export default {
    data: () => ({
        options:[
            'Male',
            'Female'
        ],
         valid: false,
        FnameRules: [
          (v) => !!v || 'FirstName is required',
         
        ],
        LnameRules: [
          (v) => !!v || 'LastName is required',
         
        ],
        PhoneNoRules: [
          (v) => !!v || 'phoneNo is required',
         
        ],
        emailRules: [
          (v) => !!v || 'email is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid', 
        ],
        sectionRules: [
          (v) => !!v || 'section is required',
         
        ],
    })
}
</script>
