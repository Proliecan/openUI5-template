**Put your stuff here:**
- Model: `model/`
- View: Search project for `id="page1"` in there between `<content>` and `</content>` you can put your content.
- Controller: The controller for the view that gets loaded on init is located at `controller/App.controller.js`.
    - on Init: `onInit()`  
    (replace Contents of `onInit()` with your own code)
    - load HTML from Markdown: `loadHTMLfromMarkdown()`  
    (pretty self explanatory, takes a path like this one. Just look at how it is used.)
    - If you won't be using markdown to HTML conversion, you might want to remove `<script src="https://cdn.rawgit.com/showdownjs/showdown/2.1.0/dist/showdown.min.js"></script>` from `index.html`.