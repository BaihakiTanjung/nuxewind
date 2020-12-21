export const state = () => ({
    layout: 'vertical',
    theme: "light",
    minimizeSidebar: true
});
export const mutations = {
    toggleSidebar(state) {
        state.minimizeSidebar = !state.minimizeSidebar
    },
    changeLayout(state, value) {
        state.layout = value;
    },
    changeTheme(state, value) {
        state.theme = value;
    }
}
export const actions = {
    toggleSidebar(state) {        
    }
}