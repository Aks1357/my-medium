# aks-my-medium
A custom web element using Angular Element to display the list of user blogs from [Medium.com](https://medium.com)

## Usage
Add script before end of body tag

`<script type="text/javascript" src="//unpkg.com/aks-my-medium@1.0.0/index.js"></script>`

Or using `npm`

`npm i --save aks-my-medium`

and then in JavaScript file

`import 'aks-my-medium';`

Once the file is imported then in HTML

`<aks-my-medium username="aks1357" blogs="true" blog-title="List of Blogs" author="true" author-title="Blog By"></aks-my-medium>`

### Inputs and defaults:
### Inputs
Sr. No. | input        | type         | default          | description
--------|--------------|--------------|------------------|------------
1       | username     | String       | '@aks1357'       | change this to your username
2       | blogs        | Boolean      | false            | to display list of blogs set it to true
3       | blog-title   | String       | 'Blogs'          | update if required
4       | blog-class   | String       | 'blogs-wrapper'  | wrapper CSS class for the blogs section
5       | author       | Boolean      | false            | to display author basic info(title, image and description)
6       | author-title | String       | 'Author Info'    | update if required
7       | author-class | String       | 'author-wrapper' | wrapper CSS class for the author info section

---

### Sample CSS for blogs-wrapper and author-wrapper
```
.blogs-wrapper {
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  .title {
    margin: 0;
    padding: 0 0 10px 0;
    border-bottom: 1px solid #ccc;
  }
  .link {
    a {
      text-decoration: none;
      color: #000000;
    }
    a:hover {
      text-decoration: underline;
    }
  }
  .categories {
    list-style-type: none;
    padding: 0;
    margin: 0;
    li {
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 25%;
      padding: 5px;
      font-size: 12px;
      margin: 5px;
    }
  }
  .categories> :first-child {
    margin-left: 0 !important;
  }
  .separator {
    border-style: ridge;
    border-width: thin;
    border-color: #efefef;
  }
  .separator> :last-child {
    display: none;
  }
}

.author-wrapper {
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  .title {
    margin: 0;
    padding: 0 0 10px 0;
    border-bottom: 1px solid #ccc;
  }
  .link {
    a {
      text-decoration: none;
      color: #000000;
    }
    a:hover {
      text-decoration: underline;
    }
  }
}
```
