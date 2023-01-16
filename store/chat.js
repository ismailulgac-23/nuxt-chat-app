export const state = () => ({
 currentChat: null,
});

export const getters = {
 isUserInChat(state) {
  return state.currentChat !== null;
 },
 getCurrentChat(state) {
  return state.currentChat;
 }
};
export const mutations = {
 setCurrentChat(state, payload) {
  state.currentChat = payload;
 },
 updateMessages(state, payload) {
  state.currentChat.messages = payload;
 },
 addToMessage(state, payload) {
  state.currentChat.messages.push(payload);
 }
};
export const actions = {
 async fetchChatMessages({ commit, getters }) {
  const { getCurrentChat } = getters;
  const url = `/chat/${getCurrentChat.uuid}/messages`;
  this.$axios.get(url).then(({ data }) => {
   commit("updateMessages", data);
   return true;
  }).catch(() => {
   return false;
  });
 },
 sendMessage({ commit, getters }, content) {
  const { getCurrentChat } = getters;
  const url = `/chat/messages`;
  this.$axios.post(url, { content, chatUuid: getCurrentChat.uuid }).then(({ data }) => {
   commit("addToMessage", data);
   return true;
  }).catch(() => {
   return false;
  });
 }
};