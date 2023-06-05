import { reactive } from 'vue';
import { defineStore } from 'pinia';

export const useErrorLogStore = defineStore('errorLog', () => {
  const state = reactive({
    errorLogs: []
  })
  const addErrorLog = (error) => state.errorLogs.push(error)
  const clearErrorLog = () => state.errorLogs = []
  return {
    state,
    addErrorLog,
    clearErrorLog
  }
});
