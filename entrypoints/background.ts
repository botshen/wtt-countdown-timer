export default defineBackground(() => {
  // 更新徽章文本的函数
  const updateBadgeText = () => {
    // 获取目标日期（这里假设是2024年12月31日）
    const targetDate = new Date('2025-06-09');
    const today = new Date();

    // 计算剩余天数
    const remainingDays = Math.ceil((targetDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    // 设置徽章文本
    browser.action.setBadgeText({ text: remainingDays.toString() + "D" });

    // 设置徽章背景颜色
    browser.action.setBadgeBackgroundColor({ color: '#4CAF50' });
  };

  // 初始更新
  updateBadgeText();

  // 每天更新一次
  setInterval(updateBadgeText, 24 * 60 * 60 * 1000);
});
