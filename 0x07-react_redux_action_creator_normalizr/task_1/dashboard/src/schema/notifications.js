import { schema, normalize } from 'normalizr';
import * as notificationsData from '../../notifications.json';

// Define schemas
const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

// Normalize data
export const normalizedData = normalize(notificationsData.default, [notification]);
export default normalizedData;

