<script lang="ts" setup>
import { h, ref } from 'vue'

const content = ref('')
const toolbarOptions = ref([
  ['bold', 'italic', 'underline', 'strike'], // toggled buttons
  ['blockquote', 'code-block'],
  ['link', 'image'],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
  [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
  [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
  [{ direction: 'rtl' }], // text direction

  [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ['clean'], // remove formatting button
])

function render() {
  return h('span', { innerHTML: content.value })
}
</script>

<template>
  <QuillEditor
    v-model:content="content"
    theme="snow"
    content-type="html"
    :toolbar="toolbarOptions"
    style="height: 20%;"
  />
  <render />
</template>
