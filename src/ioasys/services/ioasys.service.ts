import { Injectable } from "@nestjs/common";


@Injectable()
export class IoasysService {
  success: number = 0;
  error: number = 0;

  constructor() { }

  async getLikes(): Promise<number> {
    for (let postNumber = 130; postNumber <= 2000; postNumber++) {
      await this.postVisualize(postNumber);
      await this.postLikes(postNumber);
    }
    console.log(this.success);
    return this.error;
  }

  private async postVisualize(postNumber: number) {
    var axios = require('axios');
    var url = `https://ioasys.prd.appnoz.com.br/api/v1/canvas_publications/${postNumber.toString()}/?visualization`;

    var config = {
      method: 'PATCH',
      url: url,
      headers: {
        'Connection': 'keep-alive',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
        'sec-ch-ua-mobile': '?0',
        'access-token': 'WUcCSTvkcM5xJh9x8RJw',
        'client': 'F1kJzDcpzsrrT64jyhE7',
        'Accept': 'application/json, text/plain, */*',
        'uid': 'gustavofior@ioasys.com.br',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.84 Safari/537.36',
        'resource-type': 'user',
        'host-header': 'ioasys',
        'sec-ch-ua-platform': '"Windows"',
        'Origin': 'https://ioasys.appnoz.com.br',
        'Sec-Fetch-Site': 'same-site',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://ioasys.appnoz.com.br/',
        'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7'
      }
    };


    console.log(`Url: ${url}`);


    await axios(config)
      .then(function (response) {
        //console.log(JSON.stringify(response.data));
        //this.success++;
        //console.log(`Sucesso: ${this.success}`);
        console.log("Sucesso!");

      })
      .catch(function (error) {
        //console.log(error);
        console.log("Error!");
        //this.error++;
      });
  }

  private async postLikes(postNumber: number) {
    var axios = require('axios');
    //var url = `https://noz-dev-client.appnoz.com.br/api/v1/canvas_publications/${postNumber.toString()}/canvas_likes`;
    var url = `https://ioasys.prd.appnoz.com.br/api/v1/canvas_publications/${postNumber.toString()}/canvas_likes`;

    var config = {
      method: 'post',
      url: url,
      headers: {
        'Connection': 'keep-alive',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
        'sec-ch-ua-mobile': '?0',
        'access-token': 'WUcCSTvkcM5xJh9x8RJw',
        'client': 'F1kJzDcpzsrrT64jyhE7',
        'Accept': 'application/json, text/plain, */*',
        'uid': 'gustavofior@ioasys.com.br',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.84 Safari/537.36',
        'resource-type': 'user',
        'host-header': 'ioasys',
        'sec-ch-ua-platform': '"Windows"',
        'Origin': 'https://ioasys.appnoz.com.br',
        'Sec-Fetch-Site': 'same-site',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://ioasys.appnoz.com.br/',
        'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7'
      }
    };


    console.log(`Url: ${url}`);


    await axios(config)
      .then(function (response) {
        //console.log(JSON.stringify(response.data));
        //this.success++;
        //console.log(`Sucesso: ${this.success}`);
        console.log("Sucesso!");

      })
      .catch(function (error) {
        //console.log(error);
        console.log("Error!");
        //this.error++;
      });
  }
}
