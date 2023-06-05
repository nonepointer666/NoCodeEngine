import { useErrorLogStore } from "@/stores/errorLog";
const store = useErrorLogStore()
export const addErrorLog = (err) => {
    // eslint-disable-next-line no-console
    if (!err.isRequest) console.error('web-admin-template错误拦截:', err)
    const url = window.location.href
    store.addErrorLog({ err, url })
}

export function setup(app) {
    app.config.errorHandler = addErrorLog
}
