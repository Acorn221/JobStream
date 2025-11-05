export type Notification = {
	id: string;
	type: 'pending' | 'success' | 'error';
	pendingText: string;
  successText: string;
  errorText: string;
};

export type messagesToExtension = {
  type: 'GetPublicKey';
} | {
  type: 'SendRefreshKey';
  payload: {
    refreshKey: string[];
  };
}| {
  type: 'sendRefreshKey';
  payload: {
    refreshKey: string;
  };
} | {
  type: 'persistentListener';
} | {
  type: 'logout';
} | {
  type: 'checkForNotifications';
  awaiting: boolean;
};

export type messagesFromExtension = {
  type: 'PublicKey';
  payload: {
    publicKey: JsonWebKey;
  };
} | {
  type: 'RefreshKeyReceived';
} | {
  type: 'GetInsecureRefreshKey';
} | {
	type: 'Error';
	payload: {
		error: string;
	};
} | {
  type: 'JobSelected';
} | {
  type: 'loggedOut';
} | {
  type: 'notification';
  payload: {
    notifications: Notification[];
  }
};

export class NotificationManager {
  notifications: Notification[];

  target: EventTarget;

  constructor() {
    this.notifications = [];
    this.target = new EventTarget();
  }

  handleNotification(notification: Notification) {
    const index = this.notifications.findIndex((n) => n.id === notification.id);

    console.log('handleNotification called', notification);

    if (index === -1) {
      this.addNotification(notification);
    } else {
      this.updateNotification(notification);
    }
  }

  addNotification(notification: Notification) {
    this.notifications.push(notification);
    this.target.dispatchEvent(new CustomEvent('notification', {
      detail: notification,
    }));
  }

  updateNotification(notification: Notification) {
    const index = this.notifications.findIndex((n) => n.id === notification.id);
    this.notifications[index] = notification;
    this.target.dispatchEvent(new CustomEvent('notification', {
      detail: notification,
    }));

    // remove notification if it is success or error
    if (notification.type === 'success' || notification.type === 'error') {
      this.notifications = this.notifications.filter((n) => n.id !== notification.id);
    }
  }
}
