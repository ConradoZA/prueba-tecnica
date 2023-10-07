import { TestBed } from "@angular/core/testing";
import { HttpService } from "./http.service";

describe('HttpService', () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of users', async () => {
    const res = await service.getAllUsers();
    console.log(res);
    expect(res).toBeTruthy();
  });
});
