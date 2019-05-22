<template>
    <div class="demo-block">
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
