# Flexi Table

Flexible, mobile responsive Vue.js Table Component

## Installation

```js
npm install flexi-table --save-dev
```

### Module

```js
import FlexiTable from 'flexi-table';
```

### Browser

Include the script file, then install the component with `Vue.use(FlexiTable);` e.g.:

```html
<script type="text/javascript" src="node_modules/vuejs/dist/vue.min.js"></script>
<script type="text/javascript" src="node_modules/flexi-table/dist/flexi-table.min.js"></script>
<script type="text/javascript">
  Vue.use(FlexiTable);
</script>
```

## Usage

Once installed, it can be used as simply as:

```html
<flexi-table  :color="'green'"
              :rows="rows"
              :column="columns">
</flexi-table>
```

```javascript
/*
    Color has to be string. Four options available for test purposes
    -green
    -red 
    -blue
    -yellow
  */
 let color = 'green';

  /*
    Rows should be array like example below
  */
 let rows = ['Row 1', 'Row 2', 'Row 3'];
   /*
     Columns should be array as well
   */
 let columns = [
                {columnName: "Adam", columnType: "Some Product", columnSize: "XXL"},
                {columnName: "Adam", columnType: "Some Product", columnSize: "XXL"},
                {columnName: "Adam", columnType: "Some Products",columnSize: "M"},
             ] 
```

## API

### Props

| Name        | Type        | Description                                                             |
| :-----      | :-------    | :----------------------------------------------- 
| color       | String      | Set Color
| rows        | Array       | Set rows / headers                            |
| columns     | Array       | Set columns                                          |



##TODO