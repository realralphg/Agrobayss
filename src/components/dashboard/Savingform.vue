<template>

<div class="wrap">
    <div class="hold container">
        <div class="form">
            <form>
                <div class="q-pa-md">
                    <div class="q-gutter-md row">
                        <q-select
                            filled
                            v-model="model"
                            label="Simple select"
                            :options="stringOptions"
                            style="width: 250px"
                            behavior="dialog"
                        />

                        <q-select
                            filled
                            v-model="model"
                            use-input
                            input-debounce="0"
                            label="Simple filter"
                            :options="options"
                            @filter="filterFn"
                            style="width: 250px"
                            behavior="dialog"
                        >
                            <template v-slot:no-option>
                            <q-item>
                                <q-item-section class="text-grey">
                                No results
                                </q-item-section>
                            </q-item>
                            </template>
                        </q-select>
                    </div>
                </div>

            </form>
        </div>

    </div>
</div>
  
</template>


<script>
import { ref } from 'vue'

const stringOptions = [
  'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
]

export default {
  setup () {
    const options = ref(stringOptions)

    return {
      model: ref(null),
      stringOptions,
      options,

      filterFn (val, update) {
        if (val === '') {
          update(() => {
            options.value = stringOptions
          })
          return
        }

        update(() => {
          const needle = val.toLowerCase()
          options.value = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
        })
      }
    }
  }
}
</script>

<style scoped>

.wrap{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* position: relative;
    height: 100%; */
     /* position: absolute; */
    /* left: 50%;
    top: 50%; */
    /* transform: translate(-50%, -50%); */
}

.hold{
    position: absolute;
    /* left: 50%; */
    top: 50%;
    /* transform: translate(-50%, -50%); */
}

</style>