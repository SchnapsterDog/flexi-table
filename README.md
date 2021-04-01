[[Flexi Table]](https://akrinum.com)

[![prs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/SchnapsterDog/flexi-table/pulls)
[![npm version](https://img.shields.io/bundlephobia/min/flexi-table?style=flat-square)](https://www.npmjs.com/package/flexi-table)
[![npm](https://img.shields.io/npm/dw/flexi-table?style=flat-square)](https://www.npmjs.com/package/flexi-table)

Welcome to [version 1.1.5]() of **Flexi Table**, an easy to implement, and well maintained **Vue.js** component.

You can support this project by giving it a star, or following the author. :heart:.

## :exclamation::exclamation::exclamation: This is README for FlexiTable component :exclamation::exclamation::exclamation:

Flexi Table vue component made by [Oliver](https://akrinum.com)

## ⚙ Installation

```js
npm install flexi-table --save-dev
```

## 🤔 How to use it? 

### Module usage 

```js
import FlexiTable from 'flexi-table';

export default {
  components: {
    FlexiTable
  },
  data() {
    return {
      rows: [
        'Row 1', 
        'Row 2',
        'Row 3'
      ],
      columns: [
        {columnName: "Adam", columnType: "Some Product", columnSize: "XXL"},
        {columnName: "Adam", columnType: "Some Product", columnSize: "XXL"},
        {columnName: "Adam", columnType: "Some Products",columnSize: "M"},
      ] 
    }
  }
}
```

```html
<flexi-table 
  :color="'green'"
  :rows="rows"
  :columns="columns"
/>
```

### Browser usage

Include the script file, then install the component with `Vue.use(FlexiTable);` e.g.:

```html
<script type="text/javascript" src="node_modules/vuejs/dist/vue.min.js"></script>
<script type="text/javascript" src="node_modules/flexi-table/dist/flexi-table.min.js"></script>
<script type="text/javascript">
  Vue.use(FlexiTable);
</script>
```
## API

### ❔ Props

| Name        | Type        | Description                                                             
| :-----      | :-------    | :----------------------------------------------- 
| color       | String      | Four colors available (green, red, blue and yelow)
| rows        | Array       | Set rows / headers of the table                          
| columns     | Array       | Set columns of the table                                     

## License

[MIT](http://opensource.org/licenses/MIT)