<!-- <template>
    <div>{{ sum }}</div>
    <div><button @click="changeSum">Change sum</button></div>
</template>
  
<script lang="ts" setup>
    import { ref, watch } from 'vue'
    let sum = ref(0);

    function changeSum() {
        sum.value++;
    }
    //情况一： 监视【ref】定义的【基本类型】数据
    const stopWatch = watch(sum, (newVal, oldVal) => {
        console.log(newVal,  oldVal);
        if(newVal > 10) {
            stopWatch(); //当newVal大于10的时候停止监视
        }
    })
    
</script> -->

<!-- <template>
    <div>{{ person.name }}</div>
    <div>{{ person.age }}</div>
    <div><button @click="changePersonName">Change person name</button></div>
    <div><button @click="changePersonAge">Change person age</button></div>
    <div><button @click="changePerson">Change person</button></div>
</template>
  
<script lang="ts" setup>
    import { ref, watch } from 'vue'
    let person = ref(
        {
            name: 'szz',
            age: 18
        }
    );

    function changePersonName() {
        person.value.name+= '~';
    }

    function changePersonAge() {
        person.value.age+= 1;
    }

    function changePerson() {
        //可以修改
        person.value = {
            name: 'twl',
            age: 20
        }

        //无效
        // person = ref({
        //     name: 'twl',
        //     age: 20
        // })
    }

    //情况二： 监视【ref】定义的【对象类型】数据，监视的是对象地址值，若想监视对象内部属性的变化，需要手动开启deep: true 
    watch(
        person, 
        (newVal, oldVal) => {
            console.log('person 变化了', newVal, oldVal)
        }, 
        {
            //deep: true 开启深度监视，不加如果修改属性，不会触发watch
            //如果修改的是ref定义的对象中的属性（changePersonName）， newVal和oldVal都是新值，因为它们是同一个对象
            //如果修改的是ref定义的对象(changePerson)，newVal是新值，oldVal是旧值，因为不是同一个对象了
            deep: true 
        }
    )
</script> -->

<!-- <template>
    <div>{{ person.name }}</div>
    <div>{{ person.age }}</div>
    <div><button @click="changePersonName">Change person name</button></div>
    <div><button @click="changePersonAge">Change person age</button></div>
    <div><button @click="changePerson">Change person</button></div>
</template>
  
<script lang="ts" setup>
    import { reactive, watch } from 'vue'
    let person = reactive(
        {
            name: 'szz',
            age: 18
        }
    );

    function changePersonName() {
        person.name+= '~';
    }

    function changePersonAge() {
        person.age+= 1;
    }

    function changePerson() {
        //可以修改
        Object.assign(person, {
            name: 'wl',
            age: 20
        })

        //无效
        // person = reactive({
        //     name: 'twl',
        //     age: 20
        // })

        //无效
        // person = {
        //     name: 'twl',
        //     age: 20
        // }
    }

    //情况三： 监视【reactive】定义的对象类型数据，默认开启深度监视，并且不能关闭
    watch(person, (newVal, oldVal) => {
        console.log('person 变化了', newVal, oldVal); //因为本身person地址值没变，所以调用以上三个方法，newVal和oldVal都是一样的
    })
</script> -->

<!-- <template>
    <div>{{ person.name }}</div>
    <div>{{ person.age }}</div>
    <div>{{ person.hobby.type1 }}</div>
    <div>{{ person.hobby.type2 }}</div>
    <div><button @click="changePersonName">Change person name</button></div>
    <div><button @click="changePersonAge">Change person age</button></div>
    <div><button @click="changePersonHobbyType2">Change person hobby type2</button></div>
    <div><button @click="changePersonHobby">Change person hobby</button></div>
    <div><button @click="changePerson">Change person</button></div>
</template>
  
<script lang="ts" setup>
    import { reactive, watch } from 'vue'
    let person = reactive(
        {
            name: 'szz',
            age: 18,
            hobby: {
                type1: 'read',
                type2:  'sport'
            }
        }
    );

    function changePersonName() {
        person.name+= '~';
    }

    function changePersonAge() {
        person.age+= 1;
    }

    function changePersonHobbyType2() {
        person.hobby.type2 = 'sing';
    }

    function changePersonHobby() {
        person.hobby = {
            type1: 'read Bible',
            type2:  'sing song'
        };
    }

    function changePerson() {
        //可以修改
        Object.assign(person, {
            name: 'wl',
            age: 20,
            hobby: {
                type1: 'read Bible',
                type2:  'sing song'
            }
        })

        //无效
        // person = reactive({
        //     name: 'twl',
        //     age: 20
        // })

        //无效
        // person = {
        //     name: 'twl',
        //     age: 20
        // }
    }

    //情况三： 监视【reactive】定义的对象类型数据，默认开启深度监视，并且不能关闭
    watch(person, (newVal, oldVal) => {
        console.log('person 变化了', newVal, oldVal); //因为本身person地址值没变，所以调用以上三个方法，newVal和oldVal都是一样的
    })


    //情况四：监视响应式对象中的某个属性，
        //若该属性是基本类型，要写成函数式
    watch(() => person.name, (newVal, oldVal) => {
        //调用changePerson，changePersonName都会触发
        console.log('person.name 变化了', newVal, oldVal); //newVal和oldVal是不一样的，是name的新旧值
    })
        //若该属性是对象类型，可以直接写，也可以写成函数式
    watch(person.hobby, (newVal, oldVal) => {
        //changePersonHobbyType2时才会触发监听，直接changePersonHobby，changePerson不触发
        //person.hobby.type2 变化了 Proxy(Object) {type1: 'read', type2: 'sing'} Proxy(Object) {type1: 'read', type2: 'sing'}
        console.log('person.hobby.type2 变化了', newVal, oldVal); 
    })

    watch(() => person.hobby, (newVal, oldVal) => {
        //调用changePerson，changePersonHobby都会触发
        //changePersonHobby时才会触发监听，changePersonHobbyType2不触发
        //person.hobby 整个变化了 Proxy(Object) {type1: 'read Bible', type2: 'sing song'} Proxy(Object) {type1: 'read', type2: 'sing'}
        //推荐使用函数式写法，需要深度监视的时候，加上deep:true
        console.log('person.hobby 整个变化了', newVal, oldVal); 
    }, {deep: true})

    //情况五：监视上述组合
    watch([() => person.name, () => person.hobby],(newVal, oldVal) => {
        //person.name或person.hobby 变化了 (2) ['szz~', Proxy(Object)]0: "szz~"1: Proxy(Object) {type1: 'read', type2: 'sport'}length: 2[[Prototype]]: Array(0) (2) ['szz', Proxy(Object)]
        console.log('person.name或person.hobby 变化了', newVal, oldVal); 
    })

</script> -->

<!-- <template>
    <div>{{ person.name }}</div>
    <div>{{ person.age }}</div>
    <div>{{ person.hobby.type1 }}</div>
    <div>{{ person.hobby.type2 }}</div>
    <div><button @click="changePersonName">Change person name</button></div>
    <div><button @click="changePersonAge">Change person age</button></div>
    <div><button @click="changePersonHobbyType2">Change person hobby type2</button></div>
    <div><button @click="changePersonHobby">Change person hobby</button></div>
    <div><button @click="changePerson">Change person</button></div>
</template>
  
<script lang="ts" setup>
    import { reactive, watch } from 'vue'
    let person = reactive(
        {
            name: 'szz',
            age: 18,
            hobby: {
                type1: 'read',
                type2:  'sport'
            }
        }
    );

    function changePersonName() {
        person.name+= '~';
    }

    function changePersonAge() {
        person.age+= 1;
    }

    function changePersonHobbyType2() {
        person.hobby.type2 = 'sing';
    }

    function changePersonHobby() {
        person.hobby = {
            type1: 'read Bible',
            type2:  'sing song'
        };
    }

    function changePerson() {
        //可以修改
        Object.assign(person, {
            name: 'wl',
            age: 20
        })
    }

    //情况五：监视上述组合
    watch([() => person.name, () => person.hobby],(newVal, oldVal) => {
        //person.name或person.hobby 变化了 (2) ['szz~', Proxy(Object)]0: "szz~"1: Proxy(Object) {type1: 'read', type2: 'sport'}length: 2[[Prototype]]: Array(0) (2) ['szz', Proxy(Object)]
        console.log('person.name或person.hobby 变化了', newVal, oldVal); 
    })

</script> -->

<template>
    <div>{{ tem }}</div>
    <div>{{ height }}</div>
   
    <div><button @click="changeTem">Change Tem</button></div>
    <div><button @click="changeHeight">Change Height</button></div>
</template>
  
<script lang="ts" setup>
    import { ref, watch, watchEffect } from 'vue'
    let tem = ref(0);
    let height = ref(0);

    function changeTem() {
        tem.value+= 10;
    }

    function changeHeight() {
        height.value+= 10;
    }

    // watch([tem, height], (val) => {
    //     let [newTem, newHeight] = val;
    //     if(newTem >= 30 || newHeight >= 50) {
    //         console.log('watch向服务器发请求');
    //     }
    // })

    watchEffect( () => {
        console.log(tem.value >= 30 || height.value >= 50);
      if(tem.value >= 30 || height.value >= 50) {
        console.log('watchEffect向服务器发请求');
      }
    });
    

</script>





