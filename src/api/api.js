import * as firebase from 'firebase/app';
import 'firebase/database';

export default class Api {
  constructor() {
    this.basePath = '/data/movies';
    this.database = firebase.database().ref(this.basePath).once('value').then((d) => d.val());
  }

  getMovies() {
    return this.database;
  }

  async getMovie(id) {
    const movies = await this.database;
    return movies.filter(({ id: dataId }) => id === dataId).slice(-1).pop();
  }

  // makeHeaders(auth = false) {
  //   const headers = {
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //   };
  //   if (auth) headers.Authorization = `Key ${localStorage.getItem('key')}`;
  //   return headers;
  // }

  // signup(name) {
  //   return fetch(`${this.BASE_URL}/signup`, {
  //     method: 'POST',
  //     headers: this.makeHeaders(),
  //     body: `name=${name}`,
  //   })
  //     .then((res) => res.json())
  //     .then(({ key }) => localStorage.setItem('key', key));
  // }

  // login() {
  //   return fetch(`${this.BASE_URL}/login`, {
  //     method: 'POST',
  //     headers: this.makeHeaders(true),
  //   }).then((res) => res.json());
  // }

  // joinRoom(id) {
  //   return fetch(`${this.BASE_URL}/rooms/${id}`, {
  //     method: 'POST',
  //     headers: this.makeHeaders(true),
  //   }).then((res) => res.json());
  // }

  // getRooms() {
  //   return fetch(`${this.BASE_URL}/rooms`).then((res) => res.json());
  // }

  // createRoom(name) {
  //   return fetch(`${this.BASE_URL}/rooms`, {
  //     method: 'POST',
  //     headers: this.makeHeaders(true),
  //     body: `name=${name}`,
  //   }).then((res) => res.json());
  // }

  // getRoom(roomId) {
  //   return fetch(`${this.BASE_URL}/rooms/${roomId}`).then((res) => res.json());
  // }

  // getChats(roomId) {
  //   return fetch(`${this.BASE_URL}/rooms/${roomId}/chats`).then((res) => res.json());
  // }

  // sendMessage(roomId, message) {
  //   return fetch(`${this.BASE_URL}/rooms/${roomId}/chats`, {
  //     method: 'POST',
  //     headers: this.makeHeaders(true),
  //     body: `message=${message}`,
  //   }).then((res) => res.json());
  // }
}
