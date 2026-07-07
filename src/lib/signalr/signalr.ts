import * as signalR from "@microsoft/signalr";
import {TokenManager} from "../../utils/tokenManager";

class SignalRService {
  connection: signalR.HubConnection | null = null;

  async start() {
    if (this.connection) return;

    this.connection = new signalR.HubConnectionBuilder()
        .withUrl("https://localhost:7120/chathub", {
            accessTokenFactory: () =>
            TokenManager.getAccessToken() || "",
      })
      .withAutomaticReconnect()
      .build();

    await this.connection.start();

    console.log("SignalR Connected");
  }

  on(event: string, callback: (...args: any[]) => void) {
    this.connection?.on(event, callback);
  }

  off(event: string) {
    this.connection?.off(event);
  }
}

export default new SignalRService();