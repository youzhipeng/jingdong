<template>
  <div class="text">
    标题：<input type="text" class="inp" v-model="inp">
    <div class="box1">
      <quill-editor
        ref="myQuillEditor"
        v-model="content"
        :options="editorOption"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @ready="onEditorReady($event)"
      />
        <el-button type="primary" @click="submit">发送</el-button>
    </div>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'

export default {
  name: 'textuse',
   components: {
    quillEditor
  },
  data () {
    return {
      content: '',
      inp:'', //文本框内容
      editorOption: {
        // Some Quill options...
      }
    }
  },
  methods: {
    onEditorBlur(quill) {
      console.log('editor blur!', quill)
    },
    onEditorFocus(quill) {
      console.log('editor focus!', quill)
    },
    onEditorReady(quill) {
      console.log('editor ready!', quill)
    },
    onEditorChange({ quill, html, text }) {
      console.log('editor change!', quill, html, text)
    },
    submit() {
      var data = {
        title:this.inp,
        content:this.content
      }
      this.$http.getTet(data).then((res) =>{
        console.log(res)
        this.inp = "",
        this.content = ''

      })
    }
  },
computed: {
  editor() {
    return this.$refs.myQuillEditor.quill
  }
},
mounted() {
  // console.log('this is current quill instance object', this.editor)
}
}

</script>

<style lang="scss" scoped>
.text{
 background: #ffffff;
  width: 90%;
  margin: 0 auto;
  padding: 25px;
  box-sizing: border-box;
  .inp{
    width: 200px;
    margin-bottom: 10px;
  }
}
</style>
<style lang="scss">
.ql-container{
  min-height: 400px;
} 
</style>
