<template>
    <div class="demo-block" :class="[blockClass]">
        <div class="source">
            <slot name="source"/>
            <div class="description" v-if="$slots.default">
                <slot/>
            </div>
        </div>
        <div class="meta" ref="meta">
            <slot name="highlight"/>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        jsfiddle:{
            type:Object
        },
        content:{
            type:Object
        }
    },
    mounted(){
        // console.log(this.jsfiddle,this.content)
    },
    computed:{
        blockClass(){
            return `demo-${this.$router.currentRoute.path.split('/').pop()}`
        }
    }
}
</script>
