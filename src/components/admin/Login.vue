<template>
    <v-container>
        <v-row>
            <v-col offset-md="3" md="6" xs="12">
                <h1>Admin login</h1>
                <div id="info">
                    <v-text-field 
                     v-model="email"
                     label="Email"    
                     required
                    >
                    </v-text-field>

                    <v-text-field 
                     v-model="password"
                     label="Password"    
                     required
                    >
                    </v-text-field>

                    <v-btn 
                        color="pastry"
                        @click.prevent="signIn()"
                        >
                            Login
                        </v-btn>
                        
                        <v-btn
                        color="pastry"
                        @click.prevent="signOut()"
                        >

                            Sign out
                        </v-btn>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import firebase from 'firebase'
import 'firebase/firestore'
export default {
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods:{
        signIn() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
                this.$router.replace('/admin')
            })
            .catch(function(error) {
            var errorCode = error.code;
            var errorMessasge = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert ("wrong Password") 
            } 
            else {
                alert (errorMessasge)
            }
            console.log(error);
            })
        },
        signOut() {
            firebase.auth().signOut().then(() => {
                alert('Logged out');
                this.$router.replace('/')
            }).catch(error => {
                alert(error);
            })
        }
    }
}

</script>

<style lang="scss" scoped>
#info {
    padding:20px;
    background-color: white;
}
</style>