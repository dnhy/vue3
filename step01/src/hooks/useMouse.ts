// mouse.js
import { ref } from 'vue'
import { useEventListener } from './useEventListener'

export function useMouse() {
  const x = ref(0)
  const y = ref(0)

  useEventListener(window, 'mousemove', (event: { pageX: number; pageY: number }) => {
    x.value = event.pageX
    y.value = event.pageY
  })

  return { x, y }
}