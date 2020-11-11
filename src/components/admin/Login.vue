<template>
    <v-container>
        <v-row>
            <v-col offset-md="3" md="6" xs="12">
                
                <div id="info">
                    <h2>Admin login</h2>
                    <v-text-field 
                    background-color="white"
                    filled
                    solo
                     v-model="email"
                     label="Email"    
                     required
                    >
                    </v-text-field>

                    <v-text-field 
                     background-color="white"
                     filled
                     solo
                     v-model="password"
                     label="Password"    
                     required
                    >
                    </v-text-field>
                    <v-row id="rowLog">
                    <v-col align="left">
                    <v-btn 
                        id="login"
                        @click.prevent="signIn()"
                        >
                            Login
                        </v-btn>
                        </v-col>
                        <v-col align="right">
                        <v-btn
                        
                        id="logout"
                        @click.prevent="signOut()"
                        >
                            Sign out
                        </v-btn>
                        </v-col>
                    </v-row>
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
    margin-top:15%;
    background-color: #e5b285;
}
#rowLog{
    height: auto;
}
#login, #logout{
    background-color: #db885c;
    width: 130px;
}
h2 {
    display:flex;
    justify-content: center;
    color: white;
    font-size: 1.5em;
    margin-bottom: 5%;
}
</style>