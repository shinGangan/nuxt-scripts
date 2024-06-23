<script setup lang="ts">
import { useScriptMyCustomScript } from '#imports'

const { myScript } = useScriptMyCustomScript()

myScript('test')
</script>

<template>
  <div>hello world</div>
</template>
