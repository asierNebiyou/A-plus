<template>
  <div class="rich-text-editor">
    <menu-bar
      v-if="editor"
      :editor="editor"
      class="border-b mb-4 p-2 flex flex-wrap gap-2"
    />
    <editor-content :editor="editor" class="prose max-w-none" />
  </div>
</template>

<script setup>
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import YouTube from "@tiptap/extension-youtube";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const editor = useEditor({
  content: props.modelValue,
  extensions: [
    StarterKit,
    Image,
    Link.configure({
      openOnClick: false,
    }),
    YouTube.configure({
      width: 840,
      height: 472.5,
    }),
  ],
  onUpdate: () => {
    emit("update:modelValue", editor.value.getHTML());
  },
});

const MenuBar = defineComponent({
  props: {
    editor: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    return () => (
      <div class="flex flex-wrap gap-2">
        <button
          onClick={() => props.editor.chain().focus().toggleBold().run()}
          class={`p-2 rounded ${
            props.editor.isActive("bold")
              ? "bg-[#92A75A] text-white"
              : "bg-gray-100"
          }`}
        >
          <span class="material-icons">format_bold</span>
        </button>
        <button
          onClick={() => props.editor.chain().focus().toggleItalic().run()}
          class={`p-2 rounded ${
            props.editor.isActive("italic")
              ? "bg-[#92A75A] text-white"
              : "bg-gray-100"
          }`}
        >
          <span class="material-icons">format_italic</span>
        </button>
        <button
          onClick={() =>
            props.editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          class={`p-2 rounded ${
            props.editor.isActive("heading", { level: 2 })
              ? "bg-[#92A75A] text-white"
              : "bg-gray-100"
          }`}
        >
          <span class="material-icons">title</span>
        </button>
        <button
          onClick={() => props.editor.chain().focus().toggleBulletList().run()}
          class={`p-2 rounded ${
            props.editor.isActive("bulletList")
              ? "bg-[#92A75A] text-white"
              : "bg-gray-100"
          }`}
        >
          <span class="material-icons">format_list_bulleted</span>
        </button>
        <button
          onClick={() => {
            const url = window.prompt("Enter the URL");
            if (url) {
              props.editor.chain().focus().setImage({ src: url }).run();
            }
          }}
          class="p-2 rounded bg-gray-100"
        >
          <span class="material-icons">image</span>
        </button>
        <button
          onClick={() => {
            const url = window.prompt("Enter the URL");
            if (url) {
              props.editor.chain().focus().setLink({ href: url }).run();
            }
          }}
          class={`p-2 rounded ${
            props.editor.isActive("link")
              ? "bg-[#92A75A] text-white"
              : "bg-gray-100"
          }`}
        >
          <span class="material-icons">link</span>
        </button>
      </div>
    );
  },
});
</script>

<style>
.rich-text-editor {
  @apply border rounded-lg p-4;
}

.ProseMirror {
  @apply min-h-[200px] outline-none;
}

.ProseMirror > * + * {
  @apply mt-4;
}
</style>
