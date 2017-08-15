# Quill Markdown Shortcuts

This package is a [Quill.js](https://quilljs.com) module that converts markdown on the fly to formatted rich text.

[Example](https://patleeman.github.io/quill-markdown-shortcuts/)

# Quickstart

To install the module, [set up an instance of Quill](https://quilljs.com/docs/quickstart/), add a script tag to the compiled markdownShortcuts.js file and add the module to the quill options object. See example.

```
<!DOCTYPE html>
<html>
 <head>
   <meta charset="UTF-8">
   <title>Quill Markdown Shortcuts</title>
   <link href="https://cdn.quilljs.com/1.3.1/quill.snow.css" rel="stylesheet">
   <style>
   body {
     max-width: 700px;
     display: flex;
     justify-content: center;
   }
   </style>
 </head>
 <body>
   <div class="container">
     <div id="editor"></div>
     <script src="//cdn.quilljs.com/1.3.1/quill.js"></script>
     <script src="https://cdn.rawgit.com/patleeman/quill-markdown-shortcuts/master/markdownShortcuts.js"></script>
     <script>
       var quill = new Quill('#editor', {
         theme: 'snow',
         modules: {
           markdownShortcuts: {}
         }
       });
     </script>
   </div>
 </body>
</html>
```
