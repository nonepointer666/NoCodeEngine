export async function setupApp(app) {
    // 加载插件
    const Plugins = import.meta.glob('./plugins/*.ts') // 用于替代require.context的方案
    for (let p in Plugins) {
        const module = await Plugins[p]()
        module.setup(app)
    }
}
