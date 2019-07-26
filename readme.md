# Quill Markdown Shortcuts

This package is a [Quill.js](https://quilljs.com) module that converts markdown on the fly to formatted rich text.

[Example](https://patleeman.github.io/quill-markdown-shortcuts/)

# Quickstart

## Installation

### Using NPM

Use the NPM package manager to add this dependency to your project.

```bash
npm i -S quill-markdown-shortcuts
```

### Using CDN

Add the library via jsdelivr.

```
<script src="https://cdn.jsdelivr.net/npm/quill-markdown-shortcuts@latest/dist/markdownShortcuts.js">
```

### By downloading file

To incorporate the code into your codebase, simply download the markdownShortcuts.js file and include that in your build process or link a script tag to it directly. Then set up quill and make sure to include the markdownShortcuts setting in modules.

## Usage

### ES6

```js
import Quill from 'quill';
import MarkdownShortcuts from 'quill-markdown-shortcuts';

Quill.register('modules/markdownShortcuts', MarkdownShortcuts);

const quill = new Quill('#editor', {
  theme: 'snow',
  // All you need to do to enable the module is to add a modules key
  // to your quill configuration, and add markdownShortcuts with an
  // empty object.
  // There are currently no options to set.
  modules: {
    markdownShortcuts: {}
  }
});
```

### Script Tag

```html
<body>
  <div class="container">
    <div id="editor"></div>
    <script src="/path/to/node_modules/quill-markdown-shortcuts/dist/markdownShortcuts.js"></script>
    <script>
      var quill = new Quill('#editor', {
        theme: 'snow',
        // All you need to do to enable the module is to add a modules key
        // to your quill configuration, and add markdownShortcuts with an
        // empty object.
        // There are currently no options to set.
        modules: {
          markdownShortcuts: {}
        }
      });
    </script>
  </div>
</body>
```

# Contributing

Issues and pull requests are welcome. If you're interested in contributing, open an issue and start a discussion. To report bugs, open an issue. Bug fixes should be done on a fork and a pull request sent when ready.
