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
    // headers: {'X-Custom-Header': 'foobar'}
  });

  getAllUsers = async (): Promise<any> => {
    try {
      return await this.axios.get('/users');
    } catch (error) {
      console.log(error);
    }
  };

  getOneUser = async (user: string): Promise<any> => {
    try {
      return await this.axios.get(`/users/${user}`);
    } catch (error) {
      console.log(error);
    }
  };
}
