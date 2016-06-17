var React = require('react')

var About = React.createClass({
  render: function () {
    return <div className="about">
      <h1>How to create a new post</h1>
      <p>
        <ol>
          <li>Click "Posts", then "+ New Post". Enter post title. Click blue checkmark. It opens post edit page.</li>
          <li>Enter post text, using markdown.
            <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">Markdown Cheatsheet</a>
          </li>
          <li>If post need images, follow this. Open image in image viewer. Press Ctrl+C. Then press Ctrl+V in post text. It pasts link to post and upload image data to server. This feature works in Chrome, not in Firefox.</li>
          <li>Click "Publish", then "Preview" link.</li>
          <li>If it looks good, click "Deploy" in menu, enter message, and click "Deploy" button. This generate new site and save backup to version manager.</li>
        </ol>
      </p>
    </div>
  }
})

module.exports = About

