<template>
    <div>
        <slot />
    </div>
</template>

<script>
// List all CSS modules for Storybook
export default {
    name: "TheStorybookModuleWrapper",
}
</script>

<style lang="scss" scoped>
@import '@/style/gatherer';
@import '@/style/mixins/sunset';
@import '@/style/modules/button';
@import '@/style/modules/card';
</style>
