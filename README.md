# Flexi Table

Flexible, mobile responsive Vue.js Table Component

## Demo

Demo is uploaded on my server. Check this out:

https://flexivue.info

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
              :columns="columns">
</flexi-table>
```

- Color prop is of type string. Four options available:
  1. green
  2. red 
  3. blue
  4. yellow

```javascript
 let color = 'green';
 ```

- Rows (Headers) data should be stored in array like sample below:

```javascript
 let rows = [
   'Row 1', 
   'Row 2',
   'Row 3'
 ];
 ```
- Columns data should be stored as array like:

```javascript
 let columns = [
   {columnName: "Adam", columnType: "Some Product", columnSize: "XXL"},
   {columnName: "Adam", columnType: "Some Product", columnSize: "XXL"},
   {columnName: "Adam", columnType: "Some Products",columnSize: "M"},
 ] 
```

## API

### Props

| Name        | Type        | Description                                                             
| :-----      | :-------    | :----------------------------------------------- 
| color       | String      | Set Color
| rows        | Array       | Set rows / headers                            
| columns     | Array       | Set columns                                         
