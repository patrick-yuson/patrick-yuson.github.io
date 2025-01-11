import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
const isXs = computed(() => width.value < 768)
const isSm = computed(() => width.value > 767 && width.value < 992)
const isMobile = computed(() => width.value < 992)
const isMd = computed(() => width.value > 991 && width.value < 1200)
const isLg = computed(() => width.value > 1199)

export const useScreenSize = () => {
  return { isXs, isSm, isMd, isLg, isMobile }
}
