import {ref, computed, onMounted} from 'vue';

export default function() {
    let sum = ref(0);
    let bigSum = computed(() => sum.value*10)

    function add() {
        sum.value+= 1
    }

    onMounted(() => add())
    return {
        sum,
        bigSum,
        add
    }
}
