export const sessionListTranslator = (sessionList: API.SessionVO[] = []) => {
  return sessionList.map((session: API.SessionVO) => {
    return {
      key: session?.id || '',
      label: session?.name || '',
      timestamp: session?.timestamp || '',
    };
  })
};
