import Client from 'utorrent-api';
import { getType } from 'mime';

const uTorrent = new Client('localhost', '7777');
uTorrent.setCredentials('admin', 'admin');
