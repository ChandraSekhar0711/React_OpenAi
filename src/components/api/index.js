import axios from 'axios';

export class fetchQuery {
  static async queryResult (query){
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '6a39e7aa56msh7489decf097c158p1e0868jsnd293ee2d9536',
        'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
      },
      data: {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: `${query}`,
          }
        ]
      }
    };
    try {
      const res = await axios('https://openai80.p.rapidapi.com/chat/completions',options,setTimeout(5000));
      //console.log(res.data.choices[0].message.content);
      return res.data.choices[0].message.content;
    } catch (error) {
      //console.log(error.response.data.messages+". Please try by mentioning number of words you want like 150 or 100");
      return error.response.data.messages+". Please try by mentioning number of words you want like 150 or 100";
    }
    
    //console.log(options.headers);
  }
}
