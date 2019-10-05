<template>
<v-container>
    <v-flex offset-2 md6>
        <v-card>
            <v-card-title>Registeration</v-card-title>
            <v-form v-model="valid" ref="form">
                <v-flex offset-1>
                <div class="textfield">
                    
                <v-text-field label="FirstName" :rules="FnameRules" required v-model="student.firstname"></v-text-field>
                <v-text-field label="LastName" :rules="LnameRules" required v-model="student.lastname"></v-text-field>
                <v-text-field label="section"  :rules="sectionRules" v-model="student.section"></v-text-field>
                <v-text-field label="email" required :rules="emailRules" v-model="student.email"></v-text-field>
                <v-text-field label="phoneno" required :rules="PhoneNoRules" v-model="student.phoneno"></v-text-field>
                <v-select label="Gender" :items="options" :rules="[v => !!v || ' Gender is required']" v-model="student.gender"></v-select>
                    
                </div>
                <v-card-actions>
                    <v-btn color="primary" @click="createStudent">Submit</v-btn>
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
const url = 'http://localhost:3000/api/students';
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
        student:{
            firstname:'',
            lastname:'',
            email:'',
            gender:'',
            section:'',
            phoneno:''
        }
    }),
    methods:{
        createStudent(){
            this.$refs.form.validate();
            let method;
            fetch(url,{
                headers:{
                    'Content-Type':'application/json'
                },
                method:'POST',
                body:JSON.stringify(this.student)
            }).then(res=>res.json())
            .then(res=>{
                this.$refs.form.reset();
            })
        }
    }
}
</script>
