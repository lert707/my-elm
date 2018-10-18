const HISTORY_KEY = "search-history";

// 获取搜索历史
export const getHistoryLocal = () => {
  return JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
};

// 添加搜索历史
export const addHistoryLocal = addressInfo => {
  const history = getHistoryLocal();
  history.forEach((e, i) => {
    if (e.address == addressInfo.address) {
      history.splice(i, 1);
    }
  });
  history.unshift(addressInfo);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
};

// 删除搜索历史
export const clearHistoryLocal = () => {
  localStorage.removeItem(HISTORY_KEY);
}