export interface ConversationsInterface {
  senderId: string;
  receiverId: string;
}

export interface MessagesInterface {
  senderId: string;
  message: string;
  conversationId: string;
}

export interface NewConversationInterface {
  senderId: string;
  message: string;
  receiverId: string;
}
