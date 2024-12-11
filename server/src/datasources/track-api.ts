import { RESTDataSource } from "@apollo/datasource-rest";

export class TrackAPI extends RESTDataSource {
  baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

  getTracksForHome() {
    return this.get("tracks");
  }

  getAuthor(authorId: string) {
    /*  encodeURIComponent is a standard JavaScript function that encodes special characters in a URI, preventing a possible injection attack vector. */
    return this.get(`author/${encodeURIComponent(authorId)}`);
  }
}
