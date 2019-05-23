export const state = () => ({
  isMobile: false
})

export const mutations = {
  setIsMobile(state, flag) {
    state.isMobile = flag
  }
}
