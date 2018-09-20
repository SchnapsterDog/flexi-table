<template>
    <div class="flexi">
        <div class="flexi-container">
            <div class="flexi-header">
                <div v-for="(column, key) in columns"
                     class="flexi-header-col">
                    <span class="flexi-header-col-item">
                    {{ column }}
                </span>
                </div>
            </div>
            <div class="main">
                <div v-for="(row, key) in getRows"
                     class="main-list">
                    <div v-for="(col, index) in columns"
                         class="main-item">
                        {{ row['value_' + (index + 1)] }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    /* Array
   * */

    let dummyColumns = ['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5'],
        dummyRows = [
        {row1: "Adam", row2: "M", row3: "Sunflower", row4: "BG022523A", row5: "WH_Austria"},
        {row1: "Adam", row2: "M", row3: "Sunflower", row4: "BG022523A", row5: "WH_Austria"},
        {row1: "Adam", row2: "M", row3: "Sunflower", row4: "BG022523A", row5: "WH_Austria"},
        {row1: "Adam", row2: "M", row3: "Sunflower", row4: "BG022523A", row5: "WH_Austria"},
        {row1: "Adam", row2: "M", row3: "Sunflower", row4: "BG022523A", row5: "WH_Austria"}
    ];

    /*  PROPS
        1. #columns           @type Array
        2. #rows              @type Array
     */
    let props = {
        columns: {
            type: Array,
            default: () => {
                return dummyColumns;
            }
        },
        rows: {
            type: Array,//return default array if rows is null
            default: ()=> {//must be function if type is Array or Object
                return dummyRows
            }
        }
    };

    export default {
        props,//add props into component
        data() {
            return {
                source: []//get final result
            }
        },
        computed: {
            getRows() {
                return this.setRows();
            }
        },
        methods: {
            setRows(){
                this.source = this.rows;//bind result to source
                let max = this.source.length;
                let counter = 0;
                for (let pos = 0; pos < this.source.length; pos++) {
                    Object.keys(this.source[pos]).map(e => {
                            counter++;
                            this.source[pos]['value_' + counter] = this.source[pos][e];
                            delete this.source[pos][e];
                            if (counter === max) {
                                counter = 0;
                            }
                        }
                    );
                }
                return this.source;
            }
        }
    }
</script>
<style scoped>
    /*
     *  Custom Flexi Table
     *
     */

    .flexi {
        display: flex;
    }

    .flexi-container {
        overflow-x: auto;
        min-height: 100%;
        margin: 10px 10px;
        display: flex;
        flex-direction: column;
        box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.35);
    }

    .flexi-header {
        /*min-width: 1000px;*/
        display: flex;
        justify-content: space-between;
        padding: 7px;
        font-size: 12px;
        font-family: sans-serif;
        background: #0fd079;
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
        /*min-width: 1000px;*/
        display: flex;
        justify-content: space-between;
        padding: 5px 3px;
        border-bottom: solid 1.2px white;
        cursor: pointer;
    }

    /*MOBILE RESPONSIVE*/
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