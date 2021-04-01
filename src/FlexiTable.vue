<template>
  <div>
    <div class="flexi-content">
      <div class="flexi">
        <div class="flexi-container">
          <div 
            class="flexi-header" 
            :class="color"
          >
            <div 
              v-for="(row, key) in rows"
              :key="key"
              class="flexi-header-col"
            >
              <span class="flexi-header-col-item" v-text="row" />
            </div>
          </div>
          <div class="main">
            <div 
              v-for="(column, key) in result"
              :key="key"
              class="main-list"
            >
              <div 
                v-for="(col, index) in rows"
                :key="index"
                class="main-item"
              >
                {{ column["value_" + (index + 1)] }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flexi-pagination">
        <ul class="pagination">
          <li 
            v-for="n in numOfPages"
            :key="n"
          >
            <a href="" @click.prevent="setPage(n)">
              {{ n }}
            </a>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  </div>
</template>
<script>
let defaultColor = "green";
let dummyRows = ["Row 111", "Row 2", "Row 3", "Row 4", "Row 5"];

function getDummyColumns() {
  let result = [];
  for (let i = 0; i < 40; i++) {
    let data = {
      row1: "Column" + (i + 1),
      row2: "Column" + (i + 1),
      row3: "Column" + (i + 1),
      row4: "Column" + (i + 1),
      row: "Column" + (i + 1),
    };
    result.push(data);
  }
  return result;
}

let props = {
  color: {
    type: String,
    default: defaultColor,
  },
  rows: {
    type: Array,
    default: () => {
      return dummyRows;
    },
  },
  columns: {
    type: Array,
    default: () => {
      return getDummyColumns();
    },
  },
};

export default {
  props,
  data() {
    return {
      currentPage: 1,
      perPage: 4,
      perPageOptions: [4, 8],
      source: []
    };
  },
  computed: {
    getColumns() {
      return this.setColumns();
    },
    limit() {
      return this.offset + this.perPage;
    },
    numOfPages() {
      return Math.ceil(this.getColumns.length / this.perPage);
    },
    offset() {
      return (this.currentPage - 1) * this.perPage;
    },
    result() {
      if (this.offset > this.getColumns.length) {
        this.currentPage = this.numOfPages;
      }
      return this.getColumns.slice(this.offset, this.limit);
    }
  },
  methods: {
    setColor(color) {
      this.color = color;
    },
    setColumns() {
      this.source = this.columns;
      let max = this.rows.length;
      let counter = 0;
      for (let pos = 0; pos < this.source.length; pos++) {
        Object.keys(this.source[pos]).map((e) => {
          counter++;
          this.source[pos]["value_" + counter] = this.source[pos][e];
          delete this.source[pos][e];
          if (counter === max) {
            counter = 0;
          }
        });
      }
      return this.source;
    },
    setPage(n) {
      this.currentPage = n;
    },
  },
};
</script>
<style scoped>
.green {
  background: #0fd079;
}

.blue {
  background: #6291ff;
}

.red {
  background: #d47389;
}

.yellow {
  background: #bce228;
}

.flexi-pagination {
  margin: 0 30px;
}

.pagination {
  padding: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  list-style: none;
  color: black;
}

.pagination li a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 0 !important;
}

.pagination li a.active {
  background-color: #4caf50;
  color: white;
}

.pagination li a:hover:not(.active) {
  background-color: #ddd;
}

.flexi {
  display: flex;
}

.flexi-container {
  overflow-x: auto;
  min-height: 100%;
  margin: 10px 10px;
  display: flex;
  flex-direction: column;
}

.flexi-header {
  display: flex;
  justify-content: space-between;
  padding: 7px;
  font-size: 12px;
  font-family: sans-serif;

  color: white;
  cursor: pointer;
}

.flexi-header-col {
  padding: 5px 30px;
  min-width: fit-content;
  flex: 1;
}

.flexi-header-col-item {
  font-size: 13px;
  padding: 0 3px;
}

/*ROWS*/

.main {
  /*min-width: 1000px;*/
  display: flex;
  justify-content: space-between;
  padding: 7px;
  flex-direction: column;
  font-size: 12px;
  font-family: sans-serif;
  background: #f1efef;
  color: #294c4c;
}

.main-item {
  padding: 5px 30px;
  min-width: fit-content;
  flex: 1;
}

.main-list {
  display: flex;
  justify-content: space-between;
  padding: 5px 3px;
  border-bottom: solid 1.2px white;
  cursor: pointer;
}

@media screen and(max-width: 768px) {
  .flexi-header-col {
    min-width: 30px;
    flex: 1;
  }

  .main-item {
    flex: 1;
  }
}
</style>