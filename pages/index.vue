<template>
    <div>
      <div v-for="locale in localesAll"
        :key="locale.code"
      >
        {{ locale.name }}
      </div>
    </div>

</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import { mapGetters, mapState } from 'vuex'
import { NuxtVueI18n } from 'nuxt-i18n'

export default class MainPage extends Vue
{
    get localesAll() {
        return this.$i18n.locales
    }
}
</script>

<style>
</style>
