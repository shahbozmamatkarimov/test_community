export const useNotification = () => {
  const key = "updatable";

  const showLoading = (messageContent) => {
    message.loading({ content: messageContent, key: key, duration: 100 });
  };

  const showSuccess = (messageContent) => {
    message.success({ content: messageContent, key: key, duration: 2 });
  };

  const showWarning = (messageContent) => {
    message.warning({ content: messageContent, key: key, duration: 2 });
  };

  const showError = (messageContent) => {
    message.error({ content: messageContent, key: key, duration: 2 });
  };

  const destroy = () => {
    message.destroy();
  };

  return {
    showLoading,
    showSuccess,
    showWarning,
    showError,
    destroy,
  };
};
