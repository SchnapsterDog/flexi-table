# Flexi Table

Flexible, mobile responsive Vue.js Table Component

## Installation

```js
npm i --save-dev flexi-table
```

### Browser

Include the script file, then install the component with `Vue.use(FlexiTable);` e.g.:

```html
<script type="text/javascript" src="node_modules/vuejs/dist/vue.min.js"></script>
<script type="text/javascript" src="node_modules/flexi-table/dist/flexi-table.min.js"></script>
<script type="text/javascript">
  Vue.use(FlexiWidget);
</script>
```

### Module

```js
import FlexiTable from 'flexi-table';
```

## Usage

Once installed, it can be used as simply as:

```html
<flexi-table  :column="column"
              :rows="rows">
</flexi-table>
```

```javascript
  /*
    Columns should be array like example below
  */
 let columns = ['Column 1', 'Column 2', 'Column 3'];
   /*
     Rows should be array as well
   */
 let rows = [
                {whatEverName: "Adam", whatEverProduct: "M", whatEverTotal: "Sunflower"},
                {whatEverName: "Adam", whatEverProduct: "M", whatEverTotal: "Sunflower"},
                {whatEverName: "Adam", whatEverProduct: "M", whatEverTotal: "Sunflower"},
             ] 
```

## API

### Props

| Name        | Type           | Description                                                             |
| :-----      | :-------       | :----------------------------------------------- |
| columns       | Array        | Set columns / headers                            |
| rows          | Array        | Set rows                                         |



##TODO

--Pagination
--Sorting