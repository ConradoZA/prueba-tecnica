import axios from "axios";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor() {}
  private axios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 3000,
  });

  getAllUsers = async (): Promise<any> => {
    try {
      const { data } = await this.axios.get('/users');
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  getOneUser = async (user: string): Promise<any> => {
    try {
      const { data } = await this.axios.get(`/users/${user}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  getAlbums = async (user: string): Promise<any> => {
    try {
      const { data } = await this.axios.get(`/users/${user}/albums`);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  getAlbumPhotos = async (albumId: string): Promise<any> => {
    try {
      const { data } = await this.axios.get(`/albums`);
      const filtered = data.filter(
        (dat: { albumId: string }) => dat.albumId === albumId
      );

      localStorage.setItem('recent', JSON.stringify(filtered));

      return filtered;
    } catch (error) {
      console.log(error);
    }
  };

  getUserToDos = async (user: string): Promise<any> => {
    try {
      const { data } = await this.axios.get(`/todos`);
      const filtered = data.filter(
        (dat: { userId: string }) => dat.userId === user
      );
      return filtered;
    } catch (error) {
      console.log(error);
    }
  };
}
