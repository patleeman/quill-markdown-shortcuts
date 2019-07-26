import Quill from "quill";
import MarkdownShortcuts from "../../dist/markdownShortcuts";

Quill.register('modules/markdownShortcuts', MarkdownShortcuts);

new Quill('#editor', {
  theme: 'snow',
  modules: {
    markdownShortcuts: {}
  }
});