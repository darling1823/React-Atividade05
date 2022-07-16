import React, {Component} from 'react';

class Atividade extends Component{
  
  state = {music: ['Warm Glow', 'The Devil Is Human', 'Pretend'],
  tvShow: ['Stranger Things', 'The Handmaids Tale', 'Good Girls'],
  movies: ['The Invisible Man', 'The Princess and The Frog', 'Parasite'],
  books: ['Heartstopper', 'The Testaments', 'To Kill a Mockingbird'],
  zodiac: ['Sagittarius', 'Gemini', 'Capricorn'],
  games: ['Crypt of the Necrodancer', 'Firewatch', 'Risk of Rain 2']
}

  render(){
    return(
      <div>
        <h2>Minhas músicas do momento são:</h2>
        <ul>
          {this.state.music.map((item) => <li>{item}</li>)}
        </ul>
        <h2>Algumas séries que assisti:</h2>
        <ul>
          {this.state.tvShow.map((item) => <li>{item}</li>)}
        </ul>
        <h2>Algumas filmes que assisti:</h2>
        <ul>
          {this.state.movies.map((item) => <li>{item}</li>)}
        </ul>
        <h2>Alguns livros que li:</h2>
        <ul>
          {this.state.books.map((item) => <li>{item}</li>)}
        </ul>
        <h2>Meus signos fortes no mapa astral:</h2>
        <ul>
          {this.state.zodiac.map((item) => <li>{item}</li>)}
        </ul>
        <h2>Jogos que estou jogando:</h2>
        <ul>
          {this.state.games.map((item) => <li>{item}</li>)}
        </ul>
      </div>
    )
  }
}

export default Atividade;