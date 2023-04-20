import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { ChatsService } from 'src/chats/chats.service';
import { Server, Socket } from 'socket.io';
import {
  MessagesInterface,
  NewConversationInterface,
} from '../chats/interface/chat.interface';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private chatService: ChatsService) {}

  @WebSocketServer() server: Server;

  @SubscribeMessage('newConversation')
  async handleNewConversation(
    client: Socket,
    payload: NewConversationInterface,
  ): Promise<void> {
    await this.chatService.startConversation(payload);
    this.server.emit(`newConversation+${payload.receiverId}`, payload);
  }

  @SubscribeMessage('newMessage')
  async handleMessage(
    client: Socket,
    payload: MessagesInterface,
  ): Promise<void> {
    await this.chatService.sendMessage(payload);
    this.server.emit(`newMessage+${payload.senderId}`, payload);
  }

  afterInit(server: Server) {
    console.log(server);
  }

  handleDisconnect(client: Socket) {
    console.log(`Disconnected: ${client.id}`);
  }

  handleConnection(client: Socket, ...args: any[]) {
    console.log(`Connected ${client.id}`);
  }
}
