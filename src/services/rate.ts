export class RatesService {
  static async getRates() {
    const response = await fetch(
      'https://aipd-backend-6b3ca45837c1.herokuapp.com/rate/',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

    return await response.json();
  };
}
