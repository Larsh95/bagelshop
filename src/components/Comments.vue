<template>
  <div class="pt-3">
    
    <v-row class="d-flex justify-center" id="commentBox">
      <v-col cols="6" id="commentBox">
        <v-text-field
          label="Add a comment"
          outlined
          v-model="newItem"
          @keyup.enter="addItem"
          background-color="white"
        ></v-text-field>
      </v-col>
      <v-col cols="1" id="commentBox" class="AddBtn">
        <v-btn large color="nav" @click="addItem">Add</v-btn>
      </v-col>
    </v-row>
    <transition-group name="fade">
      <v-card
        class="mx-auto pa-3 ma-2 text-center"
        max-width="400"
        max-height="100"
        v-for="comment in comments"
        :key="comment.id"
      >
        <v-row>
          <v-cols cols="8">
            <v-list-item-title class="headline mb-1">{{ item.comments }}</v-list-item-title>
          </v-cols>
          <v-cols cols="4">
            <v-btn icon color="red" @click="deleteComment(comment.id)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-cols>
        </v-row>
      </v-card>
    </transition-group>
  </div>
</template>


<script>
import {fb} from '../../firebase'
export default {
    data() {
        return {
            comments: [],
            newItem: "",
        }
    },
 methods: {
    async addItem() {
      if (this.newItem) {
        await fb.collection("comments").add({ text: this.newItem });
        this.newItem = "";
      }
    },
    deleteComment(id) {
      fb.collection("comments").doc(id).delete();
    },
    firestore: {
      comments: fb.collection("comments")
        },
    }
}
</script>

<style lang="scss">
#commentBox{
    height:auto;
}
.AddBtn {
  margin-top:1%;
}
</style>