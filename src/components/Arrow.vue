<template>
    <div class="l-arrow" :class="[size, orientation]">
        <div class="l-arrow__inside" :class="{ 'l-arrow__inside--dark': color === 'dark' }"></div>
    </div>
</template>

<script>
export default {
    props: {
        size: {
            type: String,
        },
        color: {
            type: String,
        },
        orientation: {
            type: String,
            default: 'top',
        },
    }
}
</script>

<style lang="scss">
@import '../style/gatherer';

.l-arrow {
    width: 0; 
    height: 0; 
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid $primary;

    & &__inside {
        width: 0; 
        height: 0; 
        border-left: 18px solid transparent;
        border-right: 18px solid transparent;
        border-bottom: 18px solid $secondary;
        
        position: relative;
        right: 18px;
        top: 4px;

        &--dark {
            border-bottom: 18px solid $secondary-dark;
        }
    }
    
    &.small {
        border-left: 14px solid transparent;
        border-right: 14px solid transparent;
        border-bottom: 14px solid $primary;

        .l-arrow__inside {
            border-left: 12px solid transparent;
            border-right: 12px solid transparent;
            border-bottom: 12px solid $secondary;
            right: 12px;

            &--dark {
                border-bottom: 12px solid $secondary-dark;
            }
        }
    }

    &.bottom {
        transform: rotate(180deg);
    }

    &.right {
        transform: rotate(90deg);
    }
}
</style>